function Process() {
  const steps = [
    ["01", "Discover", "Understand the idea, ambition, constraints and commercial context."],
    ["02", "Define", "Shape the concept, operational model and strategic direction."],
    ["03", "Develop", "Build menus, systems, layouts, SOPs and team structure."],
    ["04", "Prepare", "Train, test and refine the operation before launch."],
    ["05", "Improve", "Review performance and strengthen the business over time."],
  ];

  return (
    <section id="process" className="bg-[#f2ede4] py-24 text-[#171411] sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="mini-label text-[#96784f]">Our Process</p>
            <h2 className="serif mt-7 text-5xl leading-[.95] sm:text-7xl">
              From idea
              <br />
              to operation.
            </h2>
          </div>

          <div className="border-t border-black/10">
            {steps.map(([number, title, text]) => (
              <div
                key={number}
                className="grid gap-5 border-b border-black/10 py-7 md:grid-cols-[70px_180px_1fr] md:items-start"
              >
                <span className="text-[10px] tracking-[.2em] text-[#a08358]">{number}</span>
                <h3 className="serif text-3xl">{title}</h3>
                <p className="max-w-lg text-sm leading-7 text-[#746c63]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
