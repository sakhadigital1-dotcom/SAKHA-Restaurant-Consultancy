function Footer() {
  return (
    <footer className="bg-[#120f0d] text-[#f2ede4]">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        <div className="flex flex-col gap-10 border-b border-white/10 py-14 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="serif text-5xl tracking-[.04em]">SAKHA</p>
            <p className="mt-2 text-[9px] uppercase tracking-[.24em] text-[#b99a68]">
              Restaurant Consultancy
            </p>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/35">
            Restaurant strategy, systems and operational consulting for
            hospitality businesses designed to perform.
          </p>
        </div>

        <div className="flex flex-col gap-4 py-6 text-[9px] uppercase tracking-[.18em] text-white/25 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} SAKHA. All rights reserved.</p>
          <p>Prayagraj (Allahabad) · Utter Pradesh · India</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
