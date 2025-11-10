document.addEventListener('DOMContentLoaded', function() {
    
    // Эффект печатной машинки для заголовка
    const title = document.querySelector('h1');
    if (title) {
        const text = title.textContent;
        title.textContent = '';
        title.style.borderRight = '2px solid #d4af37';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            } else {
                setTimeout(() => {
                    title.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        setTimeout(typeWriter, 300);
    }
    
    // Плавное появление элементов
    document.querySelectorAll('h2, h3, p').forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 500 + (index * 100));
    });
    

});