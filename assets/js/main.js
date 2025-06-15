document.addEventListener("DOMContentLoaded", function() {
    fetch('./assets/html/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            initializeHamburgerMenu();
        });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('./assets/html/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});

// Função para inicializar o menu hambúrguer
function initializeHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    
    if (hamburger && menu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em um link
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
            });
        });
        
        // Fechar menu ao clicar fora dele
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
            }
        });
    }
}