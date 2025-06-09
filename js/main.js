// Image categories and their paths
const categories = {
    football: {
        path: '/img/football/',
        images: [
            { src: 'football1.jpg', alt: 'Football action shot capturing the intensity of the game' },
            { src: 'football2.jpg', alt: 'Football player in mid-air catch' },
            { src: 'football3.jpg', alt: 'Football team celebration moment' }
        ]
    },
    soccer: {
        path: '/img/soccer/',
        images: [
            { src: 'soccer1.jpg', alt: 'Soccer player dribbling the ball' },
            { src: 'soccer2.jpg', alt: 'Soccer match action shot' },
            { src: 'soccer3.jpg', alt: 'Soccer team huddle' }
        ]
    },
    waterPolo: {
        path: '/img/water-polo/',
        images: [
            { src: 'waterpolo1.jpg', alt: 'Water polo player shooting' },
            { src: 'waterpolo2.jpg', alt: 'Water polo match action' },
            { src: 'waterpolo3.jpg', alt: 'Water polo team celebration' }
        ]
    },
    volleyball: {
        path: '/img/volleyball/',
        images: [
            { src: 'volleyball1.jpg', alt: 'Volleyball player spiking' },
            { src: 'volleyball2.jpg', alt: 'Volleyball team in action' },
            { src: 'volleyball3.jpg', alt: 'Volleyball match intensity' }
        ]
    },
    nature: {
        path: '/img/nature/',
        images: [
            { src: 'nature1.jpg', alt: 'Beautiful landscape photography' },
            { src: 'nature2.jpg', alt: 'Nature close-up shot' },
            { src: 'nature3.jpg', alt: 'Scenic nature view' }
        ]
    }
};

// Function to get random images from each category
function getRandomImages() {
    const images = [];
    for (const category in categories) {
        const categoryImages = categories[category].images;
        const randomIndex = Math.floor(Math.random() * categoryImages.length);
        const image = categoryImages[randomIndex];
        images.push({
            src: categories[category].path + image.src,
            category: category,
            alt: image.alt
        });
    }
    return images;
}

// Function to create gallery items
function createGalleryItem(image) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.category = image.category;

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.loading = 'lazy';

    const caption = document.createElement('div');
    caption.className = 'caption';
    caption.textContent = image.category.charAt(0).toUpperCase() + image.category.slice(1);

    item.appendChild(img);
    item.appendChild(caption);

    // Add click event for lightbox
    item.addEventListener('click', () => {
        openLightbox(image);
    });

    return item;
}

// Lightbox functionality
function openLightbox(image) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    
    const content = document.createElement('div');
    content.className = 'lightbox-content';
    
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    
    const caption = document.createElement('div');
    caption.className = 'lightbox-caption';
    caption.textContent = image.alt;
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '&times;';
    
    content.appendChild(img);
    content.appendChild(caption);
    content.appendChild(closeBtn);
    lightbox.appendChild(content);
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    closeBtn.addEventListener('click', () => {
        lightbox.remove();
        document.body.style.overflow = '';
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.remove();
            document.body.style.overflow = '';
        }
    });
}

// Typewriter effect
const slogans = [
    "Where visions meet reality through the lens",
    "Action. Emotion. Captured.",
    "Every photo tells a story",
    "Emotion behind every action"
];

let currentSloganIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let deletingSpeed = 50;
let pauseTime = 2000;

function typeWriter() {
    const typedTextElement = document.getElementById('typed-text');
    console.log('Typewriter function called');
    console.log('Element found:', !!typedTextElement);
    
    if (!typedTextElement) {
        console.error('Typed text element not found!');
        return;
    }

    const currentSlogan = slogans[currentSloganIndex];
    console.log('Current state:', {
        slogan: currentSlogan,
        currentIndex: currentCharIndex,
        isDeleting,
        elementText: typedTextElement.textContent
    });

    if (isDeleting) {
        currentCharIndex--;
        typedTextElement.textContent = currentSlogan.substring(0, currentCharIndex);
        console.log('Deleting:', typedTextElement.textContent);
    } else {
        currentCharIndex++;
        typedTextElement.textContent = currentSlogan.substring(0, currentCharIndex);
        console.log('Typing:', typedTextElement.textContent);
    }

    // When finished typing the full slogan
    if (!isDeleting && currentCharIndex === currentSlogan.length) {
        console.log('Finished typing, pausing before delete');
        isDeleting = true;
        setTimeout(typeWriter, pauseTime);
        return;
    }

    // When finished deleting the slogan
    if (isDeleting && currentCharIndex === 0) {
        console.log('Finished deleting, moving to next slogan');
        isDeleting = false;
        currentSloganIndex = (currentSloganIndex + 1) % slogans.length;
        setTimeout(typeWriter, 500);
        return;
    }

    // Continue typing or deleting
    const nextSpeed = isDeleting ? deletingSpeed : typingSpeed;
    console.log('Next iteration in', nextSpeed, 'ms');
    setTimeout(typeWriter, nextSpeed);
}

// Initialize typewriter
function initTypewriter() {
    console.log('Initializing typewriter...');
    const typedTextElement = document.getElementById('typed-text');
    if (typedTextElement) {
        console.log('Typewriter element found, starting...');
        typeWriter();
    } else {
        console.error('Typewriter element not found!');
    }
}

// Initialize gallery
function initGallery() {
    const gallery = document.querySelector('.masonry-grid');
    if (!gallery) {
        console.log('Gallery element not found, skipping gallery initialization');
        return;
    }

    const images = getRandomImages();
    images.forEach(image => {
        const item = createGalleryItem(image);
        gallery.appendChild(item);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize typewriter
    initTypewriter();
    
    // Initialize gallery
    initGallery();

    // Header scroll effect
    const header = document.querySelector('.top-nav');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.background = 'rgba(0, 0, 0, 0.8)';
            } else {
                header.style.background = 'transparent';
            }
        });
    }

    // Mobile menu functionality
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    if (openMenu && closeMenu && sidebar && sidebarOverlay) {
        openMenu.addEventListener('click', () => {
            sidebar.classList.add('open');
            sidebarOverlay.classList.add('active');
        });
        closeMenu.addEventListener('click', () => {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('active');
        });
        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('active');
        });
    }

    // Fade-in sequence for .fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 200}ms`;
    });

    // Smooth scroll for explore-link
    const exploreLink = document.querySelector('.explore-link');
    if (exploreLink) {
        exploreLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector('#discover-section');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// Mobile navigation toggle
const navToggle = document.createElement('button');
navToggle.className = 'nav-toggle';
navToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector('.main-nav').appendChild(navToggle);

navToggle.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// Function to scroll to contact form and pre-fill subject
function scrollToForm(subject) {
    const form = document.querySelector('.contact-form');
    const subjectInput = document.getElementById('subject');
    
    if (form && subjectInput) {
        subjectInput.value = subject;
        form.scrollIntoView({ behavior: 'smooth' });
        subjectInput.focus();
    }
}

// Function to scroll to booking section
function scrollToBooking() {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
} 