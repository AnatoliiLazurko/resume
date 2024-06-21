export const handleScroll = () => {
  const header = document.getElementById('header');
  if (window.scrollY > 0) {
    header.style.boxShadow = '0 1px 10px rgba(0, 0, 0, 0.1)';
    header.style.backgroundColor = 'white';
  } else {
    header.style.boxShadow = 'none';
    header.style.backgroundColor = 'transparent';
  }
};

export const addScrollListener = () => {
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};