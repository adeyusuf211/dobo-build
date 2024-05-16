"use client";

import { useAOS } from "@/hooks/useAOS";

export default function MotivationComponent() {
  useAOS();
  return (
    <div className="w-full h-full my-10 flex flex-col gap-5" data-aos="fade-up">
      <div className="flex lg:flex-row flex-col gap-3">
        <div className="min-w-32 lg:w-[50%] w-full min-h-32 h-full bg-blue-200 flex justify-center items-center">
          <h3 className="font-semibold text-center text-3xl">
            Your image here
          </h3>
        </div>
        <div className="w-full h-full p-4 italic text-white text-3xl">
          #mutiaradeskripsi
        </div>
      </div>
      <div className="flex flex-col gap-5 my-5">
        <h1 className="2xl:text-6xl lg:text-4xl text-center font-semibold text-white">
          Pengembangan Projek Profil Pelajar Pancasila
        </h1>
        <div className="flex lg:flex-row flex-col gap-3">
          <div className="min-w-32 w-full min-h-40 h-full bg-blue-200 flex items-center justify-center">
            <h1 className="font-semibold text-lg">Image</h1>
          </div>
          <div className="min-w-32 w-full min-h-40 h-full bg-blue-200 flex items-center justify-center">
            <h1 className="font-semibold text-lg">Image</h1>
          </div>
          <div className="min-w-32 w-full min-h-40 h-full bg-blue-200 flex items-center justify-center">
            <h1 className="font-semibold text-lg">Image</h1>
          </div>
          <div className="min-w-32 w-full min-h-40 h-full bg-blue-200 flex items-center justify-center">
            <h1 className="font-semibold text-lg">Image</h1>
          </div>
          <div className="min-w-32 w-full min-h-40 h-full bg-blue-200 flex items-center justify-center">
            <h1 className="font-semibold text-lg">Image</h1>
          </div>
          <div className="min-w-32 w-full min-h-40 h-full bg-blue-200 flex items-center justify-center">
            <h1 className="font-semibold text-lg">Image</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
