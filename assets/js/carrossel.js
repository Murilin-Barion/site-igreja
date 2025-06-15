document.addEventListener("DOMContentLoaded", function () {
    fetch('./assets/data/informativos.json')
        .then(response => response.json())
        .then(data => {
            // Ordena por data (esperando formato dd/mm/yyyy)
            const informativosOrdenados = data.sort((a, b) => {
                const [d1, m1, y1] = a.data.split('/');
                const [d2, m2, y2] = b.data.split('/');
                return new Date(`${y2}-${m2}-${d2}`) - new Date(`${y1}-${m1}-${d1}`);
            });

            const ultimos4 = informativosOrdenados.slice(0, 4);
            const container = document.getElementById('ultimos-informativos-container');

            ultimos4.forEach((item, index) => {
                const div = document.createElement('div');
                div.classList.add('informativo');
                div.id = `informativo-${index + 1}`;
                div.innerHTML = `
                    <h3>${item.titulo}</h3>
                    <p>${item.conteudo.length > 250 ? item.conteudo.slice(0, 250) + '...' : item.conteudo}</p>
                    <a href="./informativos.html">Leia mais</a>
                `;
                container.appendChild(div);
            });

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

            // Inicializa o carrossel
            showInformativo(currentInformativo);
            setInterval(nextInformativo, 10000);
        })
        .catch(error => console.error("Erro ao carregar informativos da home:", error));
})