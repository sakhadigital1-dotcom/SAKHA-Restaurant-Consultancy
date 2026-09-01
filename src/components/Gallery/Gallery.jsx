import { motion } from "framer-motion";
import food11 from "../../assets/food/11.jpg";
import food12 from "../../assets/food/12.jpg";
import food13 from "../../assets/food/13.jpg";
import food14 from "../../assets/food/14.jpg";
import food15 from "../../assets/food/15.jpg";
import food16 from "../../assets/food/16.jpg";
import food17 from "../../assets/food/17.jpg";
import food18 from "../../assets/food/18.jpg";

function Gallery() {
  const images = [
    food11,
    food12,
    food13,
    food14,
    food15,
    food16,
    food17,
    food18,
  ];

  return (
    <section
      id="gallery"
      className="bg-[#f2ede4] py-24 text-[#171411] sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">

        {/* HEADER */}
        <div className="grid gap-10 border-b border-black/10 pb-12 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mini-label text-[#96784f]">
              Culinary Perspective
            </p>

            <h2 className="serif mt-7 text-[52px] leading-[.92] tracking-[-.035em] sm:text-[72px] lg:text-[92px]">
              Food is part of
              <br />
              <span className="italic text-[#9d7d4d]">
                the experience.
              </span>
            </h2>
          </motion.div>

          <p className="max-w-md text-sm leading-7 text-[#746c63] lg:justify-self-end">
            Menu strategy is more than choosing dishes. Presentation,
            consistency, operational practicality and commercial performance
            must work together.
          </p>
        </div>

        {/* EDITORIAL GRID */}
        <div className="mt-10 grid grid-cols-12 gap-3 sm:gap-5">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 overflow-hidden lg:col-span-7"
          >
            <div className="group relative h-[380px] overflow-hidden sm:h-[540px]">
              <img
                src={images[0]}
                alt="Premium plated restaurant dish"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white sm:p-8">
                <p className="mini-label text-[#d6bd92]">
                  Menu Development
                </p>

                <p className="serif mt-3 text-3xl sm:text-4xl">
                  Presentation with purpose.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="group h-[380px] overflow-hidden sm:h-[540px]">
              <img
                src={images[1]}
                alt="Fine dining food presentation"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-6 lg:col-span-4"
          >
            <div className="group h-[300px] overflow-hidden sm:h-[420px]">
              <img
                src={images[2]}
                alt="Restaurant plated cuisine"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="col-span-6 lg:col-span-4"
          >
            <div className="group h-[300px] overflow-hidden sm:h-[420px]">
              <img
                src={images[3]}
                alt="Premium restaurant cuisine"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="col-span-12 lg:col-span-4"
          >
            <div className="group h-[340px] overflow-hidden sm:h-[420px]">
              <img
                src={images[4]}
                alt="Fine dining culinary presentation"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-8"
          >
            <div className="group relative h-[350px] overflow-hidden sm:h-[500px]">
              <img
                src={images[5]}
                alt="Luxury hospitality food presentation"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white sm:p-8">
                <p className="mini-label text-[#d6bd92]">
                  Guest Experience
                </p>

                <p className="serif mt-3 text-3xl sm:text-4xl">
                  Every detail communicates the brand.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="col-span-12 lg:col-span-4"
          >
            <div className="grid h-[350px] grid-cols-2 gap-3 sm:h-[500px] sm:gap-5 lg:grid-cols-1">
              <div className="group overflow-hidden">
                <img
                  src={images[6]}
                  alt="Fine dining dish"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                />
              </div>

              <div className="group overflow-hidden">
                <img
                  src={images[7]}
                  alt="Premium plated food"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;