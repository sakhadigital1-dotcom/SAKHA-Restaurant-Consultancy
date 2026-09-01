function Industries() {
  const items = [
    "Independent Restaurants",
    "Cafés & Coffee Concepts",
    "Institutional Dining",
    "Hotels & Hospitality",
    "Cloud Kitchens",
    "Emerging Food Brands",
  ];

  return (
    <section id="industries" className="bg-[#211b17] py-24 text-[#f2ede4] sm:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <p className="mini-label text-[#c6aa7d]">Industries</p>

        <div className="mt-12 grid gap-0 border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item}
              className="min-h-[220px] border-b border-white/15 p-7 sm:border-r"
            >
              <span className="text-[10px] text-[#b99a68]">0{index + 1}</span>
              <h3 className="serif mt-16 text-3xl">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
