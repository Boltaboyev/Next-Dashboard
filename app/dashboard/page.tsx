"use client"
import "@ant-design/v5-patch-for-react-19"
import React, {useState, useEffect} from "react"
import {Button, Layout, Menu, Segmented, theme} from "antd"
import Image from "next/image"
import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay} from "swiper/modules"
import "swiper/css"

import {albumData, playlistData} from "@/utils"

// icons
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons"
import {BiMusic} from "react-icons/bi"
import {CiPlay1} from "react-icons/ci"
import {TbDisc} from "react-icons/tb"
import {BsMusicNoteList} from "react-icons/bs"
import {useRouter} from "next/navigation"

const Dashboard = () => {
    const router = useRouter()

    const user = localStorage.getItem("user")
    if (!user) {
        router.back()
        return
    }

    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken()

    const {Sider, Content} = Layout

    const [collapsed, setCollapsed] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 700) {
                setCollapsed(true)
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <Layout className="h-screen">
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                className="!sticky !top-0">
                <div className="h-screen flex flex-col justify-between select-none !sticky !top-0">
                    <Menu
                        className="!p-[10px_0] !sticky !top-0 !z-50"
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={["3"]}
                        items={[
                            {
                                key: "1",
                                icon: <CiPlay1 className="!text-[20px]" />,
                                label: "Listen Now",
                            },
                            {
                                key: "2",
                                icon: <BiMusic className="!text-[20px]" />,
                                label: "Browse",
                            },
                            {
                                key: "3",
                                icon: <TbDisc className="!text-[20px]" />,
                                label: "Radio",
                            },
                            {
                                key: "4",
                                label: "Library",
                            },
                            {
                                key: "5",
                                icon: <BsMusicNoteList />,
                                label: "Playlists",
                            },
                            {
                                key: "6",
                                icon: <BsMusicNoteList />,
                                label: "Songs",
                            },
                            {
                                key: "7",
                                icon: <BsMusicNoteList />,
                                label: "Artists",
                            },
                            {
                                key: "8",
                                icon: <BsMusicNoteList />,
                                label: "Albums",
                            },
                        ]}
                    />
                    <Menu
                        className="!p-[10px_0] h-screen flex flex-col justify-end select-none !sticky !bottom-0"
                        theme="light"
                        mode="inline"
                        items={[]}
                    />
                </div>
            </Sider>

            <Layout>
                <div className="!flex !justify-between !items-center select-none !my-[10px] !px-[16px] max-[470px]:flex-col max-[470px]:!items-start max-[470px]:gap-2">
                    <div>
                        {!isMobile && (
                            <Button
                                type="text"
                                icon={
                                    collapsed ? (
                                        <MenuUnfoldOutlined />
                                    ) : (
                                        <MenuFoldOutlined />
                                    )
                                }
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: "20px",
                                    width: 64,
                                    height: 64,
                                }}
                            />
                        )}

                        <Segmented
                            size="large"
                            options={["Music", "Podcast", "Live"]}
                        />
                    </div>

                    <Button
                        className="w-[150px] !font-medium !bg-[#0f172a]"
                        type="primary"
                        icon={<PlusCircleOutlined />}>
                        Add Music
                    </Button>
                </div>

                <Content
                    style={{
                        margin: "0 16px",
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <div className="flex flex-col gap-[5px]">
                        <h1 className="font-bold text-[18px]">Listen Now</h1>
                        <p className="opacity-70">
                            Top picks for you. Updated daily.
                        </p>
                    </div>

                    <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        loop
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {slidesPerView: 1},
                            640: {slidesPerView: 2},
                            1024: {slidesPerView: 4},
                        }}
                        modules={[Autoplay]}
                        className="mt-4">
                        {albumData.map((value) => (
                            <SwiperSlide key={value.id}>
                                <div className="flex flex-col gap-[10px]">
                                    <div className="h-[340px] overflow-hidden max-[400px]:h-[250px] rounded-xl flex justify-center items-center">
                                        <Image
                                            src={value.img}
                                            alt={value.title}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-col leading-[130%]">
                                        <h3 className="font-medium">
                                            {value.title}
                                        </h3>
                                        <p className="opacity-70 text-[14px]">
                                            {value.author}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="flex flex-col gap-[5px] mt-10">
                        <h1 className="font-bold text-[18px]">Playlists</h1>
                        <p className="opacity-70">
                            Top picks for you. Updated daily.
                        </p>
                    </div>

                    <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        loop
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            320: {slidesPerView: 2},
                            640: {slidesPerView: 3},
                            1024: {slidesPerView: 5},
                        }}
                        className="mt-4">
                        {playlistData.map((value) => (
                            <SwiperSlide key={value.id}>
                                <div className="flex flex-col gap-[10px]">
                                    <div className="h-[140px] overflow-hidden max-[400px]:h-[100px] rounded-xl flex justify-center items-center">
                                        <Image
                                            src={value.img}
                                            alt={value.title}
                                            className="h-full w-full object-cover"
                                            width={300}
                                            height={340}
                                        />
                                    </div>

                                    <div className="flex flex-col leading-[130%]">
                                        <h3 className="font-medium">
                                            {value.title}
                                        </h3>
                                        <p className="opacity-70 text-[14px]">
                                            {value.author}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Dashboard
