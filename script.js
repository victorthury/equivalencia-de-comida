// Dados (poderiam ser carregados via JSON externo futuramente)
const data = {
  type: "success",
  groups: [
    "Frutas",
    "Gordura Vegetal",
    "Carboidratos",
    "Proteína",
    "Laticíneos",
  ],
  foods: {
    Frutas: [
      { text: "Abacate", quantity: 96 },
      { text: "Abacaxi", quantity: 48 },
      { text: "Acerola", quantity: 33 },
      { text: "Ameixa", quantity: 52 },
      { text: "Amora", quantity: 43 },
      { text: "Banana", quantity: 91 },
      { text: "Bergamota-Tangerina", quantity: 58 },
      { text: "Caju", quantity: 43 },
      { text: "Caqui", quantity: 71 },
      { text: "Carambola", quantity: 31 },
      { text: "Damasco", quantity: 48 },
      { text: "Figo", quantity: 41 },
      { text: "Framboesa", quantity: 53 },
      { text: "Goiaba", quantity: 54 },
      { text: "Jabuticaba", quantity: 58 },
      { text: "Kiwi", quantity: 51 },
      { text: "Laranja", quantity: 37 },
      { text: "Mamão", quantity: 45 },
      { text: "Manga", quantity: 72 },
      { text: "Maracujá", quantity: 107 },
      { text: "Maçã", quantity: 55 },
      { text: "Melancia", quantity: 32 },
      { text: "Melão", quantity: 29 },
      { text: "Mirtilo", quantity: 57 },
      { text: "Morango", quantity: 30 },
      { text: "Physalis", quantity: 49 },
      { text: "Pitaya", quantity: 51 },
      { text: "Pêra", quantity: 60 },
      { text: "Pêssego", quantity: 36 },
      { text: "Tâmara", quantity: 282 },
      { text: "Uva", quantity: 49 },
    ],
    "Gordura Vegetal": [
      { text: "Abacate", quantity: 96 },
      { text: "Amendoim", quantity: 544 },
      { text: "Amêndoas", quantity: 575 },
      { text: "Castanha Do Pará", quantity: 643 },
      { text: "Nozes", quantity: 620 },
      { text: "Óleos vegetais", quantity: 884 },
    ],
    Carboidratos: [
      { text: "Abóbora Cabotian", quantity: 55 },
      { text: "Amido de Milho", quantity: 340 },
      { text: "Arroz branco ou integral", quantity: 125 },
      { text: "Aveia", quantity: 394 },
      { text: "Batata Baroa (Mandioquinha)", quantity: 80 },
      { text: "Batata Doce", quantity: 77 },
      { text: "Batata Inglesa", quantity: 52 },
      { text: "Cuscuz (desidratado)", quantity: 376 },
      { text: "Doce de Leite", quantity: 315 },
      { text: "Farinha de Mandioca", quantity: 365 },
      { text: "Feijão", quantity: 78 },
      { text: "Grão de Bico", quantity: 164 },
      { text: "Leite Condensado", quantity: 321 },
      { text: "Lentilha", quantity: 116 },
      { text: "Macarrão", quantity: 125 },
      { text: "Mandioca", quantity: 125 },
      { text: "Mel", quantity: 304 },
      { text: "Milho", quantity: 160 },
      { text: "Palmito", quantity: 115 },
      { text: "Pinhão", quantity: 160 },
      { text: "Pipoca", quantity: 377 },
      { text: "Polenta", quantity: 187 },
      { text: "Polpa de Açaí", quantity: 64 },
      { text: "Pão", quantity: 294 },
      { text: "Suco de uva integral", quantity: 60 },
      { text: "Tapioca", quantity: 340 },
      { text: "Água de Coco", quantity: 21 },
    ],
    Proteína: [
      { text: "Albumina", quantity: 329 },
      { text: "Atum em água e sal", quantity: 165 },
      { text: "Atum Light", quantity: 67 },
      { text: "Camarão Cozido ou Assado", quantity: 90 },
      { text: "Carne vermelha magra", quantity: 193 },
      { text: "Clara de Ovo", quantity: 59 },
      { text: "Filé de frango", quantity: 162 },
      { text: "Fígado Bovino", quantity: 225 },
      { text: "Lombo Suíno", quantity: 210 },
      { text: "Ovo Inteiro", quantity: 122 },
      { text: "Peixe de Água Doce", quantity: 121 },
      { text: "Salmão Sem Pele", quantity: 242 },
      { text: "Soja Texturizada Crua", quantity: 336 },
      { text: "Tofu Cru", quantity: 80 },
      { text: "Whey Protein", quantity: 319 },
    ],
    Laticíneos: [
      { text: "Iogurte 2 Ingredientes Nestlé Desnatado", quantity: 35 },
      { text: "Iogurte 2 Ingredientes Nestlé Integral", quantity: 74 },
      { text: "Iogurte Batavo Grego Zero 10+ Pedaços", quantity: 60 },
      { text: "Iogurte Grego Vigor Zero", quantity: 54 },
      { text: "Leite Desnatado", quantity: 33 },
      { text: "Leite em pó Desnatado", quantity: 345 },
      { text: "Leite em pó Integral", quantity: 496 },
      { text: "Leite Integral", quantity: 56 },
      { text: "Leite Semidesnatado", quantity: 48 },
      { text: "Queijo Cottage", quantity: 98 },
      { text: "Queijo Minas Frescal", quantity: 264 },
      { text: "Queijo Minas Meia Cura", quantity: 320 },
      { text: "Queijo Quark", quantity: 81 },
      { text: "Queijo Ricota", quantity: 139 },
      { text: "Queijos Amarelos", quantity: 359 },
      { text: "Requeijão Light", quantity: 182 },
    ],
  },
};

// Elementos
const form = document.querySelector("form");
const grupoSelect = document.getElementById("grupo");
const alimentoSelect = document.getElementById("alimento");
const btnCalcular = document.getElementById("btnCalcular");
const resultadoLista = document.getElementById("resultado");
const quantidadeInput = document.getElementById("quantidade");

// Inicializa
preencherGrupos();
atualizarAlimentos();

// Funções
function preencherGrupos() {
  grupoSelect.innerHTML = "";
  data.groups.forEach((grupo) => {
    const opt = document.createElement("option");
    opt.value = grupo;
    opt.textContent = grupo;
    grupoSelect.appendChild(opt);
  });
}

function atualizarAlimentos() {
  alimentoSelect.innerHTML = "";
  const grupo = grupoSelect.value;
  if (!grupo || !data.foods[grupo]) return;

  data.foods[grupo].forEach((item) => {
    const opt = document.createElement("option");
    opt.value = item.text;
    opt.textContent = item.text;
    alimentoSelect.appendChild(opt);
  });
}

function calcular() {
  const grupo = grupoSelect.value;
  const alimentoNome = alimentoSelect.value;
  const qtd = parseFloat(document.getElementById("quantidade").value);

  resultadoLista.innerHTML = "";

  const alimentoBase = data.foods[grupo].find((f) => f.text === alimentoNome);
  if (!alimentoBase) return;

  data.foods[grupo].forEach((item) => {
    if (item.text !== alimentoBase.text) {
      const equivalente = Math.round(
        (qtd * alimentoBase.quantity) / item.quantity
      );
      const tr = document.createElement("tr");

      const tdAlimento = document.createElement("td");
      tdAlimento.textContent = item.text;

      const tdQuantidade = document.createElement("td");
      tdQuantidade.textContent = `${equivalente} g`;

      tr.appendChild(tdAlimento);
      tr.appendChild(tdQuantidade);
      resultadoLista.appendChild(tr);
    }
  });
}

// Eventos
grupoSelect.addEventListener("change", atualizarAlimentos);
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Impede reload
  if (!form.checkValidity()) {
    form.reportValidity(); // Mostra mensagem padrão do navegador
    return;
  }

  calcular();
});
