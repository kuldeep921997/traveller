'use client'

import dynamic from 'next/dynamic';
import { ChakraProvider } from '@chakra-ui/react';

export default function Home() {

  const gangaGhat3 = "/images/ganga_ghat_3.jpg"
  const Carousel = dynamic(() => import('../components/Carousel'), { ssr: false });


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <img src={gangaGhat3} alt="slider_img_1" style={{ width: "100%", height: "80vh" }} />

        <ChakraProvider >
          <Carousel />
        </ChakraProvider>
      </main>

    </div>
  );
}
