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
      { text: "Tucumã (polpa crua)", quantity: 262 },
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
      { text: "Banana cozida caramelada", quantity: 181 },
      { text: "Banana cozida com manteiga e açúcar", quantity: 156 },
      { text: "Batata Baroa (Mandioquinha)", quantity: 80 },
      { text: "Batata Doce", quantity: 77 },
      { text: "Batata Inglesa", quantity: 52 },
      { text: "Cará cozido (com óleo de soja e sal)", quantity: 118 },
      { text: "Cará cozido (sem óleo, com sal)", quantity: 77 },
      { text: "Cuscuz (desidratado)", quantity: 376 },
      { text: "Doce de Leite", quantity: 315 },
      { text: "Farinha de Mandioca", quantity: 365 },
      { text: "Farofa de mandioca temperada", quantity: 406 },
      { text: "Feijão", quantity: 78 },
      { text: "Grão de Bico", quantity: 164 },
      { text: "Inhame cru", quantity: 97 },
      { text: "Leite Condensado", quantity: 321 },
      { text: "Lentilha", quantity: 116 },
      { text: "Macarrão", quantity: 125 },
      { text: "Macaxeira cozida", quantity: 125 },
      { text: "Macaxeira crua", quantity: 151 },
      { text: "Macaxeira frita", quantity: 300 },
      { text: "Mandioca", quantity: 125 },
      { text: "Mel", quantity: 304 },
      { text: "Milho", quantity: 160 },
      { text: "Palmito", quantity: 115 },
      { text: "Palmito de pupunha (conserva)", quantity: 29 },
      { text: "Pinhão", quantity: 160 },
      { text: "Pipoca", quantity: 377 },
      { text: "Polenta", quantity: 187 },
      { text: "Polpa de Açaí", quantity: 68 },
      { text: "Pupunha (fruto cozido)", quantity: 212 },
      { text: "Purê de batata inglesa (leite integral e manteiga)", quantity: 87 },
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
const alimentoInput = document.getElementById("alimentoInput");
const alimentoDropdown = document.getElementById("alimentoDropdown");
const btnToggleAlimentoDropdown = document.getElementById("btnToggleAlimentoDropdown");
const alimentoHidden = document.getElementById("alimento");
const btnCalcular = document.getElementById("btnCalcular");
const resultadoLista = document.getElementById("resultado");
const quantidadeInput = document.getElementById("quantidade");
const filtroInput = document.getElementById("filtroAlimento");
const semResultados = document.getElementById("semResultados");

let listaEquivalentes = [];
let activeDropdownIndex = -1;

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

// Dropdown pesquisável de alimentos
function abrirDropdown() {
  filtrarDropdown(alimentoInput.value.trim());
  alimentoDropdown.classList.add("show");
}

function fecharDropdown() {
  alimentoDropdown.classList.remove("show");
  activeDropdownIndex = -1;
}

function selecionarAlimento(item) {
  alimentoInput.value = item.text;
  alimentoHidden.value = item.text;
  alimentoInput.setCustomValidity("");
  fecharDropdown();
}

function filtrarDropdown(termo = "") {
  alimentoDropdown.innerHTML = "";
  const termoNorm = normalizarTexto(termo);
  const grupo = grupoSelect.value;
  const alimentos = obterAlimentos(grupo);

  const filtrados = alimentos.filter((item) =>
    normalizarTexto(item.text).includes(termoNorm)
  );

  activeDropdownIndex = -1;

  if (filtrados.length === 0) {
    const vazio = document.createElement("div");
    vazio.className = "dropdown-item text-muted disabled py-2";
    vazio.textContent = "Nenhum alimento encontrado";
    alimentoDropdown.appendChild(vazio);
    return;
  }

  const isTodos = grupo === "Todos";

  filtrados.forEach((item) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "dropdown-item d-flex justify-content-between align-items-center py-2 text-wrap";

    if (isTodos && item.group) {
      btn.innerHTML = `<span>${item.text}</span> <span class="badge bg-secondary-subtle text-secondary-emphasis border ms-2">${item.group}</span>`;
    } else {
      btn.textContent = item.text;
    }

    btn.addEventListener("mousedown", (e) => {
      e.preventDefault();
      selecionarAlimento(item);
    });

    alimentoDropdown.appendChild(btn);
  });
}

function atualizarItemAtivo(items) {
  items.forEach((item, idx) => {
    if (idx === activeDropdownIndex) {
      item.classList.add("active");
      item.scrollIntoView({ block: "nearest" });
    } else {
      item.classList.remove("active");
    }
  });
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
  alimentoInput.value = "";
  alimentoHidden.value = "";
  alimentoInput.setCustomValidity("");
  fecharDropdown();
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
  const alimentoNome = alimentoHidden.value || alimentoInput.value.trim();
  const qtd = parseFloat(quantidadeInput.value);

  const alimentos = obterAlimentos(grupo);
  const alimentoBase = alimentos.find(
    (f) => normalizarTexto(f.text) === normalizarTexto(alimentoNome)
  );
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

// Eventos do Dropdown de Alimentos
alimentoInput.addEventListener("input", () => {
  const termo = alimentoInput.value.trim();
  alimentoDropdown.classList.add("show");
  filtrarDropdown(termo);

  const grupo = grupoSelect.value;
  const alimentos = obterAlimentos(grupo);
  const match = alimentos.find(
    (f) => normalizarTexto(f.text) === normalizarTexto(termo)
  );

  if (match) {
    alimentoHidden.value = match.text;
    alimentoInput.setCustomValidity("");
  } else {
    alimentoHidden.value = "";
    alimentoInput.setCustomValidity("Selecione um alimento da lista.");
  }
});

alimentoInput.addEventListener("focus", () => {
  abrirDropdown();
});

alimentoInput.addEventListener("click", () => {
  abrirDropdown();
});

alimentoInput.addEventListener("keydown", (e) => {
  const items = alimentoDropdown.querySelectorAll("button.dropdown-item");
  if (!alimentoDropdown.classList.contains("show") || items.length === 0) {
    if (e.key === "ArrowDown") {
      abrirDropdown();
    }
    return;
  }

  if (e.key === "ArrowDown") {
    e.preventDefault();
    activeDropdownIndex = (activeDropdownIndex + 1) % items.length;
    atualizarItemAtivo(items);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    activeDropdownIndex = (activeDropdownIndex - 1 + items.length) % items.length;
    atualizarItemAtivo(items);
  } else if (e.key === "Enter") {
    if (activeDropdownIndex >= 0 && activeDropdownIndex < items.length) {
      e.preventDefault();
      items[activeDropdownIndex].dispatchEvent(new MouseEvent("mousedown"));
    }
  } else if (e.key === "Escape") {
    fecharDropdown();
  }
});

if (btnToggleAlimentoDropdown) {
  btnToggleAlimentoDropdown.addEventListener("click", (e) => {
    e.preventDefault();
    if (alimentoDropdown.classList.contains("show")) {
      fecharDropdown();
    } else {
      alimentoInput.focus();
      abrirDropdown();
    }
  });
}

document.addEventListener("click", (e) => {
  const container = document.getElementById("alimentoContainer");
  if (container && !container.contains(e.target)) {
    fecharDropdown();
  }
});

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

  const grupo = grupoSelect.value;
  const alimentos = obterAlimentos(grupo);
  const alimentoNome = alimentoHidden.value || alimentoInput.value.trim();
  const match = alimentos.find(
    (f) => normalizarTexto(f.text) === normalizarTexto(alimentoNome)
  );

  if (!match) {
    alimentoInput.setCustomValidity("Selecione um alimento válido da lista.");
    alimentoInput.reportValidity();
    return;
  }

  alimentoHidden.value = match.text;
  alimentoInput.value = match.text;
  alimentoInput.setCustomValidity("");

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  calcular();
});
