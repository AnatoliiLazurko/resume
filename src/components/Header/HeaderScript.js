export const handleScroll = () => {
  const header = document.getElementById('header');
  if (window.scrollY > 0) {
    header.style.boxShadow = '0 1px 10px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = 'none';
  }
};

export const addScrollListener = () => {
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};