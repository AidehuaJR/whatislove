const roles = [
    "Web Developer ",
    "Developer ",
    "Web Designer ",
    "Student ",
    "Script Writer ",
    "Game Developer",
    "Game Designer"
  ];
  
  const textElement = document.querySelector(".typewriter-text");
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function typeEffect() {
    const currentRole = roles[roleIndex];
    const currentText = currentRole.substring(0, charIndex);
  
    textElement.textContent = currentText;
  
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }
  
    // Typing completed
    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => {
        isDeleting = true;
        typeEffect();
      }, 1200); // Pause before deleting
      return;
    }
  
    // Deleting completed
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  
    // Control speed
    const typingSpeed = isDeleting ? 60 : 100;
  
    setTimeout(typeEffect, typingSpeed);
  }
  
  // Start typing effect on page load
  document.addEventListener("DOMContentLoaded", typeEffect);
  
  const typingSpeed = isDeleting ? 50 : 120;