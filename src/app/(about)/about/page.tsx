import AboutCoverSection from "src/components/About/AboutCoverSection";
import Skills from "src/components/About/Skills";
import Link from "next/link";

export const metadata = {
  title: "About Me",
  description: `Here are some details about me.`,
};

function page() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="self-start mx-5 mt-8 text-lg font-semibold md:text-2xl xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
        Have a project in mind? Reach out to me &#x1F4DE; from
        <Link href="/contact" className="!underline underline-offset-2 mx-2">
          here
        </Link>
        and let&apos;s make it happen.
      </h2>
    </>
  );
}

export default page;
