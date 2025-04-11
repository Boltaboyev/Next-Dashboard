"use client"
import "@ant-design/v5-patch-for-react-19"
import React from "react"

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/autoplay"

import {Autoplay} from "swiper/modules"

import {
    Home,
    Search,
    Library,
    Plus,
    Heart,
    Download,
    ChevronLeft,
    ChevronRight,
    User2,
    Play,
    Volume2,
} from "lucide-react"
import {homeData, homePlaylistData} from "@/utils"
import Image from "next/image"

function HomePage() {
    return (
        <div className=" bg-black text-white flex flex-col">
            <main className="flex-1 bg-gradient-to-b from-indigo-900 to-black overflow-y-auto">
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-6">Good evening</h1>

                    <div className="grid grid-cols-3 gap-4 mb-8 max-[1050px]:grid-cols-2 max-[590px]:grid-cols-1">
                        {homePlaylistData.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center bg-white/10 hover:bg-white/20 transition rounded-md overflow-hidden group">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    className="h-20 w-20 object-cover"
                                />
                                <div className="flex flex-col leading-[130%] ml-3">
                                    <span className="font-medium">
                                        {item.title}
                                    </span>
                                    <p className="opacity-70 text-sm">{item.count} music</p>
                                </div>
                                <button className="cursor-pointer ml-auto mr-4 bg-green-500 rounded-full p-3 shadow-xl opacity-0 group-hover:opacity-100 transition">
                                    <Play
                                        fill="black"
                                        className="text-black"
                                        size={20}
                                    />
                                </button>
                            </div>
                        ))}
                    </div>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">
                            Made for you
                        </h2>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            loop
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                640: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                                1280: {
                                    slidesPerView: 4,
                                },
                                1536: {
                                    slidesPerView: 5,
                                },
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            className="my-6">
                            {homeData.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition group">
                                        <div className="relative">
                                            <Image
                                                src={item.img}
                                                alt={item.title}
                                                className="w-full aspect-square object-cover rounded-md mb-4"
                                            />
                                            <button className="absolute bottom-2 right-2 bg-green-500 rounded-full p-3 shadow-xl opacity-0 group-hover:opacity-100 cursor-pointer translate-y-2 group-hover:translate-y-0 transition">
                                                <Play
                                                    fill="black"
                                                    className="text-black"
                                                    size={20}
                                                />
                                            </button>
                                        </div>
                                        <h3 className="font-semibold mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                            {item.author}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default HomePage
