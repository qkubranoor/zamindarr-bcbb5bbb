const TargetAudienceSection = () => {
  const professions = [
    "Brokers",
    "Homeowners", 
    "Real estate investors",
    "Developers",
    "Lawyers",
    "Banks",
    "Homebuyers",
    "Working Professionals",
    "Founders",
    "Students"
  ];

  return (
    <section className="pt-0 pb-2 lg:pb-4 text-center">
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="inline-flex items-center gap-3">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-slate-300"></div>
          <span className="text-xs tracking-[0.2em] uppercase text-slate-400 font-light">For</span>
          <div className="h-12 overflow-hidden w-52">
            <div className="animate-slideUpDesktop">
              {professions.map((profession) => (
                <div key={profession} className="h-12 flex items-center justify-center text-xl font-medium bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] bg-clip-text text-transparent">
                  {profession}
                </div>
              ))}
            </div>
          </div>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-slate-300"></div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <div className="inline-flex items-center gap-2">
          <div className="h-px w-5 bg-gradient-to-r from-transparent to-slate-300"></div>
          <span className="text-[10px] tracking-[0.15em] uppercase text-slate-400 font-light">For</span>
          <div className="h-8 overflow-hidden w-44">
            <div className="animate-slideUpMobile">
              {professions.map((profession) => (
                <div key={profession} className="h-8 flex items-center justify-center text-base font-medium bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] bg-clip-text text-transparent">
                  {profession}
                </div>
              ))}
            </div>
          </div>
          <div className="h-px w-5 bg-gradient-to-l from-transparent to-slate-300"></div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
