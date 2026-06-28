// src/components/ui/SectionHeader.jsx
function SectionHeader({
  badge,
  title,
  subtitle,
  center = true,
  className = '',
}) {
  return (
    <div
      className={`lg:ml-20  section-gap-sm ${center ? 'text-center' : ''} ${className}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-crimson/10 border border-brand-crimson/20 text-brand-crimson text-sm font-medium mb-4">
          {badge}
        </span>
      )}
      <h2 className="mb-4">{title}</h2>
      {subtitle && (
        <p className="text-center">{subtitle}</p>
      )}
    </div>
  );
}

export default SectionHeader;
