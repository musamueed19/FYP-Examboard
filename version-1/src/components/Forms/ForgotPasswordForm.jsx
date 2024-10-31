"use client";

import { Router } from "next/router";
import { useState } from "react";

export default function ForgotPasswordForm() {
  const [formData, setFormData] = useState({
    email: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function submitHandler(event) {
    event.preventDefault();
      console.log(formData);
      Router.push('/reset-verification')
  }

  return (
    <form onSubmit={submitHandler} className="w-full">
      <div className="flex flex-col gap-10">
        
          <div className="flex flex-col">
            <label
              className="font-medium text-lg text-[#344054]"
              htmlFor="email"
            >
              Enter personal email
              <span className="ml-1 text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              placeholder="email address"
              required
              className="outline-none border-2 rounded-md py-1 px-3"
            />
          </div>
          
        <div>
          <button
            type="submit"
            className="bg-[#226ffe] text-white w-full p-2 font-medium rounded-lg hover:bg-[#324cf3] text-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
