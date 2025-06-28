import React from "react";
import { subscribeFormData } from "@/actions/addform";
import { fetchTasks } from "@/actions/data";

export default async function page() {
  const { success, data }: Response = await fetchTasks();
  if (!success) return <p className="text-red-600">{data}</p>;
  if (typeof data !== "string");
  console.log(data);
  return (
    <>
      <div className="flex justify-between flex-row gap-1 px-20 pt-10 text-left">
        <p>title</p>
        <p>body</p>
        <p>author</p>
        <p>cover_url</p>
        <p>created_at</p>
      </div>
      {data?.map((note: any) => (
        <div
          key={note.id}
          className="flex justify-between flex-row gap-1 px-20 pt-10 text-left"
        >
          <div>{note.title}</div>
          <div>{note.body}</div>
          <div>{note.author}</div>
          <div>{note.cover_url}</div>
          <div>{note.created_at}</div>
        </div>
      ))}
    </>
  );
}

