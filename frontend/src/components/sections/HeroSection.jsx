import Button from '../ui/Button';
import { companyInfo } from '../../data/company';

function HeroSection() {
  return (
    <section className=" lg:-translate-y-20 relative overflow-hidden min-h-[calc(100vh+200px)] pt-24 pb-16 flex items-center">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-24 w-[450px] h-[450px] rounded-full bg-brand-crimson/15 blur-[140px]" />

        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full bg-brand-maroon/60 blur-[160px]" />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-brand-crimson/10 blur-[120px]" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-crimson/20 bg-brand-crimson/10 px-5 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-crimson animate-pulse" />

              <span className="text-sm tracking-wider uppercase text-brand-crimson font-semibold">
                Sports & Event Management
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-black leading-none tracking-tight">
              <span className="block text-white text-5xl md:text-7xl">
                Sports.
              </span>

              <span className="block gradient-text text-5xl md:text-7xl">
                Adventure.
              </span>

              <span className="block text-white text-5xl md:text-7xl">
                Experiences.
              </span>
            </h1>

            {/* Company Name */}
            <p className="mt-8 text-xl font-semibold text-brand-crimson tracking-widest uppercase">
              {companyInfo.name}
            </p>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
              {companyInfo.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">
              <Button to="/contact" variant="primary" size="lg">
                Plan Your Event
              </Button>

              <Button to="/portfolio" variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Main Image Card */}
            <div className="relative w-full max-w-xl">
              <div className="glass rounded-[32px] overflow-hidden border border-brand-crimson/20 shadow-2xl">
                <img
                  src="/images/hero-sports.jpg"
                  alt="Outpro India Sports Event"
                  className="w-full h-80 sm:h-105 md:h-130 lg:h-155 object-cover"
                  style={{
                    objectPosition: 'center bottom',
                    marginTop: '-25%',
                  }}
                />
              </div>

              {/* Decorative Glow */}
              <div className="absolute -z-10 -right-10 top-10 w-60 h-60 rounded-full bg-brand-crimson/20 blur-[120px]" />
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24 mb-8">
          <div className="glass rounded-2xl p-8 text-center hover:border-brand-crimson/40 transition-all duration-300">
            <h3 className="text-5xl font-black text-brand-crimson">
              {companyInfo.stats.eventsManaged}
            </h3>
            <p className="mt-3 text-white/50">Successful Events</p>
          </div>

          <div className="glass rounded-2xl p-8 text-center hover:border-brand-crimson/40 transition-all duration-300">
            <h3 className="text-5xl font-black text-brand-crimson">
              {companyInfo.stats.partnerships}
            </h3>
            <p className="mt-3 text-white/50">Strategic Partners</p>
          </div>

          <div className="glass rounded-2xl p-8 text-center hover:border-brand-crimson/40 transition-all duration-300">
            <h3 className="text-5xl font-black text-brand-crimson">100%</h3>
            <p className="mt-3 text-white/50">Commitment</p>
          </div>

          <div className="glass rounded-2xl p-8 text-center hover:border-brand-crimson/40 transition-all duration-300">
            <h3 className="text-5xl font-black text-brand-crimson">Jaipur</h3>
            <p className="mt-3 text-white/50">Growing Across India</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
