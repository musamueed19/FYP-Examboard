"use server"

export async function loginAction(formData) {
  try {
    const response = await fetch('/api/login', { formData });
    const data = await response.json();
    return data;
  }
  catch (e) {
    console.error(e);
  }
}