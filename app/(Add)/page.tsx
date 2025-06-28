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


// const { success, data }: Response = await fetchTasks();
// if (!success) return <p className="text-red-600">{data}</p>;
// if (typeof data !== "string")
//     return (
//         <main className="flex min-h-screen flex-col items-center justify-between p-24">
//             <div>
//                 <Form />
//                 <ul className="mt-12 space-y-4">
//                     {data?.map((note: any) => (
//                         <div
//                             key={note.id}
//                             className="min-w-[300px] flex justify-between items-center"
//                         >
//                             <span>{note.text}</span>
//                             <Link href={`/notes/${note.id}`}>
//                                 <Button>open</Button>
//                             </Link>
//                             <DeleteButton id={note.id} />
//                         </div>
//                     ))}
//                 </ul>
//             </div>
//         </main>
//     );