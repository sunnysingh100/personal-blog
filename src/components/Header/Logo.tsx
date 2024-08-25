"use client";
import Image from "next/image";
import Link from "next/link";
function Logo() {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="relative mr-2 overflow-hidden border border-solid rounded-full w-14 h-14 md:w-16 md:h-16 border-dark dark:border-gray md:mr-4">
        <Image
          src="/profile-img.png"
          alt="Sunny"
          className="w-full h-auto rounded-full"
          fill
          sizes="33vw"
          priority
        />
      </div>
      <span className="text-lg font-bold dark:font-semibold md:text-xl">
        Sunny
      </span>
    </Link>
  );
}

export default Logo;
