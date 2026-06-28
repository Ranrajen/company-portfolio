import { useMemo, useState } from 'react';
import { portfolioData } from '../data/company';

export default function PortfolioPage() {
  const categories = useMemo(
    () => ['All', ...new Set(portfolioData.map((p) => p.category))],
    []
  );
  const [activeFilter, setActiveFilter] = useState('All');

  const projects =
    activeFilter === 'All'
      ? portfolioData
      : portfolioData.filter((p) => p.category === activeFilter);

  return (
    <>
      <section className="section-padding" style={{ paddingTop: '140px' }}>
        <div className="container-custom text-center">
          <h1 className="animate-fade-in">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="mx-auto w-full" style={{ marginTop: '24px' }}>
            Explore our success stories and see how we've helped academies,
            NGOs, and businesses bring events to life.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6 mb-20 -translate-y-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-8 py-4 rounded-full text-lg font-semibold smooth-transition cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-brand-crimson text-white'
                    : 'bg-white/5 text-white/60 hover:bg-brand-crimson/20 hover:text-brand-crimson'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid-3-col">
            {projects.map((project) => (
              <div key={project.id} className="glass-card card-hover">
                {/* ✅ Project Image */}
                <div className="w-full h-48 rounded-xl mb-4 overflow-hidden border border-brand-crimson/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                <div className="flex-between mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-brand-crimson/15 text-brand-crimson">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl mb-1">{project.title}</h3>
                <p className="text-brand-crimson text-sm mb-4">
                  {project.client}
                </p>
                <p className="text-white/50 text-sm mb-4">
                  {project.description}
                </p>
                <div className="grid grid-cols-3 gap-2 mt-auto">
                  {project.kpis.map((kpi) => (
                    <div
                      key={kpi.label}
                      className="text-center p-3 rounded-lg bg-white/5"
                    >
                      <div className="text-base font-bold text-brand-crimson">
                        {kpi.value}
                      </div>
                      <div className="text-xs text-white/40">{kpi.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {projects.length === 0 && (
            <p className="text-center text-white/40 mt-8">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}