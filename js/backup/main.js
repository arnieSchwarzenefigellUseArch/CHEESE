// Анимации для сайта о сырах
document.addEventListener('DOMContentLoaded', function() {
    
    // Плавное появление элементов при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Наблюдаем за всеми параграфами и заголовками
    document.querySelectorAll('main p, main h2, main h3, .cheese-fact').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Анимация для cheese-fact блоков
    document.querySelectorAll('.cheese-fact').forEach(fact => {
        fact.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
        });
        
        fact.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Эффект печатной машинки для заголовка
    const mainTitle = document.querySelector('h1');
    if (mainTitle) {
        const text = mainTitle.textContent;
        mainTitle.textContent = '';
        mainTitle.style.borderRight = '2px solid #d4af37';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                mainTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Убираем курсор после завершения
                setTimeout(() => {
                    mainTitle.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
    
    // Плавная прокрутка к якорям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // Анимация картинки сыра в header
    const cheeseImg = document.querySelector('header img');
    if (cheeseImg) {
        cheeseImg.addEventListener('click', function() {
            this.style.transform = 'rotate(360deg)';
            this.style.transition = 'transform 1s ease';
            
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 1000);
        });
    }
    

});