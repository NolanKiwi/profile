const Contact = (): JSX.Element => {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">Contact</h2>
        <p className="text-base text-slate-300">
          Ready to collaborate or have a project in mind? Reach out and let&apos;s build something
          impactful together.
        </p>
        <div className="flex flex-col gap-6 rounded-xl border border-slate-800 bg-slate-900/40 p-6">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
              Preferred
            </h3>
            <a
              href="mailto:hello@nolan.dev"
              className="mt-2 block text-lg font-medium text-primary transition-colors hover:text-primary/80 focus:outline-none focus-visible:ring focus-visible:ring-primary/60"
            >
              hello@nolan.dev
            </a>
          </div>
          <form
            className="grid gap-4 sm:grid-cols-2"
            aria-labelledby="contact-form-title"
            onSubmit={(event) => event.preventDefault()}
          >
            <h3 id="contact-form-title" className="sr-only">
              Contact form
            </h3>
            <label className="flex flex-col text-sm sm:col-span-1">
              <span className="text-slate-400">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Ada Lovelace"
                className="mt-1 rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus-visible:ring focus-visible:ring-primary/60"
                required
              />
            </label>
            <label className="flex flex-col text-sm sm:col-span-1">
              <span className="text-slate-400">Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="mt-1 rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus-visible:ring focus-visible:ring-primary/60"
                required
              />
            </label>
            <label className="flex flex-col text-sm sm:col-span-2">
              <span className="text-slate-400">Message</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about the problem you want to solve..."
                className="mt-1 rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus-visible:ring focus-visible:ring-primary/60"
                required
              />
            </label>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring focus-visible:ring-primary/60"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
