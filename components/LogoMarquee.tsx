'use client';

const logos = [
  'OnlyFans', 'Fansly', 'Patreon', 'ManyVids', 'LoyalFans', 'AVN Stars',
  'OnlyFans', 'Fansly', 'Patreon', 'ManyVids', 'LoyalFans', 'AVN Stars', // Duplicate for seamless loop
];

export default function LogoMarquee() {
  return (
    <section className="py-12 bg-dark/30 border-y border-white/10 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll hover:pause-animation whitespace-nowrap">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center mx-12 text-xl font-bold text-gray-600 hover:text-gray-300 transition-colors duration-300"
              style={{ minWidth: '150px' }}
            >
              {logo}
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
