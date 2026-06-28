export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Scrolls to a section by ID
 */
export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

/**
 * Formats a phone number for display
 */
export function formatPhone(phone) {
  return phone.replace(/(\+\d{2})(\d{5})(\d{5})/, '$1 $2 $3');
}

/**
 * Gets initials from a name
 */
export function getInitials(name) {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Generates star rating HTML entities
 */
export function getStars(rating) {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}
