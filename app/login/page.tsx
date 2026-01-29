"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
   const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const router = useRouter();

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
  });
const handleLogin = async () => {
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res?.error) {
      alert(res.error);
      return;
    }

    alert("Login successful!");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-[#dbdee1]">
      <div className="w-[600px] h-[650px] bg-[#313338] rounded-md shadow-xl flex flex-col px-8 py-6">

        {/* Top Logo */}
        <div className="flex justify-center p-4">
          <img
            src="/img/nasa.jpg"
            style={{ width: "70px", height: "70px", borderRadius: "50%" }}
          />
        </div>

        {/* Invite Info */}
        <div className="flex items-center gap-3 mb-6">
          <Image
            src="/img/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <p className="text-sm text-gray-400">
              Harper (harper8719) invited you to join
            </p>
            <h1 className="text-xl font-semibold text-white">
              AI Girl Image Generator
            </h1>
            <p className="text-xs text-gray-400 mt-1">● 2 Members</p>
          </div>
        </div>

        {/* Login Form */}
        <div className="space-y-4">

          
          {/* Email Field */}
          <div>
            <label className="text-xs font-semibold uppercase">
              Email or Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your email or phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full mt-1 px-3 py-2 bg-[#1e1f22] border rounded-md outline-none 
                ${errors.email ? "border-red-500" : "border-gray-600"}`}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                ❗ Email or phone is required.
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="text-xs font-semibold uppercase">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full mt-1 px-3 py-2 bg-[#1e1f22] border rounded-md outline-none 
                ${errors.password ? "border-red-500" : "border-gray-600"}`}
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">
                ❗ Password is required.
              </p>
            )}
          </div>

          <a href="#" className="text-sm text-[#00a8fc] hover:underline">
            Forgot your password?
          </a>

          <button
            onClick={handleLogin}
            className="w-full mt-2 bg-[#5865f2] hover:bg-[#4752c4] py-2 rounded-md text-white font-medium"
          >
            Log In
          </button>

          <p className="text-sm text-gray-400">
            Need an account?{" "}
            <Link href="/register" className="text-[#00a8fc] hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
