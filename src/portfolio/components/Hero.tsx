import profileUrl from "../../assets/profile.svg";

const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
      <div className="max-w-xl">
        <p className="text-sm uppercase tracking-[0.2em] text-primary/80">Hello, I&apos;m</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-100 sm:text-5xl lg:text-6xl">
          Nolan <span className="text-primary">Anderson</span>
        </h1>
        <p className="mt-6 text-lg text-slate-300 sm:text-xl">
          Full-stack developer crafting performant, accessible web experiences. I bridge design and
          engineering to ship products users love.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring focus-visible:ring-primary/60"
            href="#projects"
          >
            View Projects
          </a>
          <a
            className="rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary focus:outline-none focus-visible:ring focus-visible:ring-primary/60"
            href="#contact"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-blue-500/20 p-1 shadow-lg shadow-primary/20 md:mx-0 md:h-64 md:w-64">
        <img
          src={profileUrl}
          alt="Profile"
          className="h-full w-full rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
