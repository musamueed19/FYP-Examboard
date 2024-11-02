'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "Home",
    alt: "home icon",
    src: "/home.svg",
    href: "/",
  },
  {
    title: "Users",
    alt: "users icon",
    src: "/users.svg",
    href: "/users",
  },
  {
    title: "Designations",
    alt: "designations icon",
    src: "/designations.svg",
    href: "/designations",
  },
  {
    title: "Locations",
    alt: "locations icon",
    src: "/locations.svg",
    href: "/locations",
  },
  {
    title: "Courses",
    alt: "courses icon",
    src: "/courses.svg",
    href: "/courses",
  },
  {
    title: "Semesters",
    alt: "semesters icon",
    src: "/semesters.svg",
    href: "/semesters",
  },
  {
    title: "Faculties",
    alt: "faculties icon",
    src: "/home.svg",
    href: "/faculties",
  },
  {
    title: "Sections",
    alt: "sections icon",
    src: "/home.svg",
    href: "/sections",
  },
  {
    title: "Exam Strength",
    alt: "examstrength icon",
    src: "/home.svg",
    href: "/examstrength",
  },
  {
    title: "Exam Questions",
    alt: "examquestions icon",
    src: "/home.svg",
    href: "/examquestions",
  },
  {
    title: "Daily QB Status",
    alt: "dailyqb icon",
    src: "/home.svg",
    href: "/dailyqb",
  },
];

export default function Sidebar({ setExpanded, expanded }) {
    
    const pathname = usePathname();
    

    return (
      <div className="h-fit bg-white flex flex-col border-r shadow-sm max-w-full">
        <div
          className={`pb-2 p-4 flex items-center ${
            expanded ? "justify-between" : "justify-center"
          }`}
        >
          <Link
            href="/"
            className={`${
              expanded ? "flex items-center gap-1 text-lg font-bold" : "hidden"
            }`}
          >
            <img
              src="/logoIcon.svg"
              alt="logo image"
              className={`overflow-hidden transition-all ${
                expanded ? "w-8 h-8" : "hidden"
              }`}
            />
            <span className="hidden lg:block">Examboard</span>
          </Link>
          <button onClick={() => setExpanded((curr) => !curr)}>
            <img src="/hamburger.svg" alt="Hamburger icon" className="w-6" />
          </button>
        </div>
        <div className="flex-1 space-y-1 my-5 mx-2.5">
          {menuItems.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className={`group flex items-center p-3 cursor-pointer ${
                pathname === item.href ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              } rounded-lg`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`w-7 h-7 ${
                  pathname === item.href ? "filter invert brightness-0" : ""
                }`}
              />
              <span
                className={`overflow-hidden transition-all ${
                  expanded ? "ml-2 font-medium" : "hidden"
                }`}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </div>

      </div>
    );
}




{/* <div
  className={`border-t flex p-3 items-center gap-3 ${
    expanded ? "" : "justify-center"
  } hover:bg-[#ececec] cursor-pointer`}
>
  <img src="/settings.svg" alt="settings icon" className="w-8" />
  <span
    className={`overflow-hidden transition-all ${
      expanded ? "font-medium text-lg" : "hidden"
    }`}
  >
    Settings
  </span>
</div>; */}