// https://dummyjson.com/users?limit=10
"use server";

export async function getAll(url) {
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
}