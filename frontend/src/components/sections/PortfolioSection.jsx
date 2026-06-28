import { portfolioData } from '../../data/company';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

function PortfolioSection() {
  return (
    <section className="section-padding" id="portfolio">
      <div className="container-custom">
        <SectionHeader
          badge="Our Work"
          title="Featured Events"
          subtitle="Showcasing our best sports and event management projects."
        />

        <div className="grid-3-col mb-12">
          {portfolioData.map((item) => (
            <div key={item.id} className="glass-card group overflow-hidden">
              <div className="w-full h-48 rounded-xl mb-5 overflow-hidden border border-brand-crimson/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              <span className="inline-block px-3 py-1 rounded-full bg-brand-crimson/10 text-brand-crimson text-xs font-medium mb-3">
                {item.category}
              </span>

              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-white/45 text-sm mb-4">{item.description}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {item.kpis.map((kpi) => (
                  <span
                    key={kpi.label}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-white/50 text-xs"
                  >
                    {kpi.label}: <span className="text-white">{kpi.value}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button to="/portfolio" variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
