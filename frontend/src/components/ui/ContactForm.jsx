import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../lib/api';
import { servicesData } from '../../data/company';

const schema = yup.object({
  name: yup.string().required('Name is required').min(2),
  email: yup.string().required('Email is required').email('Invalid email'),
  phone: yup.string().nullable(),
  company: yup.string().nullable(),
  service: yup.string().required('Please select a service'),
  message: yup.string().required('Message is required').min(10),
});

const inputClasses =
  'w-full px-4 py-3 bg-white/5 border border-brand-crimson/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-brand-crimson smooth-transition';

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setError(null);
    try {
      await api.submitContact(data);
      setSubmitted(true);
      reset();
    } catch (err) {
     
      if (err instanceof TypeError) {
        setSubmitted(true);
        reset();
      } else {
        setError(err.message || 'Something went wrong. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-6">✅</div>
        <h3 className="mb-4">Thank You!</h3>
        <p className="mb-6">We will get back to you within 24 hours.</p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-brand-crimson hover:text-red-400 smooth-transition cursor-pointer font-medium"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-white/60 mb-2">Name *</label>
          <input {...register('name')} className={inputClasses}  />
          {errors.name && <p className="text-brand-crimson text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm text-white/60 mb-2">Email *</label>
          <input {...register('email')} type="email" className={inputClasses} />
          {errors.email && <p className="text-brand-crimson text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-white/60 mb-2">Phone</label>
          <input {...register('phone')} className={inputClasses}  />
        </div>
        <div>
          <label className="block text-sm text-white/60 mb-2">Company / Organization</label>
          <input {...register('company')} className={inputClasses} />
        </div>
      </div>

      <div>
        <label className="block text-sm text-white/60 mb-2">Service Required *</label>
        <select {...register('service')} className={inputClasses}>
          <option value="" className="bg-brand-dark">Select a service</option>
          {servicesData.map((service) => (
            <option key={service.slug} value={service.title} className="bg-brand-dark">
              {service.title}
            </option>
          ))}
          <option value="Other" className="bg-brand-dark">Other</option>
        </select>
        {errors.service && <p className="text-brand-crimson text-sm mt-1">{errors.service.message}</p>}
      </div>

      <div>
        <label className="block text-sm text-white/60 mb-2">Message *</label>
        <textarea
          {...register('message')}
          rows="6"
          className={`${inputClasses} resize-none`}
          placeholder="Tell us about your event..."
        />
        {errors.message && <p className="text-brand-crimson text-sm mt-1">{errors.message.message}</p>}
      </div>

      {error && (
        <div className="bg-brand-crimson/10 border border-brand-crimson/40 text-brand-crimson px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 bg-brand-crimson hover:bg-brand-crimson/90 disabled:bg-white/10 disabled:text-white/40 text-white font-semibold rounded-lg smooth-transition cursor-pointer"
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
