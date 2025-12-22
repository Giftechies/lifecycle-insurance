"use client";

import { login, register, warmUpDatabase } from "@/actions/auth.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const result = await login({
        username: formData.username,
        password: formData.password,
      });

      if (result.success) {
        console.log("sucess", result);
        router.push("/life-backend");
        toast.success("Logged in successfully!");
      } else {
        console.log("error 1", result);
        toast.error(result.error);
      }
    } catch (error) {
      console.log("error 2", error);
      toast.error(error || error.message);
    }
  }

  useEffect(() => {
    warmUpDatabase();
    // register();
  }, []);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center p-8 bg-[#659aa5] text-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Image
              src="/logo.png"
              alt="alt"
              width={200}
              height={200}
              className="bg-white p-4 mx-auto"
            />
            <h2 className="mt-6 text-3xl font-semibold">Secure Portal</h2>
           
          </div>
          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium mb-2"
                >
                  Username
                </label>
                <input
                  id="username"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 "
                  placeholder="Enter your username"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  type="password"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-gray-800 py-3 px-4 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#154583] focus:ring-offset-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      <Image
        src="/main-banner.jpg"
        alt="Login Image"
        width={1600}
        height={900}
        className="object-cover object-center w-full h-full"
      />
    </div>
  );
}
