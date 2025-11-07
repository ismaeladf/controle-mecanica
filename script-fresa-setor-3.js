// script-torno-setor-1.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form-login");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const usuario = document.querySelector("#usuario").value.trim();
        const senha = document.querySelector("#senha").value.trim();
        const perfil = document.querySelector("#perfil").value;
        const tornoNumero = form.getAttribute("data-fresa");

        if (!usuario || !senha || !perfil) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // 🔐 Exemplo simples de autenticação (pode ser adaptado para validação real)
        const loginsPermitidos = {
            professor: { user: "professor", pass: "1234" },
            aluno: { user: "aluno", pass: "abcd" },
            terceiros: { user: "terceiro", pass: "0000" }
        };

        const credencial = loginsPermitidos[perfil];

        if (credencial && usuario === credencial.user && senha === credencial.pass) {
            alert(`Bem-vindo, ${usuario}!`);
            window.location.href = `fresa${tornoNumero}-dashboard.html`;
        } else {
            alert("Usuário, senha ou perfil incorretos!");
        }
    });
});
