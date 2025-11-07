document.addEventListener("DOMContentLoaded", () => {
    const formAtividade = document.getElementById("formAtividade");
    const observacao = document.getElementById("observacao");
    const btnSalvar = document.getElementById("btnSalvar");
    const btnVerRegistros = document.getElementById("btnVerRegistros");
    const btnVoltarLogin = document.getElementById("btnVoltarLogin");
    const tabelaRegistros = document.querySelector("#tabelaRegistros tbody");
    const areaRegistros = document.getElementById("registros");
  
    const STORAGE_KEY = "torno8_registros";
  
    // Função para obter registros salvos
    const obterRegistros = () => {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    };
  
    // Função para salvar novo registro
    const salvarRegistro = () => {
      const tipo = document.getElementById("tipo").value;
      const oleo = document.getElementById("oleo").value;
      const condicao = document.getElementById("condicao").value;
      const obs = observacao.value;
  
      if (!tipo || !condicao) {
        alert("Preencha todos os campos obrigatórios!");
        return;
      }
  
      const novo = {
        data: new Date().toLocaleString(),
        tipo,
        oleo,
        condicao,
        observacao: obs || ""
      };
  
      const registros = obterRegistros();
      registros.push(novo);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(registros));
  
      alert("Registro salvo com sucesso!");
      formAtividade.reset();
      observacao.value = "";
    };
  
    // Função para exibir registros na tabela
    const exibirRegistros = () => {
      const registros = obterRegistros();
      tabelaRegistros.innerHTML = "";
  
      if (registros.length === 0) {
        tabelaRegistros.innerHTML = "<tr><td colspan='5'>Nenhum registro encontrado.</td></tr>";
      } else {
        registros.forEach(r => {
          const row = `
            <tr>
              <td>${r.data}</td>
              <td>${r.tipo}</td>
              <td>${r.oleo}</td>
              <td>${r.condicao}</td>
              <td>${r.observacao}</td>
            </tr>
          `;
          tabelaRegistros.insertAdjacentHTML("beforeend", row);
        });
      }
  
      areaRegistros.style.display = "block";
    };
  
    // Eventos
    btnSalvar.addEventListener("click", salvarRegistro);
    btnVerRegistros.addEventListener("click", exibirRegistros);
    btnVoltarLogin.addEventListener("click", () => {
      window.location.href = "torno8.html";
    });
  });
  