"use client";
import {useForm, SubmitHandler} from "react-hook-form";
import Link from "next/link";
import {DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon} from "../icons";

type FormValues = {
  email: string;
};

function Footer() {
  const {register, handleSubmit, reset} = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <footer className="flex flex-col items-center m-4 mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 sm:m-10 text-light dark:text-dark">
      <h3 className="px-4 mt-16 text-2xl font-medium text-center capitalize dark:font-bold sm:text-3xl lg:text-4xl">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="w-full px-4 mt-5 text-sm font-medium text-center sm:w-3/5 dark:font-medium sm:text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", {required: true, maxLength: 80})}
          className="w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1 dark:text-light dark:focus:border-light"
        />

        <input
          type="submit"
          value="Submit"
          className="px-3 py-1 font-medium rounded cursor-pointer bg-dark text-light dark:text-dark dark:bg-light sm:px-5 "
        />
      </form>
      {/* Social Links */}
      <div className="flex items-center mt-8">
        <a
          href="/"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="transition-all duration-200 hover:scale-125 ease" />
        </a>
        <a
          href="/"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="transition-all duration-200 hover:scale-125 ease" />
        </a>
        <a
          href="/"
          className="inline-block w-6 h-6 mr-4 fill-light"
          aria-label="Check my profile on Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="transition-all duration-200 fill-light dark:fill-dark hover:scale-125 ease" />
        </a>
        <a
          href="/"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Dribbble"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DribbbleIcon className="transition-all duration-200 hover:scale-125 ease" />
        </a>
      </div>
      {/* copyright */}
      <div className="relative flex flex-col items-center justify-between w-full px-8 py-6 mt-16 font-medium border-t border-solid md:mt-24 border-light md:flex-row">
        <span className="text-center">
          &copy;{new Date().getFullYear()} Sunny. All rights reserved.
        </span>
        <Link
          href="/sitemap.xml"
          className="my-4 text-center underline md:my-0"
        >
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by{" "}
          <a href="#" className="font-bold underline" target="_blank">
            Sunny
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
