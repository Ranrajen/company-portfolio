// src/components/sections/MetricsSection.jsx
import { metricsData } from '../../data/company';
import SectionHeader from '../ui/SectionHeader';

function MetricsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeader
          badge="By The Numbers"
          title="Our Impact"
          subtitle="Delivering excellence in sports event management."
        />

        <div className="grid-4-col">
          {metricsData.map((metric) => (
            <div key={metric.label} className="glass-card text-center">
              <div className="text-3xl mb-3">{metric.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-brand-crimson mb-2">
                {metric.value}
              </div>
              <div className="text-white/40 text-sm">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MetricsSection;
