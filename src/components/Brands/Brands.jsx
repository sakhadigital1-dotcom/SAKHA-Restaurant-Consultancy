function Brands() {
  const items = [
    "Restaurants",
    "Cafés",
    "Cloud Kitchens",
    "Institutional Dining",
    "Hotels",
    "Food Concepts",
  ];

  return (
    <section className="bg-[#d9c8ac] text-[#211b17]">
      <div className="mx-auto flex max-w-[1500px] overflow-hidden px-5 sm:px-8">
        <div className="flex min-w-max items-center gap-10 py-5 sm:gap-16">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-10 sm:gap-16">
              <span className="text-[10px] uppercase tracking-[.22em]">
                {item}
              </span>
              <span className="h-1 w-1 rounded-full bg-[#211b17]/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
