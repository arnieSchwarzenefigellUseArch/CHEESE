document.addEventListener('DOMContentLoaded', function() {
    
    // Эффект печатной машинки для заголовка
    const mainTitle = document.querySelector('h1');
    if (mainTitle) {
        const text = mainTitle.textContent;
        mainTitle.textContent = '';
        mainTitle.style.borderRight = '3px solid #d4af37';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                mainTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    mainTitle.style.borderRight = 'none';
                }, 1500);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
    
    // Плавное появление параграфов
    document.querySelectorAll('p, h2, h3').forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 800 + (index * 150));
    });
    

});
