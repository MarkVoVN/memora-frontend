import { Button } from "@/components/ui/button";
import {
  ArrowLeftCircleIcon,
  BellDot,
  HomeIcon,
  Settings,
  SquarePen,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React, { useEffect, useRef, useState } from "react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const sidebarStructure: {
  title: string;
  items: {
    name: string;
    link: string;
    icon: React.ReactElement;
  }[];
}[] = [
  {
    title: "ITEMS",
    items: [
      {
        name: "Home",
        link: "/",
        icon: <HomeIcon />,
      },
      {
        name: "Study set",
        link: "/studyset",
        icon: (
          <Image
            width={24}
            height={24}
            src={"/icon/studyset_icon.svg"}
            alt="Logo"
          />
        ),
      },
      {
        name: "Quiz",
        link: "/quiz",
        icon: (
          <Image
            width={24}
            height={24}
            src={"/icon/quiz_icon.svg"}
            alt="Logo"
          />
        ),
      },
      {
        name: "Notification",
        link: "/notification",
        icon: <BellDot />,
      },
      {
        name: "Settings",
        link: "/settings",
        icon: <Settings />,
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  console.log(pathname);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-[9999] flex h-screen w-72.5 flex-col overflow-y-hidden text-neutral-5 bg-neutral-1  duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 pl-10 pb-2 pt-4 lg:py-6.5">
        <Link href="/dashboard">
          <Image
            width={176}
            height={32}
            src={"/memora-logo-icon-transparent.png"}
            alt="Logo"
          />
        </Link>
        <Button
          variant="outline"
          size="icon"
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="flex justify-between items-center lg:hidden cursor-pointer z-10 bg-none"
        >
          <ArrowLeftCircleIcon className="flex-1" />
        </Button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div
            className={`group relative flex flex-row items-center justify-between rounded-sm font-medium text-neutral-6 mb-3`}
          >
            <div className="flex flex-row gap-2  w-full py-2 pl-4 rounded-sm ">
              <UserIcon></UserIcon>
              John Doe
            </div>
            <div className="p-2 hover:bg-neutral-3 flex flex-row items-center justify-center rounded-sm hover:cursor-pointer">
              <SquarePen className="w-6 h-6" />
            </div>
          </div>
          {sidebarStructure.map((sidebarItem) => (
            <div key={sidebarItem.title}>
              <ul className="mb-6 flex flex-col gap-2 min-w-[250px]">
                {sidebarItem.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-neutral-6 duration-300 ease-in-out hover:bg-graydark ${
                        (item.link.toLowerCase() === "/"
                          ? pathname === "/"
                          : pathname.includes(item.link.toLowerCase())) &&
                        "bg-neutral-7 text-shade-1-100%"
                      }`}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
