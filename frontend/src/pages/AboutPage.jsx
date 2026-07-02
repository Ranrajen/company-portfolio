import { companyInfo, teamData } from '../data/company';
import GlassCard from '../components/ui/GlassCard';
import SectionHeader from '../components/ui/SectionHeader';

export default function AboutPage() {
  return (
    <>
      <section className="section-padding" style={{ paddingTop: '140px' }}>
        <div className="container-custom text-center">
          <h1 className="animate-fade-in">
            About <span className="gradient-text">{companyInfo.name}</span>
          </h1>
          <p
            className="max-w-3xl mx-auto translate-x-0 lg:translate-x-45 "
            style={{ marginTop: '24px' }}
          >
            {companyInfo.description}
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container-custom">
          <div className="grid-2-col">
            <GlassCard>
              <h2 className="text-3xl font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p>{companyInfo.mission}</p>
            </GlassCard>
            <GlassCard>
              <h2 className="text-3xl font-bold mb-6">
                Our <span className="gradient-text">Vision</span>
              </h2>
              <p>{companyInfo.vision}</p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container-custom">
          <SectionHeader
            title={
              <>
                Core <span className="gradient-text">Values</span>
              </>
            }
          />
          <div className="grid-4-col">
            {companyInfo.coreValues.map((value, index) => (
              <GlassCard key={value.title} className="text-center">
                <div className="w-14 h-14 flex-center rounded-full bg-brand-crimson/15 mx-auto mb-5">
                  <span className="text-xl font-bold text-brand-crimson">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-brand-crimson">
                  {value.title}
                </h3>
                <p className="text-sm">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container-custom">
          <SectionHeader
            title={
              <>
                Leadership <span className="gradient-text">Team</span>
              </>
            }
          />
          <div className="grid-3-col">
            {teamData.map((member) => (
              <GlassCard key={member.id} className="text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex-center bg-brand-crimson/15 text-2xl font-bold text-brand-crimson">
                  {member.name
                    .split(' ')
                    .map((w) => w[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-brand-crimson text-sm mb-2">
                  {member.designation}
                </p>
                <p className="text-sm">{member.bio}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {Object.entries(companyInfo.stats).map(([key, value]) => (
              <div key={key}>
                <div className="text-3xl md:text-4xl font-bold text-brand-crimson mb-2">
                  {value}
                </div>
                <div className="text-white/40 uppercase tracking-wider text-xs">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
