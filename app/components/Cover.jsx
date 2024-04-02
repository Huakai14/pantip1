"use client"
import React from 'react'
import {Card, CardHeader,Image} from "@nextui-org/react";
const Cover = () => {
  return (
    <div class="bg-cover bg-center" style={{ backgroundImage: `url('/cover.jpg')`, width: '100%',height: '100%', }}>
        <h2 class ="text-4xl text-center text-white py-14">ข่าวสาร</h2>
        <div className="max-w-[1000px] gap-6 grid grid-cols-12 grid-rows-2 px-8 mx-auto">
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">สนทนาเรื่องกีฬา</p>
                    <h4 className="text-white font-medium text-large">พูดคุยเรื่องกีฬา</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="/sport.jpg"
                />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">ก้นครัว</p>
                    <h4 className="text-white font-medium text-large">พูดคุยเรื่องอาหาร</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="/food.jpg"
                />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">เฉลิมไทย</p>
                    <h4 className="text-white font-medium text-large">พูดคุยเรื่องภาพยนตร์</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="/movie.jpg"
                />
            </Card>
            <Card className="col-span-12 sm:col-span-4 h-[300px]">
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-white/60 uppercase font-bold">มาบุญครอง</p>
                    <h4 className="text-white font-medium text-large">พูดคุยเรื่องโทรศัพท์</h4>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src="/phone.jpg"
                />
            </Card>
        </div>
        <div className="mb-10">
            a
        </div>
    </div>
  )
}

export default Cover