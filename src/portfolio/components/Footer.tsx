const Footer = (): JSX.Element => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-2 px-6 py-6 text-xs text-slate-500 md:px-8 lg:px-12">
        <p>&copy; {new Date().getFullYear()} Nolan. All rights reserved.</p>
        <p>Crafted with React, TypeScript, and Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
