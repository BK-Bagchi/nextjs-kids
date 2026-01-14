"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  return (
    <div className="mx-auto min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-8">
        <h2 className="text-2xl text-primary font-bold text-center mb-6">
          Register
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-md px-4 py-2 border-gray-500 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-md px-4 py-2 border-gray-500 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-md px-4 py-2 border-gray-500 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button className="w-full bg-primary text-white py-2 rounded-md hover:opacity-90">
            Create Account
          </button>
        </form>

        <div className="my-4 flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-md text-gray-800 hover:bg-gray-50">
          <FcGoogle size={20} /> Continue with Google
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
