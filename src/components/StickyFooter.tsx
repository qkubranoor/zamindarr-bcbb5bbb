import { NavLink, useLocation } from "react-router-dom";

const StickyFooter = () => {
  const location = useLocation();
  
  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Documents",
      href: "/documents",
    },
    {
      name: "Services", 
      href: "/#services",
    },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return location.pathname === "/" && location.hash === href.slice(1);
    }
    return location.pathname === href;
  };

  const handleNavClick = (href: string) => {
    if (href === "/documents") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith("/#")) {
      const element = document.querySelector(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-t border-white/10 shadow-lg safe-area-pb">
      <div className="container-responsive">
        <nav className="flex items-center justify-around py-3 h-14 sm:h-16">
          {navItems.map((item) => {
            const isCurrentActive = isActive(item.href);
            
            return (
              <NavLink
                key={item.name}
                to={item.href.startsWith("/#") ? "/" : item.href}
                onClick={() => handleNavClick(item.href)}
                className={`flex items-center justify-center transition-colors font-medium text-sm sm:text-base min-w-[64px] px-4 py-2 ${
                  isCurrentActive
                    ? "text-primary font-semibold"
                    : "text-white hover:text-primary"
                }`}
              >
                <span className="font-display tracking-tight">
                  {item.name}
                </span>
              </NavLink>
            );
          })}
          
        </nav>
      </div>
    </footer>
  );
};

export default StickyFooter;