// =========================
// GUIDANCE & COUNSELING JS
// =========================

// ===== FAQ ACCORDION =====
document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(button => {
    button.addEventListener('click', function() {
      const faqItem = this.closest('.faq-item');
      const faqAnswer = faqItem.querySelector('.faq-answer');
      const isOpen = faqAnswer.style.maxHeight;
      
      // Close all FAQ items
      document.querySelectorAll('.faq-answer').forEach(answer => {
        answer.style.maxHeight = null;
        answer.style.paddingBottom = '0';
      });
      
      // Open clicked FAQ item
      if (!isOpen) {
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
        faqAnswer.style.paddingBottom = '22px';
      }
    });
  });

  // ===== TESTIMONIAL SLIDER =====
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  
  function showTestimonial(index) {
    testimonials.forEach(testimonial => {
      testimonial.classList.remove('active');
    });
    
    if (testimonials.length > 0) {
      testimonials[index].classList.add('active');
    }
  }
  
  // Auto-rotate testimonials every 5 seconds
  if (testimonials.length > 1) {
    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }, 5000);
  }

  // ===== FORM HANDLING =====
  const counselingForm = document.getElementById('counselingForm');
  const requestSection = document.getElementById('request');
  const categorySelect = counselingForm ? counselingForm.querySelector('select[name="category"]') : null;
  const serviceCards = document.querySelectorAll('.service-card[data-category]');

  if (serviceCards.length > 0) {
    serviceCards.forEach(card => {
      card.addEventListener('click', () => {
        const selectedCategory = card.dataset.category;
        if (categorySelect) {
          categorySelect.value = selectedCategory;
        }

        if (requestSection) {
          requestSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  if (counselingForm) {
    const whatsappNumbers = {
      spiritual: '1234567890',
      relationship: '1234567890',
      youth: '1234567890',
      career: '1234567890',
      grief: '1234567890',
      personal: '1234567890'
    };

    const categoryNames = {
      spiritual: 'Spiritual Guidance',
      relationship: 'Relationship Counseling',
      youth: 'Youth Counseling',
      career: 'Career & Purpose',
      grief: 'Grief & Loss',
      personal: 'Personal Growth'
    };

    counselingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate form
      const fullname = this.querySelector('input[name="fullname"]').value.trim();
      const email = this.querySelector('input[name="email"]').value.trim();
      const phone = this.querySelector('input[name="phone"]').value.trim();
      const category = this.querySelector('select[name="category"]').value;
      const message = this.querySelector('textarea[name="message"]').value.trim();
      
      // Basic validation
      if (!fullname || !email || !phone || !category || !message) {
        alert('Please fill in all fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Phone validation
      const phoneRegex = /^[\d\s\-\(\)\+]+$/;
      if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number.');
        return;
      }

      const whatsappNumber = whatsappNumbers[category] || '1234567890';
      const categoryLabel = categoryNames[category] || 'Counseling Request';
      const text = `Hello, I would like to request ${categoryLabel}.\nName: ${fullname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

      window.open(whatsappUrl, '_blank');
      this.reset();
    });
  }

  // ===== SCROLL REVEAL ANIMATION =====
  const reveals = document.querySelectorAll('.reveal');
  
  if (reveals.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    reveals.forEach(reveal => {
      observer.observe(reveal);
    });
  }

  // ===== NAV TOGGLE =====
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
        mainNav.classList.remove('open');
      }
    });
  }
});
