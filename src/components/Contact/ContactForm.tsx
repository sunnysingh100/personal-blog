"use client";
import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  phoneNumber: number;
  projectDetails: string;
};

export default function ContactForm() {
  const {register, handleSubmit, reset} = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-base font-medium leading-relaxed xs:text-lg sm:text-xl font-in"
    >
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="your name"
        {...register("name", {required: true, maxLength: 80})}
        className="p-0 mx-2 bg-transparent border-0 border-b outline-none focus:ring-0 placeholder:text-center placeholder:text-lg border-gray focus:border-gray"
      />
      and I want to discuss a potential project. You can email me at
      <input
        type="email"
        placeholder="your@email"
        {...register("email", {})}
        className="p-0 mx-2 bg-transparent border-0 border-b outline-none focus:ring-0 placeholder:text-center placeholder:text-lg border-gray focus:border-gray"
      />
      or reach out to me on
      <input
        type="tel"
        placeholder="your phone"
        {...register("phoneNumber", {})}
        className="p-0 mx-2 bg-transparent border-0 border-b outline-none focus:ring-0 placeholder:text-center placeholder:text-lg border-gray focus:border-gray"
      />
      Here are some details about my project: <br />
      <textarea
        {...register("projectDetails", {})}
        placeholder="My project is about..."
        rows={3}
        className="w-full p-0 mx-0 bg-transparent border-0 border-b outline-none focus:ring-0 placeholder:text-lg border-gray focus:border-gray"
      />
      <input
        type="submit"
        value="send request"
        className="inline-block px-6 py-2 mt-8 text-lg font-medium capitalize border-2 border-solid rounded cursor-pointer sm:text-xl sm:py-3 sm:px-8 border-dark dark:border-light"
      />
    </form>
  );
}
