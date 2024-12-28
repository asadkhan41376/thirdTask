
"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from "@/components/ui/button"
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { MdDoubleArrow } from "react-icons/md";
import { useRouter } from 'next/navigation';
import swiperData from "@/lib/data.json"







export default function Home() {
  const MySwipe = useRef()
  const [isLastSlide, setIsLastSlide] = useState(false);
  const router = useRouter()

  // for handleClick Swiper Button Manual
  const handleClick = () => {

    if (!isLastSlide) {

      MySwipe.current?.slideNext();
    }
    else {
      router.push("/YouDidGreat")
    }
  }

  return (
    <>
      <Swiper
        onSlideChange={(swiper) => {
          setIsLastSlide(swiper.activeIndex == swiperData.length - 1)
        }}
        onSwiper={(swipe) => {
          MySwipe.current = swipe;
        }}
        modules={[Navigation]}
        allowTouchMove={false}

      >

        {
          swiperData.map((item, index) => (
            <SwiperSlide className='relative' key={index}>


              {/* YE APNA CONTAINT SLIDE KA  */}

              <div className=' h-screen w-full flex  justify-around items-center  '>

{/* first image ============================ */}

                <div className='bg-[#79DAFF] h-full w-full flex items-center justify-center'>
                  <div className='imageFirst w-[500px] h-[400px] relative rounded-2xl overflow-hidden shadow-md shadow-black'>
                    <Image src={item.Image1} layout='fill' objectFit='cover' alt='image' />
                    <h1 className='absolute bottom-0 text-center w-full py-2 bg-white text-3xl  text-black '>{item.firstHeading}</h1>
                  </div>
                </div>


{/* secound image ============================ */}

                <div className=" lg:bg-[#99A1B3] h-full w-full flex items-center justify-center ">


                  <div className='imageSecound w-[500px] h-[400px] relative rounded-2xl overflow-hidden shadow-md shadow-black'>
                    <Image src={item.Image2} layout='fill' objectFit='cover' alt='image' />
                    <h1 className='absolute bottom-0 text-center w-full py-2 bg-white text-3xl  text-black '>{item.SecoundHeading}</h1>
                  </div>
                </div>

              </div>

              {/* YE APNA BTN   */}
              <div className="absolute top-0 flex justify-between items-center w-full flex-col h-full py-5  ">
                <div className='text-center  ' >
                  <h1 className='text-3xl font-bold'>Design</h1>
                  <p className='text-sm max-w-full px-8 '>Fish| Flipper
Burs sticking on animal fur | Velcro
Bird with pointed beak| Bullet train
Flower | Paint colours
Woodpecker | Football helmet
                  </p>

                </div>

                <div className='relative myBtn '>

                  <Button variant="outline" onClick={handleClick} className="bg-black text-xl text-white  hover:bg-transparent   h-[50px] py-4 px-8 w-[150px] btn " >Next <MdDoubleArrow /></Button>
                </div>
              </div>

            </SwiperSlide>
          ))
        }



      </Swiper>

    </>


  );
}
