import { Chip } from "@/components/ui/chip";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import React from "react";
import { RegisterForm } from "./components/registerForm";

function RegisterPage() {
  return (
    <div className="w-screen h-[100vh] flex flex-row">
      <div className="w-1/3 h-full relative">
        <div className="flex flex-row overflow-hidden w-full h-full ">
          <Image
            src={"/register/register-bg-image.png"}
            alt="Register background image"
            width={1440}
            height={2048}
            className="object-cover"
          ></Image>
        </div>

        <div className="absolute left-4 top-[40%] flex flex-col gap-2">
          <Typography
            hElement="h2"
            hStyle="h1"
            className="text-shade-1-100% text-8xl font-bold"
          >
            Memora
          </Typography>
          <Typography hElement="h2" hStyle="h3" className="text-shade-1-100%">
            Unlock Languages, Connect Worlds
          </Typography>
        </div>
      </div>
      <div className="w-2/3 h-full">
        <RegisterSection />
      </div>
    </div>
  );
}

export default RegisterPage;

function RegisterSection() {
  return (
    <section className="flex flex-col items-center h-screen ">
      <div className="flex flex-row justify-between items-center px-12 w-full mt-1">
        <div className="h-16 w-[200px] overflow-hidden">
          <Image
            src={"/memora-logo.png"}
            alt="Memora logo"
            className="w-full h-full object-cover"
            width={200}
            height={100}
          ></Image>
        </div>
        <div className="flex flex-row items-center gap-2">
          Already have an account?{" "}
          <Chip
            label="Sign in"
            className="hover:bg-primary hover:text-shade-1-100% hover:border-primary"
          ></Chip>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full ">
        <div className="flex flex-col items-center justify-center min-w-[480px] max-w-[600px] py-10 px-12 gap-4 border-[1px] border-neutral-3 rounded-3xl">
          <Image
            src={"/logo.svg"}
            alt="Register logo"
            className="w-16 h-16 object-cover"
            width={100}
            height={100}
          ></Image>
          <Typography hStyle={"h2"} hElement="h1" className="">
            Create an Account
          </Typography>
          <Typography hStyle={"span"} hElement="h3" className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Typography>
          <RegisterForm className="w-full text-neutral-7 " />
        </div>
      </div>
    </section>
  );
}
