import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import food19 from "../../assets/food/19.jpg";
import food20 from "../../assets/food/20.jpg";
import food21 from "../../assets/food/21.jpg";
import food22 from "../../assets/food/22.jpg";
import food23 from "../../assets/food/23.jpg";

function Projects() {
  const projects = [
    {
      number: "01",
      image: food19,
      category: "Restaurant Development",
      title: "Concept to Operation",
      description:
        "Restaurant strategy, kitchen planning, menu development and operational structure brought together under one clear direction.",
    },
    {
      number: "02",
      image: food20,
      category: "Menu Strategy",
      title: "Designed to Perform",
      description:
        "Balancing food presentation, guest appeal, operational practicality and commercial performance.",
    },
    {
      number: "03",
      image: food21,
      category: "Hospitality Operations",
      title: "Systems Behind Service",
      description:
        "Clear workflows, service standards and operational systems designed for consistency and stronger performance.",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#171411] py-24 text-[#f2ede4] sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="grid gap-10 border-b border-white/15 pb-12 lg:grid-cols-[1fr_.6fr] lg:items-end">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mini-label text-[#c6aa7d]">
              Selected Work
            </p>

            <h2 className="serif mt-7 text-[52px] leading-[.92] tracking-[-.035em] sm:text-[72px] lg:text-[92px]">
              Ideas transformed
              <br />
              into
              <span className="italic text-[#b99a68]">
                {" "}
                experiences.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md text-sm font-light leading-7 text-white/45 lg:justify-self-end"
          >
            Our approach connects concept, food, operations and commercial
            thinking to create stronger hospitality businesses and memorable
            guest experiences.
          </motion.p>
        </div>

        {/* =========================
            PROJECT 01
        ========================== */}

        <div className="mt-14 space-y-24">

          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end"
            >

              {/* IMAGE */}

              <div
                className={`group relative overflow-hidden ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[360px] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04] sm:h-[560px]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                {/* Number */}
                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center border border-white/30 bg-black/20 backdrop-blur-md sm:left-7 sm:top-7">
                  <span className="text-[9px] tracking-[.18em] text-white">
                    {project.number}
                  </span>
                </div>
              </div>

              {/* CONTENT */}

              <div
                className={`border-t border-white/15 pt-7 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[.22em] text-[#b99a68]">
                    PROJECT / {project.number}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-[#b99a68]"
                  />
                </div>

                <p className="mini-label mt-14 text-white/35">
                  {project.category}
                </p>

                <h3 className="serif mt-5 text-4xl leading-[.95] sm:text-5xl lg:text-6xl">
                  {project.title}
                </h3>

                <p className="mt-7 max-w-lg text-sm font-light leading-7 text-white/45">
                  {project.description}
                </p>

                <div className="mt-10 flex items-center gap-4">
                  <div className="h-px w-10 bg-[#b99a68]" />

                  <p className="text-[9px] uppercase tracking-[.2em] text-[#b99a68]">
                    Strategy · Food · Operations
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =========================
            FOOD VISUAL BREAK
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-28"
        >
          <div className="mb-8 flex items-end justify-between border-b border-white/15 pb-6">
            <div>
              <p className="mini-label text-[#c6aa7d]">
                Culinary Detail
              </p>

              <p className="serif mt-3 text-3xl sm:text-4xl">
                The details shape the experience.
              </p>
            </div>

            <p className="hidden text-[9px] uppercase tracking-[.2em] text-white/25 sm:block">
              SAKHA / Hospitality
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {/* FOOD 22 */}

            <div className="group relative h-[330px] overflow-hidden sm:h-[480px]">
              <img
                src={food22}
                alt="Premium restaurant cuisine"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <p className="mini-label text-[#d6bd92]">
                  Presentation
                </p>

                <p className="serif mt-3 text-2xl text-white sm:text-3xl">
                  Designed for the guest.
                </p>
              </div>
            </div>

            {/* FOOD 23 */}

            <div className="group relative h-[330px] overflow-hidden sm:h-[480px]">
              <img
                src={food23}
                alt="Fine dining culinary presentation"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <p className="mini-label text-[#d6bd92]">
                  Experience
                </p>

                <p className="serif mt-3 text-2xl text-white sm:text-3xl">
                  Built around every detail.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================
            FOOTER LINE
        ========================== */}

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="mini-label text-white/30">
            Food · Experience · Systems · Operations
          </p>

          <p className="mini-label text-[#b99a68]">
            SAKHA Restaurant Consultancy
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;