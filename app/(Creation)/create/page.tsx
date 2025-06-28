import React from "react";
import { subscribeFormData } from "@/actions/addform";

export default function page() {
  return (
    <div>
      <p className="text-center">Create a new blog Entry here.</p>
      <h1>Blog Form</h1>
      <form action={subscribeFormData}>
        <input name="id" type="text" placeholder="Insert your id" />
        <input name="title" type="text" placeholder="Insert your title" />
        <input name="author" type="text" placeholder="Insert your author" />
        <input name="body" type="text" placeholder="Insert your body" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
