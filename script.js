document.body.classList.add('fade-in');

// Fade out between pages
document.querySelectorAll("a").forEach(link => {
  // If the href uses a non-http scheme or is an in-page anchor, skip attaching the fade handler.
  const rawHref = link.getAttribute('href') || '';
  if (rawHref.startsWith('mailto:') || rawHref.startsWith('tel:') || rawHref.startsWith('#') || rawHref.startsWith('javascript:')) {
    return;
  }

  if (link.hostname === window.location.hostname) {
    link.addEventListener("click", function(e){
      e.preventDefault();
      const url = this.href;
      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");
      setTimeout(() => window.location = url, 500);
    });
  }
});

// Section reveal
const sections = document.querySelectorAll('.section');
const reveal = () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', reveal);
reveal();