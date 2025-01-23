import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
export default async function page() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  console.log(isUserAuthenticated);

  if (!isUserAuthenticated) {
    redirect("/api/auth/login");
  }
  if (!isUserAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Welcome to your profile!
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            In near future, Here you can manage your settings, preferences, and
            more.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Welcome to your profile!
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          In near future, Here you can manage your settings, preferences, and
          more.
        </p>
      </div>
    </div>
  );
}
