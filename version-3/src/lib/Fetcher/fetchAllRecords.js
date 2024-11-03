// https://dummyjson.com/users?limit=1
"use server";

export async function getAll(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
  
 } catch (error) {
    console.log(error);
    return {};
  
 }
}
