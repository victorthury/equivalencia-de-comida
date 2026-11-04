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
      { text: "Acém", quantity: 220 },
      { text: "Albumina", quantity: 329 },
      { text: "Alcatra", quantity: 220 },
      { text: "Atum Light", quantity: 67 },
      { text: "Atum em água e sal", quantity: 165 },
      { text: "Bacon magro", quantity: 330 },
      { text: "Camarão Cozido ou Assado", quantity: 90 },
      { text: "Carne vermelha magra", quantity: 193 },
      { text: "Clara de Ovo", quantity: 59 },
      { text: "Contra-filé", quantity: 250 },
      { text: "Copa lombo", quantity: 250 },
      { text: "Costelinha", quantity: 290 },
      { text: "Coxão duro", quantity: 190 },
      { text: "Coxão mole", quantity: 210 },
      { text: "Coxa + Sobrecoxa (com pele)", quantity: 230 },
      { text: "Coxa de frango (sem pele)", quantity: 185 },
      { text: "Filé mignon", quantity: 195 },
      { text: "Filé de frango", quantity: 162 },
      { text: "Filé suíno", quantity: 185 },
      { text: "Fígado Bovino", quantity: 225 },
      { text: "Fraldinha", quantity: 230 },
      { text: "Lombo Suíno", quantity: 190 },
      { text: "Músculo", quantity: 180 },
      { text: "Ovo Inteiro", quantity: 122 },
      { text: "Patinho", quantity: 170 },
      { text: "Peito de frango (sem pele)", quantity: 165 },
      { text: "Peixe de Água Doce", quantity: 121 },
      { text: "Pernil sem capa", quantity: 210 },
      { text: "Picanha (sem gordura)", quantity: 240 },
      { text: "Salmão Sem Pele", quantity: 242 },
      { text: "Sobrecoxa de frango (sem pele)", quantity: 195 },
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
const filtroInput = document.getElementById("filtroAlimento");
const semResultados = document.getElementById("semResultados");

let listaEquivalentes = [];

// Inicializa
preencherGrupos();
atualizarAlimentos();

// Normalização para busca (ignora acentos e maiúsculas/minúsculas)
function normalizarTexto(str) {
  return (str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// Retorna os alimentos de um grupo específico ou de todos os grupos
function obterAlimentos(grupo) {
  if (grupo === "Todos") {
    const mapa = new Map();
    data.groups.forEach((g) => {
      (data.foods[g] || []).forEach((item) => {
        if (!mapa.has(item.text)) {
          mapa.set(item.text, { text: item.text, quantity: item.quantity, group: g });
        }
      });
    });
    return Array.from(mapa.values()).sort((a, b) =>
      a.text.localeCompare(b.text, "pt-BR")
    );
  }

  return (data.foods[grupo] || []).map((item) => ({
    ...item,
    group: grupo,
  }));
}

// Funções
function preencherGrupos() {
  grupoSelect.innerHTML = "";

  const grupos = ["Todos", ...data.groups];
  grupos.forEach((grupo) => {
    const opt = document.createElement("option");
    opt.value = grupo;
    opt.textContent = grupo;
    grupoSelect.appendChild(opt);
  });
}

function atualizarAlimentos() {
  alimentoSelect.innerHTML = "";
  const grupo = grupoSelect.value;
  const alimentos = obterAlimentos(grupo);

  alimentos.forEach((item) => {
    const opt = document.createElement("option");
    opt.value = item.text;
    opt.textContent = grupo === "Todos" ? `${item.text} (${item.group})` : item.text;
    alimentoSelect.appendChild(opt);
  });
}

function renderizarTabela() {
  resultadoLista.innerHTML = "";
  const termo = normalizarTexto(filtroInput ? filtroInput.value.trim() : "");
  const filtrados = listaEquivalentes.filter((item) =>
    normalizarTexto(item.text).includes(termo)
  );

  if (filtrados.length === 0) {
    if (semResultados) semResultados.classList.remove("d-none");
  } else {
    if (semResultados) semResultados.classList.add("d-none");
    const isTodos = grupoSelect.value === "Todos";

    filtrados.forEach((item) => {
      const tr = document.createElement("tr");

      const tdAlimento = document.createElement("td");
      if (isTodos && item.group) {
        tdAlimento.innerHTML = `${item.text} <span class="badge bg-secondary-subtle text-secondary-emphasis border ms-1">${item.group}</span>`;
      } else {
        tdAlimento.textContent = item.text;
      }

      const tdQuantidade = document.createElement("td");
      tdQuantidade.textContent = `${item.quantidade} g`;

      tr.appendChild(tdAlimento);
      tr.appendChild(tdQuantidade);
      resultadoLista.appendChild(tr);
    });
  }
}

function calcular() {
  const grupo = grupoSelect.value;
  const alimentoNome = alimentoSelect.value;
  const qtd = parseFloat(quantidadeInput.value);

  const alimentos = obterAlimentos(grupo);
  const alimentoBase = alimentos.find((f) => f.text === alimentoNome);
  if (!alimentoBase) return;

  listaEquivalentes = alimentos
    .filter((item) => item.text !== alimentoBase.text)
    .map((item) => {
      const equivalente = Math.round(
        (qtd * alimentoBase.quantity) / item.quantity
      );
      return {
        text: item.text,
        group: item.group,
        quantidade: equivalente,
      };
    });

  if (filtroInput) {
    filtroInput.disabled = false;
  }

  renderizarTabela();
}

// Eventos
grupoSelect.addEventListener("change", () => {
  atualizarAlimentos();
  resultadoLista.innerHTML = "";
  listaEquivalentes = [];
  if (filtroInput) {
    filtroInput.value = "";
    filtroInput.disabled = true;
  }
  if (semResultados) {
    semResultados.classList.add("d-none");
  }
});

if (filtroInput) {
  filtroInput.addEventListener("input", renderizarTabela);
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Impede reload
  if (!form.checkValidity()) {
    form.reportValidity(); // Mostra mensagem padrão do navegador
    return;
  }

  calcular();
});
