import { cn } from '../../lib/utils';

export default function GlassCard({ children, className = '', ...props }) {
  return (
    <div className={cn('glass-card', className)} {...props}>
      {children}
    </div>
  );
}
