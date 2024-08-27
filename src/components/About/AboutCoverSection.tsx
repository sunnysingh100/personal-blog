import React from "react";
import Image from "next/image";
import profileChar from "../../../public/character.png";

function AboutCoverSection() {
  return (
    <section className="w-full md:h-[75vh] border-b-2 border-solid flex flex-col md:flex-row border-dark items-center justify-center text-dark dark:border-light dark:text-light">
      <div className="flex justify-center w-full h-full border-r-2 border-solid md:w-1/2 border-dark dark:border-light relative">
        <Image
          src={profileChar}
          alt="Sunny"
          className="object-contain object-center w-4/5 h-full md:w-full xs:w-3/4"
          priority
          sizes="( max-width: 768px ) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-col items-start justify-center w-full px-5 pb-10 text-left md:w-1/2 xs:p-10 lg:px-16">
        <h2 className="text-4xl font-bold text-center capitalize sxl:text-6xl xs:text-5xl lg:text-left">
          Dream Big, Work Hard, Achieve More!
        </h2>
        <p className="mt-4 text-lg font-medium capitalize">
          This Mantra Drives My Work As A Passionate Freelancer. I Blend
          Innovative Technology With Timeless Design For Captivating Digital
          Experiences. Inspired By Nature And Literature, I&apos;m A Perpetual
          Learner Embracing Challenges. With Each Project, I aim To Leave A
          Lasting Impact—One Pixel At A Time.
        </p>
      </div>
    </section>
  );
}

export default AboutCoverSection;
