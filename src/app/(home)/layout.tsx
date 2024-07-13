"use client";
import QueryProvider from "@/components/provider/QueryProvider";
import { GlobalStoreProvider } from "@/lib/store/global/provider";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import jwt, { JwtPayload } from "jsonwebtoken";
import Loader from "@/components/shared/Loader";
import Sidebar from "@/components/shared/Sidebar";
import Header from "@/components/shared/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    //   try {
    //     const accessToken = localStorage.getItem("accessToken");
    //     if (accessToken == null) throw new Error("accessToken not found");
    //     const decoded = jwt.decode(accessToken) as JwtPayload;
    //     const role =
    //       decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    //     const exp = decoded["exp"];

    //     console.log(decoded);
    //     console.log("role", role);
    //     console.log("exp", exp);

    setLoading(false);
    //   } catch (err) {
    //     router.push("/login");
    //   }
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <QueryProvider>
          <GlobalStoreProvider>
            <Toaster
              position="bottom-right"
              containerStyle={{
                zIndex: "60 !important",
              }}
              containerClassName="react-hot-toast-container z-[60]"
              toastOptions={{
                className: "react-hot-toast z-60",
                style: {
                  zIndex: "60 !important",
                },
              }}
              reverseOrder={false}
            />
            <div className="bg-neutral-2 dark:bg-[#57606b]">
              {loading ? (
                <Loader />
              ) : (
                <div className="flex h-screen overflow-hidden">
                  <Sidebar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                  />

                  <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    {/* <Header
                      sidebarOpen={sidebarOpen}
                      setSidebarOpen={setSidebarOpen}
                    /> */}
                    <main>
                      <div className="mx-auto max-w-screen-2xl p-2 sm:p-4 md:p-6 2xl:p-10 dark:text-shade-1-100% text-[#1C2434]">
                        {children}
                      </div>
                    </main>
                  </div>
                </div>
              )}
            </div>
          </GlobalStoreProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
