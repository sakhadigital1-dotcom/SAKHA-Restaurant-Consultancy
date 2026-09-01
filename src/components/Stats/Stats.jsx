function Stats() {
  const stats = [
    ["360°", "Consulting Perspective"],
    ["01", "Integrated Partner"],
    ["100%", "Practical Approach"],
    ["∞", "Long-Term Thinking"],
  ];

  return (
    <section className="bg-[#d9c8ac] py-16 text-[#211b17]">
      <div className="mx-auto grid max-w-[1500px] px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {stats.map(([value, label], index) => (
          <div
            key={label}
            className={`py-7 sm:px-8 ${
              index < 3 ? "lg:border-r lg:border-[#211b17]/20" : ""
            }`}
          >
            <p className="serif text-6xl font-medium">{value}</p>
            <p className="mt-4 text-[9px] uppercase tracking-[.22em] text-[#655a4e]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
