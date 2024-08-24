
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="scroll-mt-navbar w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white font-semibold">
              About
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">Who We Are</h2>
            <p className="text-base sm:text-lg text-gray-700">
              Welcome to
              <span className="text-primary font-bold"> Helios Innovations</span>
              , where innovation meets expertise. We are a dynamic technology
              company dedicated to transforming your ideas into reality through
              cutting-edge solutions in AI/ML, web development, and blockchain
              technology.
            </p>
          </div>
          <div className="w-full max-w-md lg:max-w-xl">
            <Image
              src="/about.svg"
              width={650}
              height={310}
              alt="About Helios Innovations"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}