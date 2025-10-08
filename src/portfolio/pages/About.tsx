const About = (): JSX.Element => {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">About</h2>
        <p className="text-base text-slate-300">
          I am a pragmatic full-stack developer with a focus on thoughtful, maintainable interfaces
          backed by solid engineering. My toolkit spans modern frontend frameworks, TypeScript,
          Node.js, and the infrastructure that keeps products resilient in production.
        </p>
        <p className="text-base text-slate-300">
          I enjoy taking complex problems, breaking them down into approachable pieces, and shipping
          features that delight users while moving business metrics. When not building, you can find
          me exploring design systems and tooling that give teams leverage.
        </p>
      </div>
    </section>
  );
};

export default About;
