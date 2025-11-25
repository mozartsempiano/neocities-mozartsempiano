export function enableLightMode() {
  // Aplica estado inicial
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") document.documentElement.setAttribute("data-theme", "light");
  else document.documentElement.removeAttribute("data-theme");

  // função pública para o painel
  window.toggleLightMode = (ligado) => {
    if (ligado) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.removeItem("theme");
    }
  };
}
