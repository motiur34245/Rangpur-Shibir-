document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
        
        // যখন কোনো লিংকে ক্লিক করা হবে, তখন মেনু বন্ধ হয়ে যাবে
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // স্লাইডার ফাংশন
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    const slideCount = slides.length;
    let currentIndex = 0;

    function goToSlide(index) {
        if (index >= slideCount) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slideCount - 1;
        } else {
            currentIndex = index;
        }

        const slideWidth = slides[0].offsetWidth;
        sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    if (slides.length > 0) {
        // অটো স্লাইড: ২০ সেকেন্ড পর স্লাইড পরিবর্তন হবে
        setInterval(nextSlide, 5000);
        goToSlide(0);
    }
    
    // ম্যানুয়াল কন্ট্রোল
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
    }

    
// টাইম বার ফাংশন
const banglaDateTimeDisplay = document.getElementById('bangla-date-time');
const englishDateTimeDisplay = document.getElementById('english-date-time');
const scrollingText = document.getElementById('scrolling-text');

function updateDateTime() {
    const now = new Date();
    
    // বাংলা তারিখ ও সময়
    const banglaOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const banglaDateTime = now.toLocaleDateString('bn-BD', banglaOptions);
    
    // ইংরেজি তারিখ ও সময়
    const englishOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const englishDateTime = now.toLocaleDateString('en-US', englishOptions);

    if (banglaDateTimeDisplay && englishDateTimeDisplay) {
        banglaDateTimeDisplay.textContent = `আজকের তারিখ: ${banglaDateTime}`;
        englishDateTimeDisplay.textContent = `Today: ${englishDateTime}`;
    }
}

if (banglaDateTimeDisplay && englishDateTimeDisplay && scrollingText) {
    // শুধুমাত্র তারিখ ও সময় আপডেট করার জন্য
    setInterval(updateDateTime, 1000);
    updateDateTime();
    
    // লেখার পুনরাবৃত্তি
    const originalText = scrollingText.textContent;
    scrollingText.textContent = `${originalText} `.repeat(5); // প্রয়োজন অনুযায়ী পুনরাবৃত্তি করুন
}

    // সদস্যদের কার্ডের জন্য অ্যানিমেশন
    const memberCards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    memberCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        observer.observe(card);
    });
});

