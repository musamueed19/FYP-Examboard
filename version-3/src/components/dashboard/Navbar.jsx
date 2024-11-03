import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="bg-slate-300/25 w-full flex justify-end items-center py-2 px-6">
      <div className="flex gap-[4rem]">
        <Image
          src="/bell.svg"
          alt="bell icon"
          width={30}
          height={30}
          className="filter contrast-0 brightness-0 hover:contrast-100 hover:brightness-100 cursor-pointer"
        />
        <div className="flex items-center gap-3">
          {dropdown && <span>User's Name</span>}
          <div
            className="cursor-pointer p-2 hover:bg-gray-400 bg-gray-400/50 rounded-full relative"
            onClick={() => setDropdown((curr) => !curr)}
          >
            <Image
              src="/profile.svg"
              alt="profile icon"
              width={30}
              height={30}
            />
          </div>
          {dropdown && (
            <div className="fixed z-10 bg-white border top-[4rem] right-6 flex flex-col items-center rounded-lg border-black/70">
              <Link
                href="/login"
                className="border-b border-black/70 p-2 hover:bg-blue-500 hover:text-white font-medium"
              >
                Change Password
              </Link>
              <Link
                href="/login"
                className="p-2 text-center w-full text-red-500 font-medium hover:bg-red-200/50"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
