import { setupViewportAnimations } from "/assets/js/viewport-animations.js";

export function carregarFooter() {
  if (window.DISABLE_CRT_TOGGLE) return;

  // Inicializa animações de scroll
  setupViewportAnimations({
    cascade: true,
    selector: ".animate-on-scroll", // seletor dos elementos que vão animar
  });

  const footer = document.querySelector("footer");

  if (footer) {
    const anoAtual = new Date().getFullYear();
    footer.innerHTML = `
      <div class="footer-conteudo animate-on-scroll" data-animate="fade-in-up">
        <div class="footer-coluna">
          <h2>
            <svg class="spin-icon" width="1em" height="1em" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="var(--clr-white)">
              <circle cx="100" cy="20" r="20" />
              <circle cx="170" cy="60" r="20" />
              <circle cx="170" cy="140" r="20" />
              <circle cx="100" cy="180" r="20" />
              <circle cx="30" cy="140" r="20" />
              <circle cx="30" cy="60" r="20" />
            </svg>
            mozartsempiano
          </h2>
          <p>Brasil, Terra — <span id="hora-brasilia"></span></p>
          <a href="/sitemap.html">Sitemap</a>
          <br><br>
          <!-- <p>while self.location != bauru.self.apt<br>self.location.freeRoaming(bauru.streets,0)</p> -->
          <p>if(self.status != online)<br>self.status.connect()</p>
        </div>
        <div class="footer-coluna">
          <h1>Tem uma ideia legal?</h1><h1 style="margin-top: 7px">Vamos conversar! d(^‿^)b</h1>
          <div class="footer-icons">
            <a href="mailto:mozartmt@protonmail.com" aria-label="E-mail" style="text-decoration: none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>
              <span>mozartmt@protonmail.com</span>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-direitos">
        <span class="fa fa-copyright"></span> 2018—${anoAtual} mozartsempiano. Hospedado em <a href="https://neocities.org/site/mozartsempiano">Neocities</a>
      </div>
      <!-- <div class="footer-fullwidth-text">
        <p>mozartsempiano</p>
      </div> -->
    `;
  }

  if (!document.getElementById("footer-style")) {
    const style = document.createElement("style");
    style.id = "footer-style";
    style.textContent = `
    #conteudo {
      padding-bottom: 46px;
    }
    
    footer::before {
      content: "";
      position: absolute;
      top: -60px;
      right: 0;
      width: 320px;
      height: 200px;
      background: inherit;
      clip-path: polygon(0 60px, 140px 0, 320px 0, 320px 320px, 0 320px);
      z-index: -1;
    }
    
    html, body {
      height: 100%;
      margin: 0;
    }

    #container {
      min-height: 100%;
      display: flex;
      flex-direction: column;
    }

    #conteudo {
      flex: 0;
    }

    footer {
      margin-top: auto;
      font-size: 0.9rem;
      width: 100%;
      padding: 24px 48px 32px 48px;
      color: var(--clr-gray-a50);
      z-index: 1;
      position: relative; /* não precisa mais absolute */
    }

    :root[data-theme="light"] footer,
    :root[data-theme="light"] footer a:link,
    :root[data-theme="light"] footer a:visited,
    :root[data-theme="light"] footer a:active,
    :root[data-theme="light"] footer .footer-direitos {
      color: var(--clr-gray-a50)
    }

    .footer-conteudo {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: flex-start;
      width: 950px;
      gap: 1.2em;
      margin: 0 auto;
      text-align: left;
    }

    footer .footer-coluna {
      flex: 1 1 auto;
    }

    footer h1,
    footer h2 {
      font-family: var(--fonte-corpo);
      color: var(--clr-white);
    }

    footer h2 {
      font-size: 1.3em;
      margin-bottom: 0.4em;
    }

    footer h1 {
      font-size: 1.6em;
      margin-bottom: 0em;
    }

    footer h1:not(:first-of-type) {
      margin-bottom: 0.8em;
    }

    footer p {
      margin: 0;
      margin-top: 6px;
    }

    footer .footer-direitos {
      margin-top: 2.7em;
      text-align: center;
      font-size: 1em;
      opacity: 1;
      color: var(--clr-gray-a40)
    }

    footer .footer-fullwidth-text {
      margin-top: 1em;
      text-align: center;
      font-size: 1em;
    }

    footer .footer-fullwidth-text p {
      font-size: 5vw;
      margin:0;
      text-align:center;
      white-space:nowrap;
    }

    footer a:link,
    footer a:visited,
    footer a:active {
      color: var(--clr-gray-a50);
      text-decoration: underline;
      transition: all 0.25s ease;
      padding: 0;
    }

    footer a:hover {
      color: var(--clr-white);
      background-color: transparent;
    }

    .footer-icons {
      display: flex;
      gap: 14px;
      margin-top: 6px;
      align-items: center;
    }

    .footer-icons a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--clr-gray-a50);
    }

    .footer-icons a svg {
      display: inline-block;
      flex-shrink: 0;
      fill: currentColor;
      width: 20px;
      height: 20px;
    }

    .spin-icon {
      display: inline-block;
      vertical-align: middle;
      animation: spin 6s linear infinite;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }

    @media (max-width: 1024px) {
        footer::before {
          /* display: none; */
          top: -30px;
          right: -90px;
          height: 30px;
          clip-path: polygon(0 60px, 140px 0, 280px 0, 280px 320px, 0 320px);
        }
    }

    @media (max-width: 770px) {
        footer {
          padding: 24px 32px;
        }
        .footer-conteudo {
          flex-direction: column;
          gap: 1em;
          max-width: 100%;
        }
        footer h1 {
          font-size: 1.2em;
          margin-bottom: 0em;
        }
    }
    `;
    document.head.appendChild(style);
  }

  function atualizarHoraBrasilia() {
    const agora = new Date().toLocaleTimeString("pt-BR", {
      timeZone: "America/Sao_Paulo",
      hour: "2-digit",
      minute: "2-digit",
    });
    const span = document.getElementById("hora-brasilia");
    if (span) {
      span.textContent = agora;
    }
  }

  setInterval(atualizarHoraBrasilia, 1000);
  atualizarHoraBrasilia();
}
