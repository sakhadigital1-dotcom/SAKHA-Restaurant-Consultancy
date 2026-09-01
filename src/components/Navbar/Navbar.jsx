import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["About", "#about"],
    ["Expertise", "#services"],
    ["Work", "#projects"],
    ["Process", "#process"],
    ["Contact", "#contact"],
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-[1500px] px-4 pt-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="flex h-[70px] items-center justify-between border border-black/10 bg-[#f2ede4]/90 px-5 backdrop-blur-xl sm:px-8"
          >
            <a href="#home" className="flex items-end gap-3">
              <span className="serif text-[28px] font-semibold tracking-[.08em] text-[#171411]">
                SAKHA
              </span>
              <span className="mb-[5px] hidden text-[8px] uppercase tracking-[.24em] text-[#7d7368] sm:block">
                Restaurant Consultancy
              </span>
            </a>

            <nav className="hidden items-center gap-9 lg:flex">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-[11px] uppercase tracking-[.18em] text-[#6f675e] transition hover:text-black"
                >
                  {label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="hidden items-center gap-3 border border-[#211b17] px-5 py-3 text-[10px] uppercase tracking-[.17em] transition hover:bg-[#211b17] hover:text-white lg:flex"
            >
              Consultation
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center border border-black/10 lg:hidden"
              aria-label="Menu"
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </motion.div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed inset-x-4 top-[94px] z-40 border border-black/10 bg-[#f2ede4] p-7 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="border-b border-black/10 py-4 text-sm uppercase tracking-[.16em]"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
