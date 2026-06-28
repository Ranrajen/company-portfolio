import { cn } from '../../lib/utils';

function Card({ children, className, hover = false, glass = true, ...props }) {
  return (
    <div
      className={cn(glass ? 'glass-card' : '', hover ? 'card-hover' : '', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
