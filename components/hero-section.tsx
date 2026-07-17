export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[70vh] items-center justify-center overflow-hidden lg:min-h-[80vh]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/team.jpg"
      >
        <source src="/assets/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-navy/45" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex max-w-[900px] flex-col items-center px-5 text-center">
        <h1 className="font-heading text-[32px] font-medium leading-tight text-balance text-white sm:text-[40px] lg:text-[46px]">
          Guiding your financial journey with confidence and care.
        </h1>
        <a
          href="#about"
          className="mt-8 rounded-full bg-white px-9 py-3.5 font-heading text-sm font-medium tracking-wide text-navy transition-colors hover:bg-blue-mid hover:text-white"
        >
          EXPLORE NOW
        </a>
      </div>
    </section>
  )
}
