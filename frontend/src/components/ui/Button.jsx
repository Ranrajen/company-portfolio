import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

const variants = {
  primary: 'bg-brand-crimson text-white hover:bg-brand-crimson/90 shadow-lg shadow-brand-crimson/25',
  secondary: 'bg-brand-maroon text-white hover:bg-brand-maroon/80 border border-brand-crimson/20',
  outline: 'border border-brand-crimson/30 text-brand-crimson hover:bg-brand-crimson/10',
  ghost: 'text-white/60 hover:text-white hover:bg-white/5',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  className,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-crimson',
    variants[variant],
    sizes[size],
    className
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
