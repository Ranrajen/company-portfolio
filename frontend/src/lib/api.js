const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

async function request(path, options) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || err.error || `Request failed (${res.status})`);
  }
  return res.json();
}

export const api = {
  submitContact: (data) =>
    request('/contacts', { method: 'POST', body: JSON.stringify(data) }),

  getServices: () => request('/services'),
  getServiceBySlug: (slug) => request(`/services/slug/${slug}`),
  getPortfolio: (category) =>
    request(category ? `/portfolio?category=${category}` : '/portfolio'),
  getPortfolioItem: (id) => request(`/portfolio/${id}`),
  getFeaturedPortfolio: () => request('/portfolio/featured'),
  getPortfolioCategories: () => request('/portfolio/categories'),
  getTestimonials: () => request('/testimonials'), 
  getTeamMembers: () => request('/team'), 
  
  
  login: (email, password) => 
    request('/auth/login', { 
      method: 'POST', 
      body: JSON.stringify({ email, password }) 
    }),
  register: (userData) => 
    request('/auth/register', { 
      method: 'POST', 
      body: JSON.stringify(userData) 
    }),
  getMe: () => 
    request('/auth/me', { 
      headers: { 
        'Authorization': `Bearer ${localStorage.getItem('token')}` 
      } 
    }),
};