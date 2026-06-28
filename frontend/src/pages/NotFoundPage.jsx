import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <section className="section-padding flex-center" style={{ minHeight: '70vh', paddingTop: '160px' }}>
      <div className="container-custom text-center">
        <div className="gradient-text" style={{ fontSize: '96px', fontWeight: 800, lineHeight: 1 }}>404</div>
        <h2 className="mb-4" style={{ marginTop: '16px' }}>Page not found</h2>
        <p className="max-w-xl mx-auto mb-8">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Button to="/" variant="primary" size="lg">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
