import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  return (
    <nav className="sticky top-0 bg-white text-black py-3">
      <div className="flex justify-between items-center md:max-w-3xl lg:max-w-[1400px] xl:max-w-[1600px] mx-auto">
        {" "}
        <h4 className="text-[20px] font-semibold font-mono">Bloger</h4>
        <div className="">
          <div className="">
            <ul className="flex items-center gap-5 text-[17px]">
              <Link href="/">Home</Link>
              <Link href="/profile">Profile</Link>
              {user ? (
                <LogoutLink className="px-4 py-1 bg-purple-300 rounded-md">Logout</LogoutLink>
              ) : (
             <LoginLink className="px-4 py-1 bg-purple-300 rounded-md"> Login</LoginLink>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
