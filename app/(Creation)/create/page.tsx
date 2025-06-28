import React from "react";
import { subscribeFormData } from "@/actions/addform";
import { createTask } from "@/actions/data";

export default function page() {
  return (
    <div>
      <p className="text-center">Create a new blog Entry here.</p>
      <h1>Blog Form</h1>
      <form action={createTask}>
        {/* <input name="id" type="text" placeholder="Insert your id" /> */}
        <input name="title" type="text" placeholder="Insert your title" />
        <input name="body" type="text" placeholder="Insert your body" />
        <input name="author" type="text" placeholder="Insert your author" />
        <input name="cover_url" type="text" placeholder="Insert your url" />
        {/* <input name="created_at" type="text" placeholder="Insert your author" /> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
