export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Split background */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-[#1a2332]" />
        <div className="w-1/2 bg-[#f5a623]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left text */}
        <div className="flex-1 pt-20 md:pt-0">
          <p
            className="text-white text-4xl md:text-5xl font-light italic mb-2"
            style={{ fontFamily: "'Poppins', sans-serif", animationDelay: '0.1s' }}
          >
            Hi, I'm
          </p>
          <h1
            className="text-[#f5a623] text-5xl md:text-7xl font-bold tracking-wide mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            ESWARI S
          </h1>
          <p className="text-white/80 text-base font-light tracking-widest mb-10 uppercase">
            UI/UX Designer
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => handleScroll('#projects')}
              className="px-7 py-3 bg-[#f5a623] text-[#1a2332] text-sm font-semibold rounded hover:bg-[#d4891a] transition-colors duration-200 shadow-lg"
            >
              View My Projects
            </button>
            <button
              className="px-7 py-3 bg-[#f5a623] text-[#1a2332] text-sm font-semibold rounded hover:bg-[#d4891a] transition-colors duration-200 shadow-lg"
            >
              Resume
            </button>
          </div>
        </div>

        {/* Right — dotted circle */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Outer dotted ring */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Spinning dotted border SVG */}
            <svg
              className="absolute inset-0 w-full h-full spin-slow"
              viewBox="0 0 400 400"
              fill="none"
            >
              <circle
                cx="200"
                cy="200"
                r="190"
                stroke="#1a2332"
                strokeWidth="12"
                strokeDasharray="4 12"
                strokeLinecap="round"
              />
            </svg>

            {/* Inner black circle */}
            <div className="absolute inset-4 rounded-full bg-black/90 shadow-2xl" />

            {/* Profile placeholder — initials */}
            <div className="absolute inset-4 rounded-full flex items-center justify-center">
              <span className="text-white/20 text-8xl font-bold select-none">ES</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
