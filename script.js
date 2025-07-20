let slideIndex = 0; // Inicia no primeiro slide (índice 0)
const slides = document.querySelectorAll('.slider img'); // Seleciona todas as imagens do slider
const dots = document.querySelectorAll('.dot'); // Seleciona todos os pontos de navegação
const totalSlides = slides.length; // Número total de slides
let slideInterval; // Variável para armazenar o intervalo do slider

// Função para exibir um slide específico
function showSlides(n) {
    // Garante que o índice esteja dentro dos limites
    if (n >= totalSlides) { slideIndex = 0; }
    if (n < 0) { slideIndex = totalSlides - 1; }

    // Oculta todas as imagens
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`; // Move as imagens
    });

    // Remove a classe 'active' de todos os pontos
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Adiciona a classe 'active' ao ponto do slide atual
    dots[slideIndex].classList.add('active');
}

// Função para avançar para o próximo slide
function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

// Função para navegar para um slide específico pelos pontos
function currentSlide(n) {
    slideIndex = n - 1; // Ajusta para o índice baseado em 0
    showSlides(slideIndex);
    resetInterval(); // Reinicia o intervalo ao clicar em um ponto
}

// Função para iniciar o slider automático
function startSlider() {
    slideInterval = setInterval(nextSlide, 5000); // Muda a cada 5 segundos (5000ms)
}

// Função para reiniciar o intervalo do slider
function resetInterval() {
    clearInterval(slideInterval); // Limpa o intervalo atual
    startSlider(); // Inicia um novo intervalo
}

// Inicializa o slider
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex); // Exibe o primeiro slide ao carregar a página
    startSlider(); // Inicia o slider automático
});