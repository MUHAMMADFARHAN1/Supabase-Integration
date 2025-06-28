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
