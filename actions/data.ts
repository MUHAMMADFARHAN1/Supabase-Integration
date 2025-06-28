"use server";

import { createSupabaseServerSide } from "@/lib/supabase/supabase-server";
import { revalidatePath } from "next/cache";

export const fetchTasks = async () => {
  const supabase = await createSupabaseServerSide();
  let { data, error } = await supabase.from("blogs").select("*");
  console.log(data);
  if (error)
    return {
      success: false,
      data: "Cannot fetch tasks",
    };
  return {
    success: true,
    data,
  };
};

export const createTask = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  const author = formData.get("author") as string;
  const cover = formData.get("cover_url") as string;

  const supabase = await createSupabaseServerSide();
  // const { data, error } = await supabase
  //   .from("blogs")
  //   .insert([{ title, body, author, cover_url }]);
  // // .select();

  const { data, error } = await supabase
    .from("blogs")
    .insert([{ title: title, body: body, author: author, cover_url: cover }])
    .select();

  console.log({ title, body, author, cover });
  revalidatePath("/");
};
