document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav a');
  const sections = Array.from(document.querySelectorAll('main section[id]'));

  const setActiveLink = activeLink => {
    navLinks.forEach(link => link.classList.toggle('active', link === activeLink));
  };

  const highlightCurrentSection = () => {
    const scrollPosition = window.scrollY + 120;
    let currentSection = sections[0];

    sections.forEach(section => {
      if (section.offsetTop <= scrollPosition) {
        currentSection = section;
      }
    });

    const activeLink = Array.from(navLinks).find(link => link.getAttribute('href') === `#${currentSection.id}`);
    if (activeLink) {
      setActiveLink(activeLink);
    }
  };

  navLinks.forEach(link => {
    if (link.getAttribute('href') === window.location.hash) {
      link.classList.add('active');
    }

    link.addEventListener('click', () => {
      setActiveLink(link);
    });
  });

  highlightCurrentSection();
  window.addEventListener('scroll', highlightCurrentSection);

  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const contactForm = document.getElementById('contact-form');
  const contactMessage = document.getElementById('contact-message');

  const notifyVisitor = message => {
    if (contactMessage) {
      contactMessage.textContent = message;
      contactMessage.classList.add('success');
      contactMessage.style.display = 'block';
    } else {
      alert(message);
    }
  };

  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      const name = contactForm.elements.name.value.trim();
      const email = contactForm.elements.email.value.trim();
      const message = contactForm.elements.message.value.trim();

      if (!name || !email || !message) {
        notifyVisitor('Please complete all fields before sending your message.');
        return;
      }

      notifyVisitor(`Thank you, ${name}! Your message has been sent. I will check it and get back to you soon.`);
      contactForm.reset();
    });
  }

  const mailtoLinks = document.querySelectorAll('a[href^="mailto:"]');
  mailtoLinks.forEach(link => {
    link.addEventListener('click', () => {
      notifyVisitor('A visitor is trying to contact you. Check your email inbox soon.');
    });
  });
});
