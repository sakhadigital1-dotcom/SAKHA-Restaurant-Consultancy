import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function Services() {
  const services = [
    ["01", "Concept & Strategy", "Positioning, business direction, guest profile and concept development."],
    ["02", "Kitchen Planning", "Workflow-led kitchen planning built around practicality and efficiency."],
    ["03", "Menu Engineering", "Menus designed around guest appeal, operations, costing and profitability."],
    ["04", "SOP Development", "Clear systems that improve consistency, accountability and daily execution."],
    ["05", "Staff Training", "Service and operational training designed around defined brand standards."],
    ["06", "Business Improvement", "Operational review, cost awareness and performance improvement."],
  ];

  return (
    <section id="services" className="bg-[#211b17] py-24 text-[#f2ede4] sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="mini-label text-[#c6aa7d]">Expertise</p>
          </div>
          <h2 className="serif text-[50px] leading-[.92] tracking-[-.03em] sm:text-[72px] lg:text-[92px]">
            The business behind
            <br />
            <span className="italic text-[#b99a68]">the dining room.</span>
          </h2>
        </div>

        <div className="mt-20 border-t border-white/15">
          {services.map(([number, title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group grid gap-6 border-b border-white/15 py-8 transition-colors hover:bg-white/[.02] md:grid-cols-[90px_1fr_1fr_40px] md:items-center"
            >
              <span className="text-[10px] tracking-[.22em] text-[#b99a68]">
                {number}
              </span>

              <h3 className="serif text-3xl sm:text-4xl">{title}</h3>

              <p className="max-w-lg text-sm font-light leading-7 text-white/45">
                {text}
              </p>

              <ArrowUpRight
                size={18}
                className="text-[#b99a68] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
