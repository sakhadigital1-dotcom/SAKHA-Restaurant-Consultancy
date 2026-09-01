import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="bg-[#f2ede4] py-24 text-[#171411] sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="mini-label text-[#96784f]">About SAKHA</p>
            <p className="mt-8 max-w-xs text-sm leading-7 text-[#7d756c]">
              Restaurant consultancy for founders, operators and hospitality
              businesses seeking structure, consistency and stronger commercial
              performance.
            </p>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="serif max-w-5xl text-[47px] font-medium leading-[.98] tracking-[-.035em] sm:text-[64px] lg:text-[84px]"
            >
              Great restaurants are not built on food alone.
              <span className="italic text-[#9d7d4d]">
                {" "}They are built on systems.
              </span>
            </motion.h2>

            <div className="mt-14 grid gap-10 border-t border-black/10 pt-10 md:grid-cols-2">
              <p className="text-[15px] leading-8 text-[#665f57]">
                SAKHA transforms hospitality ideas into professionally managed
                businesses through concept strategy, kitchen planning, menu
                engineering, SOPs, training and operational structure.
              </p>

              <p className="text-[15px] leading-8 text-[#665f57]">
                Every recommendation is grounded in real-world restaurant
                operations — balancing guest experience with cost, workflow,
                consistency and long-term profitability.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 grid border-y border-black/10 sm:grid-cols-3">
          {[
            ["01", "Practical Expertise"],
            ["02", "End-to-End Support"],
            ["03", "Profit-Focused Thinking"],
          ].map(([number, title], index) => (
            <div
              key={title}
              className={`py-8 sm:px-8 ${index !== 2 ? "sm:border-r sm:border-black/10" : ""}`}
            >
              <span className="text-[10px] tracking-[.22em] text-[#a0845b]">{number}</span>
              <h3 className="serif mt-12 text-3xl">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
