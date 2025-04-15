
const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');
const navbarBox = document.querySelector('.navbar-box');

if (navbarShowBtn && navbarHideBtn && navbarBox) {
    navbarShowBtn.addEventListener('click', () => {
        navbarBox.classList.add('navbar-box-show');
    });

    navbarHideBtn.addEventListener('click', () => {
        navbarBox.classList.remove('navbar-box-show');
    });
}


$(document).ready(function () {
    if ($('.feedback-slider').length) {
        $('.feedback-slider').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Validation (Optional)
const form = document.querySelector('form'); // Replace with your form selector
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    // Helper function to validate email
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}

// Dynamic Content Loading (Optional)
const loadMoreBtn = document.querySelector('.load-more-btn'); // Add a "Load More" button
const articlesList = document.querySelector('.articles-list');

if (loadMoreBtn && articlesList) {
    loadMoreBtn.addEventListener('click', function () {
        // Simulate fetching new articles (replace with actual API call)
        const newArticles = [
            {
                image: 'assets/images/article-img-4.png',
                title: 'New Article 1',
                description: 'This is a new article about health and wellness.'
            },
            {
                image: 'assets/images/article-img-5.png',
                title: 'New Article 2',
                description: 'This is another new article about fitness tips.'
            }
        ];

        // Append new articles to the list
        newArticles.forEach(article => {
            const articleItem = document.createElement('article');
            articleItem.classList.add('articles-item');
            articleItem.innerHTML = `
                <div class="item-img">
                    <img src="${article.image}" alt="Article Image">
                </div>
                <div class="item-body">
                    <div class="item-title">${article.title}</div>
                    <p class="text">${article.description}</p>
                    <a href="#" class="item-link text-blue d-flex align-items-baseline">
                        <span class="item-link-text">Read more</span>
                        <span class="item-link-icon">
                            <i class="fas fa-arrow-right"></i>
                        </span>
                    </a>
                </div>
            `;
            articlesList.appendChild(articleItem);
        });
    });
}
// Patient Registration Form Validation and Submission
const registrationForm = document.getElementById('registration-form');

if (registrationForm) {
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const dob = document.getElementById('dob').value.trim();
        const gender = document.getElementById('gender').value.trim();
        const address = document.getElementById('address').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm-password').value.trim();

        // Validate form fields
        if (!name || !email || !phone || !dob || !gender || !address || !password || !confirmPassword) {
            alert('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        
        alert('Registration successful!');
        registrationForm.reset(); // Reset the form
    });

    
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Find the target section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Smooth scroll
                block: 'start' // Scroll to the top of the section
            });
        }
    });
});