import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "./icons";

export type NavLink = {
  href: string;
  label: string;
};

type NavbarProps = {
  links: NavLink[];
};

const Navbar = ({ links }: NavbarProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 md:px-8 lg:px-12">
        <a href="#home" className="text-lg font-semibold text-primary">
          Nolan Portfolio
        </a>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-md border border-slate-700 p-2 text-slate-100 transition-colors hover:border-primary hover:text-primary focus:outline-none focus-visible:ring focus-visible:ring-primary/60 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-primary focus:outline-none focus-visible:ring focus-visible:ring-primary/60"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {isOpen ? (
        <div className="border-t border-slate-800/80 bg-slate-950/95 md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-4 text-sm font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block rounded-md px-2 py-1 transition-colors hover:bg-slate-900 hover:text-primary focus:outline-none focus-visible:ring focus-visible:ring-primary/60"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
