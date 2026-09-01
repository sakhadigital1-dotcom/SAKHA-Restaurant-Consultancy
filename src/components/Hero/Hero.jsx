import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Star,
} from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#f2ede4] pt-28 text-[#171411]"
    >
      <div className="mx-auto max-w-[1500px] px-5 pb-10 sm:px-8 sm:pb-16">
        <div className="grid min-h-[calc(100vh-8rem)] gap-10 border-t border-black/10 pt-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-0">

          {/* LEFT SIDE */}

          <div className="flex flex-col justify-between pb-6 lg:border-r lg:border-black/10 lg:pr-16">

            <div>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mini-label text-[#8f7550]"
              >
                Strategy · Operations · Hospitality
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.05 }}
                className="serif mt-10 max-w-[900px] text-[58px] font-medium leading-[.86] tracking-[-.045em] sm:text-[84px] lg:text-[108px] xl:text-[126px]"
              >
                We Build
                <br />
                Restaurants
                <br />
                <span className="italic text-[#9d7d4d]">
                  That Work.
                </span>
              </motion.h1>

              {/* REVIEW INDICATOR */}

              <motion.a
                href="#testimonials"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="group mt-10 inline-flex items-center gap-5 border-y border-black/10 py-5"
              >
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      strokeWidth={1.5}
                      className="fill-[#9d7d4d] text-[#9d7d4d]"
                    />
                  ))}
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[.2em] text-[#6e675f]">
                    Client Experiences
                  </p>

                  <p className="mt-1 text-xs text-[#8a8178]">
                    View feedback & testimonials
                  </p>
                </div>

                <ArrowUpRight
                  size={15}
                  className="ml-2 text-[#9d7d4d] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </motion.a>
            </div>

            <div className="mt-12 grid gap-8 border-t border-black/10 pt-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-xl text-[15px] font-light leading-7 text-[#6e675f] sm:text-[17px]">
                From the first idea to opening day — strategy, kitchen planning,
                menus, systems and operations designed around stronger,
                commercially sound hospitality businesses.
              </p>

              <a
                href="#contact"
                className="group flex w-fit items-center gap-4 bg-[#211b17] px-6 py-4 text-[10px] uppercase tracking-[.18em] text-white"
              >
                Start a Project

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative flex min-h-[540px] flex-col justify-between overflow-hidden bg-[#211b17] p-7 text-[#f2ede4] sm:p-10 lg:ml-8 lg:min-h-full"
          >
            <div className="absolute right-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full border border-white/10" />

            <div className="absolute right-[-60px] top-[-60px] h-[300px] w-[300px] rounded-full border border-white/10" />

            <div className="absolute bottom-[-120px] left-[-100px] h-[320px] w-[320px] rounded-full border border-[#b99a68]/20" />

            <div className="relative z-10 flex items-center justify-between">
              <p className="mini-label text-[#c7af86]">
                SAKHA / 2026
              </p>

              <ArrowDownRight
                size={22}
                className="text-[#c7af86]"
              />
            </div>

            <div className="relative z-10">
              <p className="serif text-[70px] font-light leading-none text-[#b99a68] sm:text-[90px]">
                360°
              </p>

              <h2 className="serif mt-5 max-w-sm text-4xl leading-[.95] sm:text-5xl">
                Hospitality,
                <br />
                viewed as a business.
              </h2>

              <p className="mt-6 max-w-sm text-sm font-light leading-7 text-white/55">
                Brand thinking, kitchen logic, operational discipline and
                commercial clarity brought together under one consultancy.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-2 border-t border-white/15 pt-7">
              <div>
                <p className="mini-label text-white/35">
                  Focus
                </p>

                <p className="mt-3 text-sm">
                  Restaurant Performance
                </p>
              </div>

              <div>
                <p className="mini-label text-white/35">
                  Based In
                </p>

                <p className="mt-3 text-sm">
                  Prayagraj (Allahabad), India
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;