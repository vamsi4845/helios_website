export default function Hero() {
  return (
    <section className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col justify-center items-center space-y-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Dream Design Deliver
          </h1>
          <p className="max-w-[600px] text-lg md:text-xl">
            Turning your ideas into innovative software that drives results
          </p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[8rem]">
        <div className="animate-wave1 absolute inset-x-0 h-full bg-[url('/wave.png')] bg-repeat-x bg-[size:100rem_8rem]"></div>
        <div className="animate-wave2 absolute inset-x-0 h-full bg-[url('/wave.png')] opacity-20 bg-repeat-x bg-[size:100rem_8rem]"></div>
        <div className="animate-wave3 absolute inset-x-0 h-full bg-[url('/wave.png')] opacity-50 bg-repeat-x bg-[size:100rem_8rem]"></div>
      </div>
    </section>
  );
}