// Enhanced Birthday Website Script - No Overlapping Issues
document.addEventListener('DOMContentLoaded', function() {
    
    // Image gallery data with romantic captions
    const galleryImages = [
        {
            src: 'img_1.jpeg',
            caption: 'Every moment with you feels like a beautiful dream come true. Your love is my greatest treasure.'
        },
        {
            src: 'img_2.jpeg',
            caption: 'In your arms, I have found my home. Together, we create the most beautiful love story.'
        },
        {
            src: 'img_3.jpeg',
            caption: 'Like these flowers, my love for you blooms more beautiful with each passing day.'
        },
        {
            src: 'img_4.jpeg',
            caption: 'You are my sunshine on cloudy days, my anchor in stormy seas, my everything.'
        },
        {
            src: 'img_5.jpeg',
            caption: 'With you, every day is Valentine\'s Day, every moment is a celebration of love.'
        },
        {
            src: 'img_6.jpeg',
            caption: 'Your smile lights up my world brighter than a thousand stars in the night sky.'
        },
        {
            src: 'img_7.jpeg',
            caption: 'In the garden of my heart, you are the most beautiful flower that ever bloomed.'
        },
        {
            src: 'img_8.jpeg',
            caption: 'Forever isn\'t long enough to love you the way you deserve to be loved.'
        },
        {
            src: 'img_9.jpeg',
            caption: 'You are my today, my tomorrow, my always. Happy Birthday, my beautiful love.'
        },
        {
            src: 'img_10.jpeg',
            caption: 'Every love song makes sense now, every poem speaks our truth. You complete me.'
        }
    ];

    let currentImageIndex = 0;

    // Get DOM elements
    const interactiveHeart = document.getElementById('interactiveHeart');
    const imageGalleryModal = document.getElementById('imageGalleryModal');
    const closeModal = document.getElementById('closeModal');
    const galleryImage = document.getElementById('galleryImage');
    const romanticCaption = document.getElementById('romanticCaption');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const imageCounter = document.getElementById('imageCounter');
    const floatingMessages = document.getElementById('floatingMessages');

    // Interactive Heart Gallery Functions
    function openGallery() {
        imageGalleryModal.style.display = 'block';
        imageGalleryModal.setAttribute('aria-hidden', 'false');
        showImage(0);
        createFloatingMessage('💕 Our Beautiful Memories 💕');
        
        // Focus management
        closeModal.focus();
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }

    function closeGallery() {
        imageGalleryModal.style.display = 'none';
        imageGalleryModal.setAttribute('aria-hidden', 'true');
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Return focus to trigger element
        interactiveHeart.focus();
    }

    function showImage(index) {
        if (index < 0 || index >= galleryImages.length) return;
        
        const image = galleryImages[index];
        currentImageIndex = index;
        
        // Add fade effect
        galleryImage.style.opacity = '0';
        
        setTimeout(() => {
            galleryImage.src = image.src;
            galleryImage.alt = `Romantic Memory ${index + 1}`;
            romanticCaption.textContent = image.caption;
            imageCounter.textContent = `${index + 1} / ${galleryImages.length}`;
            galleryImage.style.opacity = '1';
        }, 150);
    }

    function nextImage() {
        const nextIndex = (currentImageIndex + 1) % galleryImages.length;
        showImage(nextIndex);
    }

    function prevImage() {
        const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        showImage(prevIndex);
    }

    // Event Listeners for Gallery
    if (interactiveHeart) {
        interactiveHeart.addEventListener('click', openGallery);
        interactiveHeart.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openGallery();
            }
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', closeGallery);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', prevImage);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', nextImage);
    }

    // Close modal when clicking outside
    if (imageGalleryModal) {
        imageGalleryModal.addEventListener('click', function(event) {
            if (event.target === imageGalleryModal) {
                closeGallery();
            }
        });
    }

    // Love Elements Data
    const loveQuotes = [
        "You are my sun, my moon, and all my stars. Happy Birthday, my love!",
        "In your eyes, I see my future. In your smile, I see my happiness.",
        "Every day with you is a new adventure, a new reason to smile.",
        "You are not just my love, you are my life, my heart, my everything.",
        "With you, I am home. With you, I am complete.",
        "Your love is the melody that makes my heart dance with joy.",
        "In the story of my life, you are the most beautiful chapter.",
        "You make ordinary moments feel extraordinary just by being there."
    ];

    const lovePoems = [
        "Roses are red, violets are blue, no birthday wish could be sweeter than you.",
        "In the symphony of life, you are my favorite melody, playing sweetly in my heart.",
        "Like a candle in the darkness, you light up my world with your love.",
        "You are the poetry my heart writes, the song my soul sings.",
        "In the book of my life, you are the most beautiful chapter.",
        "Your love is like a gentle breeze that carries away all my worries.",
        "With every heartbeat, I love you more than the beat before.",
        "You are my dream come true, my wish upon a star fulfilled."
    ];

    const loveMemories = [
        "Remember our first date? You were so nervous, but your smile melted my heart instantly.",
        "That rainy day when we danced in the puddles - pure magic and joy.",
        "Our first 'I love you' under the starlit sky - a moment I'll treasure forever.",
        "The way you laugh at my silly jokes makes every day brighter.",
        "Every sunrise with you is a new beginning, every sunset a beautiful ending.",
        "That time we got lost but found each other - the perfect metaphor for our love.",
        "Your hand in mine during that scary movie - my safe place in any storm.",
        "The way you look at me like I'm the only person in the world - priceless."
    ];

    const loveSongs = [
        "🎵 'You are my sunshine, my only sunshine...' - Our song that plays in my heart daily.",
        "🎵 'All of me loves all of you...' - Every word speaks our truth.",
        "🎵 'I can't help myself, I love you and nobody else...' - My heart's anthem.",
        "🎵 'Perfect by Ed Sheeran' - Because you are perfect to me in every way.",
        "🎵 'A Thousand Years' - I have loved you for a thousand years, I'll love you for a thousand more.",
        "🎵 'Thinking Out Loud' - When your legs don't work like they used to before...",
        "🎵 'Make You Feel My Love' - I could make you happy, make your dreams come true.",
        "🎵 'At Last' - At last, my love has come along, my lonely days are over."
    ];

    // Interactive Love Elements
    const loveElements = {
        loveQuote: { data: loveQuotes, message: '💌 Love Quote', icon: '💌' },
        lovePoem: { data: lovePoems, message: '📝 Love Poem', icon: '📝' },
        loveMemory: { data: loveMemories, message: '🌟 Beautiful Memory', icon: '🌟' },
        loveSong: { data: loveSongs, message: '🎵 Our Love Song', icon: '🎵' }
    };

    const loveContent = document.getElementById('loveContent');

    // Add event listeners for love elements
    Object.keys(loveElements).forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element && loveContent) {
            const elementData = loveElements[elementId];
            
            element.addEventListener('click', function() {
                const randomItem = elementData.data[Math.floor(Math.random() * elementData.data.length)];
                loveContent.textContent = randomItem;
                createFloatingMessage(elementData.message);
                addSparkleEffect(this);
            });

            // Keyboard support
            element.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        }
    });

    // Floating message creation
    function createFloatingMessage(message) {
        if (!floatingMessages) return;
        
        const floatingMessage = document.createElement('div');
        floatingMessage.className = 'floating-message';
        floatingMessage.textContent = message;
        floatingMessage.setAttribute('aria-live', 'polite');
        
        // Random position (avoiding edges)
        const leftPos = Math.random() * 70 + 15; // 15% to 85%
        const topPos = Math.random() * 70 + 15;  // 15% to 85%
        
        floatingMessage.style.left = leftPos + '%';
        floatingMessage.style.top = topPos + '%';
        
        floatingMessages.appendChild(floatingMessage);
        
        // Remove after animation
        setTimeout(() => {
            if (floatingMessage.parentNode) {
                floatingMessage.remove();
            }
        }, 4000);
    }

    // Sparkle effect for interactive elements
    function addSparkleEffect(element) {
        const originalTransform = element.style.transform;
        const originalBackground = element.style.background;
        
        element.style.transform = 'scale(1.05)';
        element.style.background = 'linear-gradient(135deg, #ffd700, #ff6b9d)';
        
        setTimeout(() => {
            element.style.transform = originalTransform;
            element.style.background = originalBackground;
        }, 300);
    }

    // Scroll-based animations using Intersection Observer (replaces parallax)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all sections for scroll animations
    const animatedSections = document.querySelectorAll('.message-section, .gallery-section, .quote-section, .content-section, .wishes-section, .interactive-section, .love-elements-section');
    animatedSections.forEach(section => {
        // Set initial state
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        
        scrollObserver.observe(section);
    });

    // Enhanced click effects for quote cards
    const quoteCards = document.querySelectorAll('.quote-card');
    quoteCards.forEach(card => {
        card.addEventListener('click', function() {
            const originalTransform = this.style.transform;
            this.style.transform = 'scale(0.98)';
            createFloatingMessage('💖 Love Message');
            
            setTimeout(() => {
                this.style.transform = originalTransform;
            }, 150);
        });

        // Keyboard support
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Enhanced wish card interactions
    const wishCards = document.querySelectorAll('.wish-card');
    wishCards.forEach(card => {
        card.addEventListener('click', function() {
            createFloatingMessage('✨ Birthday Wish');
            addSparkleEffect(this);
        });

        // Keyboard support
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Birthday cake interaction
    const birthdayCake = document.querySelector('.birthday-cake');
    if (birthdayCake) {
        let isAnimating = false;
        
        function animateCake() {
            if (isAnimating) return;
            
            isAnimating = true;
            birthdayCake.style.animation = 'bounce 0.6s ease-in-out 3';
            createFloatingMessage('🎂 Happy Birthday!');
            
            setTimeout(() => {
                isAnimating = false;
                birthdayCake.style.animation = 'bounce 3s ease-in-out infinite';
            }, 1800);
        }

        birthdayCake.addEventListener('click', animateCake);
        birthdayCake.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                animateCake();
            }
        });
    }

    // Keyboard navigation for gallery modal
    document.addEventListener('keydown', function(e) {
        if (imageGalleryModal && imageGalleryModal.style.display === 'block') {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    prevImage();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    nextImage();
                    break;
                case 'Escape':
                    e.preventDefault();
                    closeGallery();
                    break;
            }
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Auto-generate floating love messages
    const autoMessages = [
        '💕 I Love You',
        '🌹 Forever Yours',
        '✨ You\'re Amazing',
        '💖 My Heart',
        '🎂 Happy Birthday',
        '💝 Special Day',
        '🌟 Beautiful Soul',
        '💫 My Everything',
        '🎈 Celebrate You',
        '💗 Endless Love'
    ];

    function generateAutoMessage() {
        const randomMessage = autoMessages[Math.floor(Math.random() * autoMessages.length)];
        createFloatingMessage(randomMessage);
    }

    // Generate auto messages every 10 seconds
    setInterval(generateAutoMessage, 10000);

    // Generate random floating hearts
    function createRandomHeart() {
        const hearts = ['❤️', '💕', '💖', '💗', '💝'];
        const heart = document.createElement('div');
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.cssText = `
            position: fixed;
            font-size: ${Math.random() * 15 + 10}px;
            left: ${Math.random() * 100}vw;
            top: 100vh;
            pointer-events: none;
            z-index: 1;
            animation: float 8s ease-in-out forwards;
            opacity: 0.4;
        `;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove();
            }
        }, 8000);
    }

    // Generate random hearts every 4 seconds
    setInterval(createRandomHeart, 4000);

    // Typing effect for main title
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        const originalText = mainTitle.textContent;
        mainTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                mainTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 150);
            }
        }
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }

    // Page load animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 1s ease-in-out';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Performance optimization: Debounced resize handler
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Handle any resize-specific logic here
            console.log('Window resized');
        }, 250);
    });

    // Accessibility: Focus trap for modal
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        element.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        lastFocusable.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        firstFocusable.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }

    // Apply focus trap to modal
    if (imageGalleryModal) {
        trapFocus(imageGalleryModal);
    }

    // Initialize first auto message after page load
    setTimeout(generateAutoMessage, 3000);

    console.log('🎉 Enhanced Birthday Website Loaded Successfully! ❤️');
    console.log('✨ All overlapping issues have been resolved with improved layout and animations.');
});

