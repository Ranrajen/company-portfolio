// src/components/sections/TestimonialsSection.jsx
import { useState } from 'react';
import { testimonialsData } from '../../data/company';
import SectionHeader from '../ui/SectionHeader';

function TestimonialsSection() {
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <section className="section-padding" id="testimonials">
      <div className="container-custom">
        <SectionHeader
          badge="Testimonials"
          title="What Our Partners Say"
          subtitle="Trusted by academies, NGOs, and sports organizations."
        />

        <div className="grid-3-col">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="glass-card card-hover flex flex-col">

              {/* Image / Video Card */}
              {testimonial.video && playingVideo === testimonial.id ? (
                <div className="w-full h-48 rounded-xl mb-4 overflow-hidden border border-brand-crimson/10">
                  <video
                    src={testimonial.video}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                    onEnded={() => setPlayingVideo(null)}
                  />
                </div>
              ) : (
                <div className="w-full h-48 rounded-xl mb-4 overflow-hidden border border-brand-crimson/10 relative group">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  {/* Play button overlay for video cards */}
                  {testimonial.video && (
                    <button
                      onClick={() => setPlayingVideo(testimonial.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 smooth-transition cursor-pointer"
                      aria-label="Play video"
                    >
                      <div className="w-14 h-14 rounded-full bg-brand-crimson flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  )}
                  {/* Video icon badge */}
                  {testimonial.video && (
                    <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Video
                    </span>
                  )}
                </div>
              )}

              {/* Category Badge */}
              <div className="mb-3">
                <span className="text-xs px-3 py-1 rounded-full bg-brand-crimson/15 text-brand-crimson">
                  {testimonial.role}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl mb-2">{testimonial.name}</h3>

              {/* Quote */}
              <blockquote className="text-white/50 text-sm mb-6 italic leading-relaxed flex-1">
                "{testimonial.content}"
              </blockquote>

              {/* Star Rating */}
              <div className="text-brand-crimson text-lg mt-auto pt-4 border-t border-white/5">
                {'★'.repeat(testimonial.rating)}
                {'☆'.repeat(5 - testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;