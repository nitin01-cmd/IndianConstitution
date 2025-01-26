// Navigation Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navHeight = document.querySelector('.navbar').offsetHeight;
        
        window.scrollTo({
            top: target.offsetTop - navHeight,
            behavior: 'smooth'
        });

        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Search Functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});

// Amendments Data
const amendments = [
    {
        number: "1st",
        year: "1951",
        description: "Made several changes to the Constitution including provisions related to land reforms and zamindari abolition."
    },
    {
        number: "7th",
        year: "1956",
        description: "Reorganized states on linguistic basis and amended the State Lists."
    },
    {
        number: "42nd",
        year: "1976",
        description: "Added the words 'secular' and 'socialist' to the Preamble. Known as the Mini-Constitution."
    },
    {
        number: "44th",
        year: "1978",
        description: "Restored certain fundamental rights restricted during Emergency. Right to Property removed as fundamental right."
    },
    {
        number: "73rd",
        year: "1992",
        description: "Gave constitutional status to Panchayati Raj institutions."
    },
    {
        number: "74th",
        year: "1992",
        description: "Gave constitutional status to municipalities and provisions for District Planning Committees."
    },
    {
        number: "86th",
        year: "2002",
        description: "Made education a fundamental right for children between 6-14 years."
    },
    {
        number: "101st",
        year: "2016",
        description: "Introduced Goods and Services Tax (GST) in India."
    }
];

// Populate Amendments
const amendmentsList = document.getElementById('amendmentsList');
amendments.forEach(amendment => {
    const card = document.createElement('div');
    card.className = 'right-card';
    card.innerHTML = `
        <h3>${amendment.number} Amendment (${amendment.year})</h3>
        <p>${amendment.description}</p>
    `;
    amendmentsList.appendChild(card);
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animations to sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Add scroll-based navbar background
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#ffffff';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = '#ffffff';
        navbar.style.boxShadow = 'none';
    }
});