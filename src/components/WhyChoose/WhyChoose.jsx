function WhyChoose() {
  return (
    <section className="bg-[#ebe3d8] py-24 text-[#171411] sm:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mini-label text-[#96784f]">Why SAKHA</p>
            <h2 className="serif mt-7 text-5xl leading-[.95] sm:text-7xl lg:text-[82px]">
              Not decoration.
              <br />
              <span className="italic text-[#9d7d4d]">Direction.</span>
            </h2>
          </div>

          <div className="border-t border-black/10">
            {[
              ["Business First", "Decisions are evaluated against commercial reality."],
              ["Operationally Grounded", "Systems are designed around the way teams actually work."],
              ["Margin Conscious", "Cost, productivity and profitability remain part of the conversation."],
              ["Built for Continuity", "The objective is not launch day — it is sustainable performance."],
            ].map(([title, text], index) => (
              <div
                key={title}
                className="grid grid-cols-[50px_1fr] gap-5 border-b border-black/10 py-7"
              >
                <span className="text-[10px] text-[#a08358]">0{index + 1}</span>
                <div>
                  <h3 className="serif text-3xl">{title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-[#746c63]">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
