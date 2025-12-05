const TargetAudienceSection = () => {
  return (
    <div className="py-6 text-center">
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="text-foreground font-medium">
          <div className="mb-1 text-sm">For</div>
          <div className="h-12 overflow-hidden text-2xl text-[#1e40af]">
            <div className="animate-slideUpDesktop">
              <div className="h-12 flex items-center justify-center">Brokers</div>
              <div className="h-12 flex items-center justify-center">Homeowners</div>
              <div className="h-12 flex items-center justify-center">Real estate investors</div>
              <div className="h-12 flex items-center justify-center">Developers</div>
              <div className="h-12 flex items-center justify-center">Lawyers</div>
              <div className="h-12 flex items-center justify-center">Banks</div>
              <div className="h-12 flex items-center justify-center">Homebuyers</div>
              <div className="h-12 flex items-center justify-center">Working Professionals</div>
              <div className="h-12 flex items-center justify-center">Founders</div>
              <div className="h-12 flex items-center justify-center">Students</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <div className="text-foreground font-medium">
          <div className="mb-1 text-xs">For</div>
          <div className="h-8 overflow-hidden text-xl text-[#1e40af]">
            <div className="animate-slideUpMobile">
              <div className="h-8 flex items-center justify-center">Brokers</div>
              <div className="h-8 flex items-center justify-center">Homeowners</div>
              <div className="h-8 flex items-center justify-center">Real estate investors</div>
              <div className="h-8 flex items-center justify-center">Developers</div>
              <div className="h-8 flex items-center justify-center">Lawyers</div>
              <div className="h-8 flex items-center justify-center">Banks</div>
              <div className="h-8 flex items-center justify-center">Homebuyers</div>
              <div className="h-8 flex items-center justify-center">Working Professionals</div>
              <div className="h-8 flex items-center justify-center">Founders</div>
              <div className="h-8 flex items-center justify-center">Students</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetAudienceSection;
