function downloadResume() {
    // This opens your resume in a new tab or triggers a download
    window.open('MANISH_DEVELOPER_RESUME.pdf', '_blank');
  }

// Typing Animation
        const texts = [
            "Full Stack Developer",
            "Software Developer", 
            "Problem Solver",
            "Tech Freak"
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingElement = document.getElementById('typing-text');

        function typeText() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }

            setTimeout(typeText, typeSpeed);
        }

        // Start typing animation
        typeText();

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Scroll reveal animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Certificate carousel
     let currentCert = 0;
const certificates = document.querySelectorAll(".certificate-card");
const dots = document.querySelectorAll(".carousel-dot");

function updateCertificate(index) {
  certificates.forEach((card, i) => {
    card.style.display = i === index ? "block" : "none";
    dots[i]?.classList.toggle("active", i === index);
  });
}

document.getElementById("prevCert").addEventListener("click", () => {
  currentCert = (currentCert - 1 + certificates.length) % certificates.length;
  updateCertificate(currentCert);
});

document.getElementById("nextCert").addEventListener("click", () => {
  currentCert = (currentCert + 1) % certificates.length;
  updateCertificate(currentCert);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentCert = index;
    updateCertificate(currentCert);
  });
});

updateCertificate(currentCert);




        // Resume download function
        function downloadResume() {
            const resumeContent = `hi`;

            const blob = new Blob([resumeContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = '';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }

        // Mobile menu toggle (if needed)
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }

