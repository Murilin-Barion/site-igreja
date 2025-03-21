async function fetchLiturgia() {
    try {
        const response = await fetch('https://liturgia.up.railway.app');
        const data = await response.json();

        // Monta o HTML
        let html = `
            <div class="section">
                <p>${data.data}</p>
                <p>${data.liturgia}</p>
                <p><strong>Cor Litúrgica:</strong> ${data.cor}</p>
            </div>

            <div class="section youtube-button">
                <a href="https://www.youtube.com/@dommoacirsilva5416/videos" target="_blank">
                    <h3>Canal Dom Moacir Silva - YouTube</h3>
                    <p>Assista a homilia do dia</p>
                </a>
            </div>


            <div class="section">
                <h2>Oração do Dia</h2>
                <pre>${data.dia}</pre>
            </div>

            <div class="section">
                <h2>Oferendas</h2>
                <pre>${data.oferendas}</pre>
            </div>

            <div class="section">
                <h2>Comunhão</h2>
                <pre>${data.comunhao}</pre>
            </div>

            <div class="section">
                <h2>Primeira Leitura</h2>
                <p><strong>${data.primeiraLeitura.referencia}</strong></p>
                <pre><b><em>${data.primeiraLeitura.titulo}</em></b> - ${data.primeiraLeitura.texto}</pre>
            </div>

            <div class="section">
                <h2>Segunda Leitura</h2>
                ${data.segundaLeitura === "Não há segunda leitura hoje!" 
                    ? `<pre>Não há segunda leitura hoje!</pre>` 
                    : `
                    <p><strong>${data.segundaLeitura.referencia}</strong></p>
                    <pre><b><em>${data.segundaLeitura.titulo}</em></b> - ${data.segundaLeitura.texto}</pre>`
                }
            </div>

            <div class="section">
                <h2>Salmo Responsorial</h2>
                <p><strong>${data.salmo.referencia}</strong></p>
                <p><em>${data.salmo.refrao}</em></p>
                <pre>${data.salmo.texto}</pre>
            </div>

            <div class="section">
                <h2>Evangelho</h2>
                <p><strong>${data.evangelho.referencia}</strong></p>
                <p><em>${data.evangelho.titulo}</em></p>
                <pre>${data.evangelho.texto}</pre>
            </div>

            <div class="section">
                <h2>Antífonas</h2>
                <p><strong>Entrada:</strong> ${data.antifonas.entrada}</p>
                <p><strong>Comunhão:</strong> ${data.antifonas.comunhao}</p>
            </div>
        `;

        document.getElementById("liturgia").innerHTML = html;

    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
        document.getElementById("liturgia").innerHTML = "<p>Erro ao carregar a liturgia.</p>";
    }
}

fetchLiturgia();