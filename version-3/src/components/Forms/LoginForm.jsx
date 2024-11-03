"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    
  function handleInputChange(event) {
      const { name, value } = event.target;
      setFormData({
          ...formData,
          [name]: value
      })
  }

    
    
    function submitHandler(event) {
        event.preventDefault();
        console.log(formData);
    }
    
    
  return (
    <form onSubmit={submitHandler} className="w-full">
      <div className="flex flex-col gap-10">
        <div className="space-y-2">
          <div className="flex flex-col">
            <label
              className="font-medium text-lg text-[#344054]"
              htmlFor="email"
            >
              Email
              <span className="ml-1 text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              className="outline-none border-2 rounded-md py-1 px-3"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="font-medium text-lg text-[#344054]"
              htmlFor="password"
            >
              Password
              <span className="ml-1 text-red-500">*</span>
            </label>
            <div className="border-2 flex px-2 rounded-md">
              <input
                type="password"
                name="password"
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
                className="outline-none py-1 w-full"
              />
              <Image
                src="/eyeClose.svg"
                alt="hidePassword icon"
                width={16}
                height={16}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-end items-center">
            <Link
              className="text-[#3fa2f7] text-sm hover:underline"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#226ffe] text-white w-full p-2 font-medium rounded-lg hover:bg-[#324cf3] text-lg"
          >
            Sign in
          </button>
        </div>
      </div>
    </form>
  );
}
