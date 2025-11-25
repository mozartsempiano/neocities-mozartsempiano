export function toggleCrt() {
  function init() {
    if (!document.getElementById("crt-style")) {
      const style = document.createElement("style");
      style.id = "crt-style";
      style.innerHTML = `
        .crt.grain, .crt-textshadow { /* estilos CRT */ }
        /* ... restante do CSS CRT ... */
      `;
      document.head.appendChild(style);
    }

    function getComputedAnim() {
      return document.body.style.animation || getComputedStyle(document.body).animation || "";
    }

    function adicionarAnimacao(animFull) {
      const matches = animFull.match(/\b[a-zA-Z_][\w-]*\b/g) || [];
      const animName = matches.length ? matches[0] : animFull;
      const atualRaw = getComputedAnim();
      const parts = atualRaw
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s && !new RegExp("\\b" + animName + "\\b").test(s));
      parts.push(animFull);
      document.body.style.animation = parts.join(", ");
    }

    function removerAnimacao(animNameOrFull) {
      const nameMatch = (animNameOrFull.match(/\b[a-zA-Z_][\w-]*\b/g) || []).pop();
      const animName = nameMatch || animNameOrFull;
      const atualRaw = document.body.style.animation || "";
      if (!atualRaw || atualRaw === "none") return;
      const novo = atualRaw
        .split(",")
        .map((a) => a.trim())
        .filter((a) => !new RegExp("\\b" + animName + "\\b").test(a))
        .join(", ");
      document.body.style.animation = novo;
    }

    function criarElementosCRT() {
      if (!document.querySelector(".crt-grain")) {
        const grain = document.createElement("div");
        grain.className = "crt-grain";
        document.body.appendChild(grain);
      }
    }

    function ativarCRT() {
      document.body.classList.add("crt");
      adicionarAnimacao("textShadow 2s infinite");
      criarElementosCRT();
    }

    function desativarCRT() {
      document.body.classList.remove("crt", "crt-textshadow");
      removerAnimacao("textShadow");
      const grain = document.querySelector(".crt-grain");
      if (grain) grain.remove();
    }

    // Aplica estado inicial do localStorage
    const switchLigado = localStorage.getItem("switchCRT") === "true";
    if (switchLigado) requestAnimationFrame(() => requestAnimationFrame(ativarCRT));
    else desativarCRT();

    // função pública para o painel
    window.toggleCRTState = (ligado) => {
      if (ligado) ativarCRT();
      else desativarCRT();
      localStorage.setItem("switchCRT", ligado);
    };
  }

  if (document.readyState === "loading") window.addEventListener("DOMContentLoaded", init);
  else init();
}
