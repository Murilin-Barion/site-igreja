document.addEventListener("DOMContentLoaded", function() {
    // Carrossel de informativos
    let currentInformativo = 0;
    const informativos = document.querySelectorAll('.ultimos-informativos .informativo');
    const totalInformativos = informativos.length;

    function showInformativo(index) {
        informativos.forEach((informativo, i) => {
            informativo.classList.remove('active', 'previous');
            if (i === index) {
                informativo.classList.add('active');
            } else if (i === (index - 1 + totalInformativos) % totalInformativos) {
                informativo.classList.add('previous');
            }
        });
    }

    function nextInformativo() {
        currentInformativo = (currentInformativo + 1) % totalInformativos;
        showInformativo(currentInformativo);
    }

    // Mostrar o primeiro informativo
    showInformativo(currentInformativo);

    // Alternar informativos a cada 5 segundos
    setInterval(nextInformativo, 5000);
});