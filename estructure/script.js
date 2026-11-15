const div = document.getElementById("central");

for (let i = 0; i < 10; i++) {
    div.innerHTML += `
    
        <div class="item">

            <div class="desc">
                <h2>Nome tal</h2><br>
                <p class="quant">Quantidade: 10</p>
            </div>

            <p class="preco">Preço: R$ 10,00</p>

        </div><br><hr>

    `;
}