"use client"

import "@ant-design/v5-patch-for-react-19"

import React, {useState} from "react"
import {useRouter} from "next/navigation"

// icons
import {Github} from "lucide-react"
import {BsCommand} from "react-icons/bs"
import Link from "next/link"
import {toast} from "react-hot-toast"

function SignIn() {
    const router = useRouter()
    const [email, setEmail] = useState("")

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        if (email === "otabek@mail.ru") {
            localStorage.setItem("user", "true")
            router.push("/dashboard")
            toast.success("Successfully login")
        } else {
            toast.error("Invalid email address!")
        }
    }

    return (
        <div className="flex min-h-screen">
            <div className="hidden lg:flex lg:w-1/2 bg-zinc-900 text-white p-12 flex-col justify-between">
                <div className="flex items-center gap-2">
                    <BsCommand />
                    <span>Acme Inc</span>
                </div>

                <div className="space-y-6">
                    <p className="text-xl leading-relaxed">
                        "This Library has saved me countless hours of work and
                        helped me deliver stunning designs to my clients faster
                        than ever before."
                    </p>
                    <p>Sofia Davis</p>
                </div>
            </div>

            {/* Right Panel - Sign in form */}
            <div className="flex-1 flex flex-col">
                <div className="flex justify-between p-6">
                    <Link
                        href={"/home"}
                        className="text-sm font-medium hover:text-gray-600">
                        Back
                    </Link>

                    <button className="text-sm font-medium hover:text-gray-600">
                        Login
                    </button>
                </div>

                <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
                    <div className="w-full max-w-md space-y-8">
                        <div className="space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Welcome Back
                            </h1>
                            <p className="text-sm text-gray-500">
                                Enter your email below to enter your account
                            </p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-2">
                                <input
                                    type="email"
                                    placeholder="otabek@mail.ru"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 border border-[#a0a0a0] outline-none rounded-md text-sm focus:outline-none "
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2 cursor-pointer px-4 bg-black active:scale-99 text-white rounded-md hover:bg-gray-900 transition-colors text-sm font-medium">
                                Login
                            </button>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-[#a0a0a0]"></div>
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-white px-2 text-gray-500">
                                        Or continue with
                                    </span>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="w-full py-2 px-4 cursor-pointer active:scale-98 bg-white border rounded-md hover:bg-gray-50 text-sm font-medium flex items-center justify-center gap-2">
                                <Github className="h-4 w-4" />
                                Github
                            </button>
                        </form>

                        <p className="text-center text-sm text-gray-500">
                            By clicking continue, you agree to our{" "}
                            <span className="underline cursor-pointer hover:text-gray-800">
                                Terms of Service
                            </span>{" "}
                            and{" "}
                            <span className="underline cursor-pointer hover:text-gray-800">
                                Privacy Policy
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
