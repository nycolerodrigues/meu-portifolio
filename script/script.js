// Seleciona o ícone do menu e a barra de navegação
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Seleciona todas as seções e os links de navegação
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Função executada quando a janela é rolada
window.onscroll = () => {
    // Atualiza o estado do link de navegação quando a seção está visível
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove a classe 'active' de todos os links de navegação
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Adiciona a classe 'active' ao link correspondente à seção atual
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });
};

// Função executada quando o ícone do menu é clicado
menuIcon.onclick = () => {
    // Alterna a classe 'bx-x' no ícone do menu e a classe 'active' na barra de navegação
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

