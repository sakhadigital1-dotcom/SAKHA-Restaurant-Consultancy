import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function Experience() {
  const career = [
    {
      year: "Jan 2011 — Present",
      company: "Hotel Kanha Shyam",
      location: "Allahabad, India",
      role: "Executive Chef",
      description:
        "Leading complete kitchen operations including team management, supply chain coordination, quality control, menu development, food costing, staff training and operational standards.",
      highlights: [
        "Joined as Sous Chef and promoted to Executive Chef",
        "Managed complete kitchen operations and quality control",
        "Developed menus and introduced new food techniques",
        "Managed food costing and operational budgets",
        "Recruited and trained local kitchen teams",
        "Led the opening and food promotion of a 115-cover Indian restaurant",
      ],
    },
    {
      year: "Aug 2010 — Jan 2011",
      company: "The Gateway Hotel",
      location: "Vijayawada, India",
      role: "Chef de Partie",
      description:
        "Supervised kitchen operations with responsibility for food production, menu planning, hygiene standards, equipment management, staff development and guest satisfaction.",
      highlights: [
        "Supervised food production and kitchen operations",
        "Maintained quality and hygiene standards",
        "Developed recipes for new food promotions",
        "Conducted weekly theory and training sessions for staff",
        "Coordinated with restaurant teams to improve guest experience",
      ],
    },
    {
      year: "Aug 2007 — Mar 2010",
      company: "Hotel Ramada Plaza",
      location: "Varanasi, India",
      role: "Chef de Partie",
      description:
        "Progressed through kitchen leadership roles while contributing to culinary operations, team coordination and food quality.",
      highlights: [
        "Joined as Commis I",
        "Promoted to DCDP in October 2008",
        "Promoted to Chef de Partie in October 2009",
        "Worked as an active kitchen team member and team leader",
        "Contributed to culinary quality and operational standards",
      ],
    },
    {
      year: "Dec 2006 — Jul 2007",
      company: "The Grand [ A venture of Hyatt ]",
      location: "New Delhi, India",
      role: "Kitchen Executive Training",
      description:
        "Completed eight months of kitchen executive training at The Grand, New Delhi, a venture of Hyatt.",
      highlights: [
        "Kitchen executive training",
        "Exposure to professional hotel kitchen operations",
        "Operational and culinary development",
      ],
    },
    {
      year: "Aug 2005 — Dec 2006",
      company: "Taj Ganges",
      location: "Varanasi, India",
      role: "FTC",
      description:
        "Worked in professional hotel kitchen operations for approximately one year and eight months, developing practical culinary and operational experience.",
      highlights: [
        "Professional kitchen operations",
        "Food production experience",
        "Hospitality operational exposure",
      ],
    },
    {
      year: "Nov 2000 — Jul 2005",
      company: "Hotel Hindustan International",
      location: "Varanasi, India",
      role: "Management & Hotel Operations Training",
      description:
        "Completed management training and hotel operational training, building a strong foundation in professional hospitality operations.",
      highlights: [
        "Management training",
        "Hotel operational training",
        "Hospitality systems and operations",
      ],
    },
    {
      year: "May 1999 — Nov 1999",
      company: "Quality Inn Vedant",
      location: "Aurangabad, India",
      role: "Industrial Training",
      description:
        "Completed six months of industrial training, marking the beginning of a professional journey in hospitality.",
      highlights: [
        "Six-month industrial training",
        "Foundation in hotel operations",
        "Early professional hospitality experience",
      ],
    },
  ];

  const expertise = [
    "Kitchen Operations",
    "Restaurant Operations",
    "Menu Development",
    "Food Cost Control",
    "Kitchen Planning",
    "Quality Control",
    "Staff Recruitment",
    "Staff Training",
    "Food Promotions",
    "Supply Chain Management",
    "SOP Development",
    "Pre-Opening Operations",
  ];

  return (
    <section
      id="experience"
      className="bg-[#ebe3d8] py-24 text-[#171411] sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">

        {/* =========================
            HEADER
        ========================== */}

        <div className="grid gap-12 border-b border-black/10 pb-16 lg:grid-cols-[.7fr_1.3fr]">

          <div>
            <p className="mini-label text-[#96784f]">
              Experience Behind SAKHA
            </p>

            <p className="mt-7 max-w-xs text-sm leading-7 text-[#746c63]">
              A professional journey built inside hotels, restaurants and
              commercial kitchens across India.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="serif max-w-5xl text-[50px] font-medium leading-[.95] tracking-[-.035em] sm:text-[70px] lg:text-[90px]">
              Experience built
              <br />
              inside
              <span className="italic text-[#9d7d4d]">
                {" "}hospitality.
              </span>
            </h2>

            <p className="mt-10 max-w-2xl text-[15px] leading-8 text-[#665f57]">
              From industrial training to Executive Chef leadership, decades
              of hands-on experience in professional hospitality operations
              form the foundation of SAKHA Restaurant Consultancy.
            </p>
          </motion.div>
        </div>

        {/* =========================
            EXPERIENCE NUMBER
        ========================== */}

        <div className="grid gap-10 border-b border-black/10 py-14 lg:grid-cols-[.7fr_1.3fr]">

          <div>
            <p className="serif text-[90px] leading-none text-[#9d7d4d] sm:text-[120px]">
              25+
            </p>

            <p className="mt-4 text-[10px] uppercase tracking-[.22em] text-[#71685f]">
              Years in Hospitality
            </p>
          </div>

          <div className="flex items-end">
            <p className="serif max-w-3xl text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
              A career shaped by real kitchens, restaurant operations,
              leadership and guest expectations.
            </p>
          </div>

        </div>

        {/* =========================
            CAREER JOURNEY
        ========================== */}

        <div className="grid gap-14 pt-20 lg:grid-cols-[.55fr_1.45fr]">

          <div>
            <p className="mini-label text-[#96784f]">
              Career Journey
            </p>

            <p className="mt-6 max-w-xs text-sm leading-7 text-[#746c63]">
              From foundational hotel training to leading complete kitchen
              operations as an Executive Chef.
            </p>
          </div>

          <div className="border-t border-black/10">

            {career.map((item, index) => (

              <motion.article
                key={`${item.company}-${item.year}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.04,
                }}
                className="group border-b border-black/10 py-9"
              >

                {/* TOP */}

                <div className="grid gap-5 md:grid-cols-[150px_1fr_200px_30px] md:items-start">

                  <p className="text-[9px] uppercase tracking-[.18em] text-[#9d7d4d]">
                    {item.year}
                  </p>

                  <div>
                    <h3 className="serif text-3xl leading-none sm:text-4xl">
                      {item.company}
                    </h3>

                    <p className="mt-3 text-[10px] uppercase tracking-[.17em] text-[#6f665e]">
                      {item.role}
                    </p>
                  </div>

                  <p className="text-[10px] uppercase tracking-[.15em] text-[#8b8279]">
                    {item.location}
                  </p>

                  <ArrowUpRight
                    size={17}
                    className="text-[#9d7d4d] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </div>

                {/* DESCRIPTION */}

                <div className="mt-7 md:ml-[150px]">

                  <p className="max-w-3xl text-sm leading-7 text-[#746c63]">
                    {item.description}
                  </p>

                  {/* HIGHLIGHTS */}

                  <div className="mt-7 grid gap-x-10 gap-y-3 sm:grid-cols-2">

                    {item.highlights.map((highlight) => (

                      <div
                        key={highlight}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-[9px] h-[3px] w-[3px] shrink-0 rounded-full bg-[#9d7d4d]" />

                        <p className="text-[12px] leading-6 text-[#776e65]">
                          {highlight}
                        </p>
                      </div>

                    ))}

                  </div>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

        {/* =========================
            CAREER ACHIEVEMENTS
        ========================== */}

        <div className="mt-24 border-y border-black/10 py-16">

          <div className="grid gap-12 lg:grid-cols-[.55fr_1.45fr]">

            <div>
              <p className="mini-label text-[#96784f]">
                Career Highlights
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-3">

              <div>
                <p className="serif text-6xl text-[#9d7d4d]">
                  25+
                </p>

                <p className="mt-4 text-[10px] uppercase tracking-[.18em] text-[#71685f]">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="serif text-6xl text-[#9d7d4d]">
                  07
                </p>

                <p className="mt-4 text-[10px] uppercase tracking-[.18em] text-[#71685f]">
                  Hospitality Organisations
                </p>
              </div>

              <div>
                <p className="serif text-6xl text-[#9d7d4d]">
                  115
                </p>

                <p className="mt-4 text-[10px] uppercase tracking-[.18em] text-[#71685f]">
                  Cover Restaurant Opening
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* =========================
            SPECIAL ACHIEVEMENTS
        ========================== */}

        <div className="grid gap-14 pt-20 lg:grid-cols-[.55fr_1.45fr]">

          <div>
            <p className="mini-label text-[#96784f]">
              Selected Achievements
            </p>
          </div>

          <div className="border-t border-black/10">

            {[
              [
                "01",
                "Leadership Progression",
                "Joined Hotel Kanha Shyam as Sous Chef and progressed to the position of Executive Chef.",
              ],
              [
                "02",
                "Revenue & Food Promotions",
                "Supported outlet sales growth through planned themed food festivals and new food promotions.",
              ],
              [
                "03",
                "Restaurant Opening",
                "Led the opening and food promotion of a 115-cover Indian restaurant at Hotel Kanha Shyam.",
              ],
              [
                "04",
                "Team Development",
                "Built and trained kitchen teams while implementing operational procedures, quality standards and cost controls.",
              ],
            ].map(([number, title, text]) => (

              <div
                key={number}
                className="grid gap-5 border-b border-black/10 py-8 sm:grid-cols-[70px_220px_1fr]"
              >

                <span className="text-[10px] tracking-[.2em] text-[#9d7d4d]">
                  {number}
                </span>

                <h3 className="serif text-2xl sm:text-3xl">
                  {title}
                </h3>

                <p className="max-w-xl text-sm leading-7 text-[#746c63]">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* =========================
            AREAS OF EXPERIENCE
        ========================== */}

        <div className="mt-24 border-t border-black/10 pt-12">

          <div className="grid gap-14 lg:grid-cols-[.55fr_1.45fr]">

            <div>
              <p className="mini-label text-[#96784f]">
                Areas of Experience
              </p>

              <h3 className="serif mt-6 text-4xl leading-none sm:text-5xl">
                Built through
                <br />
                <span className="italic text-[#9d7d4d]">
                  practice.
                </span>
              </h3>
            </div>

            <div className="grid sm:grid-cols-2">

              {expertise.map((item, index) => (

                <div
                  key={item}
                  className="flex items-center gap-5 border-b border-black/10 py-5 sm:odd:mr-8 sm:even:ml-8"
                >

                  <span className="text-[9px] text-[#9d7d4d]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm text-[#514b45]">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;