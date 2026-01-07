export function toggleCrt() {
  function init() {
    // Aplica estado inicial do localStorage
    const switchLigado = localStorage.getItem("switchCRT") === "true";
    if (switchLigado) {
      document.body.classList.add("crt");
    }

    // função pública para o painel
    window.toggleCRTState = (ligado) => {
      if (ligado) {
        document.body.classList.add("crt");
      } else {
        document.body.classList.remove("crt");
      }
      localStorage.setItem("switchCRT", ligado);
    };
  }

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
}
