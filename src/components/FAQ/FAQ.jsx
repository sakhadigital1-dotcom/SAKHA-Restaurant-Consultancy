import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function FAQ() {
  const [active, setActive] = useState(0);

  const faqs = [
    ["What does SAKHA consult on?", "Concept strategy, kitchen planning, menu engineering, SOPs, staff training and operational improvement."],
    ["Can you help launch a new restaurant?", "Yes. SAKHA can support a project from early concept development through operational preparation and launch."],
    ["Can you improve an existing restaurant?", "Yes. Existing businesses can be reviewed for workflow, menu performance, systems, costs and operational consistency."],
    ["Do you work outside restaurants?", "Yes. Café concepts, institutional dining, cloud kitchens and other hospitality formats can also be supported."],
  ];

  return (
    <section className="bg-[#f2ede4] py-24 text-[#171411] sm:py-32">
      <div className="mx-auto grid max-w-[1500px] gap-14 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="mini-label text-[#96784f]">FAQ</p>
          <h2 className="serif mt-7 text-5xl leading-none sm:text-7xl">
            Before we
            <br />
            begin.
          </h2>
        </div>

        <div className="border-t border-black/10">
          {faqs.map(([question, answer], index) => {
            const open = active === index;

            return (
              <div key={question} className="border-b border-black/10">
                <button
                  onClick={() => setActive(open ? null : index)}
                  className="flex w-full items-center justify-between gap-5 py-7 text-left"
                >
                  <span className="serif text-2xl sm:text-3xl">{question}</span>
                  {open ? <Minus size={18} /> : <Plus size={18} />}
                </button>

                {open && (
                  <p className="max-w-2xl pb-7 text-sm leading-7 text-[#746c63]">
                    {answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
