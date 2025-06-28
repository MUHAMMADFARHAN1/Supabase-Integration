"use server";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const subscribeFormData = async (formData: any) => {
  console.log(formData.get("id"));
  console.log(formData.get("title"));
  console.log(formData.get("author"));
  console.log(formData.get("body"));
  console.log("Hello world");
  await delay(2000);
  return "Subscribed successfully" as any;
};
