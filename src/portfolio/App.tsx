import Navbar, { NavLink } from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

const App = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar links={navLinks} />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-24 px-6 pb-16 pt-28 md:px-8 lg:px-12">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
