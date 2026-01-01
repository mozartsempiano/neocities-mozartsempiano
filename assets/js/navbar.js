export function carregarNavbar() {
  const headerHome = document.getElementById("header-expandida");
  const headerCompacta = document.getElementById("header-compacta");
  const headerMobile = document.getElementById("header-mobile");

  const navbarCSS = `#navbar,
  #navbar-compacta {
    gap: 20px;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-size: 1em;
    transition: all 0.25s ease;
    user-select: none;
  }
  #navbar {
    text-align: center;
    width: 100%;
    margin: 0 auto;
    position: relative;
    margin-bottom: 22px;
    display: flex;
    justify-content: center;
  }
  #navbar a.atual,
  #navbar-compacta a.atual {
    color: var(--clr-main-a40);
  }
  #navbar a,
  #navbar-compacta a {
    cursor: pointer !important;
  }
  a:not([href]),
  a:not([href]) {
    cursor: default;
  }
  #navbar .dropdown {
    position: relative;
    display: inline-block;
  }
  #navbar .dropdown::after,
  #navbar-compacta .dropdown::after {
    --svg: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>');
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 1em;
    height: 1em;
    -webkit-mask-image: var(--svg);
    mask-image: var(--svg);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    mask-size: contain;
    background-color: currentColor;
    pointer-events: none;
    padding-left: 6px;
  }
  #navbar .dropbtn,
  #navbar-compacta .dropbtn {
    text-decoration: none;
    color: inherit;
  }
  #navbar .dropdown-content,
  #navbar-compacta .dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--clr-black-a0);
    border: 1px solid var(--clr-gray-a10);
    max-width: 150px;
    width: max-content;
    z-index: 500;
    overflow: hidden;
    animation: dropdownAnimation ease 1s !important;
    animation-fill-mode: forwards;
    border-radius: 0 var(--b-radius) var(--b-radius) 0;
  }
  #navbar .dropdown-content a,
  #navbar-compacta .dropdown-content a {
    color: var(--clr-white);
    padding: 8px 12px;
    text-decoration: none;
    display: block;
    text-align: left;
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  #navbar .dropdown-content a:hover,
  #navbar-compacta .dropdown-content a:hover {
    background-color: var(--clr-main-a40);
    color: var(--clr-white);
  }
  #navbar .dropdown:hover .dropdown-content,
  #navbar-compacta .dropdown:hover .dropdown-content {
    display: block;
  }
  #navbar-compacta {
    display: flex;
    text-align: left;
  }

  #header-expandida {
    display: flex;
    gap: 21px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 75px;
    width: 100%;
    justify-content: left;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-bottom: 26px;
    margin-top: 495px;
    position: relative; /* establish containing block for pseudo */
  }

  #header-expandida::before {
    content: url("/assets/img/gunnm-float-v2.png");
    position: absolute;
    left: 50%;
    top: -515px;
    transform: translateX(-50%);
    pointer-events: none;
    opacity: 0.7;
    transition: opacity 0.2s ease;
    user-select: none;
    z-index: -2;
    transform-origin: center;
    animation: fragmentFloat 8s infinite ease-in-out;
    filter: var(--img-main-filter, none);
  }

  #header-compacta {
    margin-top: 24px;
    margin-bottom: 64px;
  }

  #header-expandida pre {
    margin: 0;
  }  

  #ascii-art-container {
    width: 100%;
    text-align: center;
    display: block;
    user-select: none;
    animation: flickerAnim 1s normal forwards ease-in-out;
    margin-bottom: 12px;
  }

  #header-expandida pre a:hover,
  #simple-title a:hover,
  #site-title a:hover,
  #header-mobile a:hover {
    color: var(--clr-main-a40) !important;
    /* opacity: 0.65 !important; */
    text-decoration: none !important;
  }

  /* Botão Doar no navbar */
  #header-expandida a.btn-doar:link,
  #header-expandida a.btn-doar:visited,
  #header-expandida a.btn-doar:active,
  #header-compacta a.btn-doar:link,
  #header-compacta a.btn-doar:visited,
  #header-compacta a.btn-doar:active,
  #header-mobile a.btn-doar:link,
  #header-mobile a.btn-doar:visited,
  #header-mobile a.btn-doar:active {
    color: var(--clr-main-a30);
    text-decoration: none;
  }
    
  #header-expandida a.btn-doar:hover,
  #header-compacta a.btn-doar:hover,
  #header-mobile a.btn-doar:hover,
  #header-expandida a.btn-doar:focus,
  #header-compacta a.btn-doar:focus,
  #header-mobile a.btn-doar:focus {
    color: var(--clr-main-a50);
  }

  #header-titulo-compacto,
  #title-mobile {
    font-family: var(--fonte-tituloheader);
    font-size: 1.43em;
    color: var(--clr-white);
    background: transparent;
  }

  #header-titulo-compacto {
    text-align: left;
    margin-right: 32px;
  }

  #title-mobile {
    display: none;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
  }

  #header-mobile a {
    color: var(--clr-white);
    background-color: transparent;
    text-decoration: none;
  }

  #menu-btn {
    background: none;
    border: none;
    color: var(--clr-white);
    font-size: 2.29em;
    cursor: pointer;
  }

  #menu-btn:hover {
    color: var(--clr-main-a40);
  }

  #menu-btn svg {
    width: 1.5em;
    height: 1.5em;
    fill: currentColor;
  }

  #side-menu {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    width: 80vw;
    max-width: 270px;
    height: 100vh;
    background: var(--clr-black-a0);
    color: var(--clr-white);
    box-shadow: -2px 0 12px rgba(0, 0, 0, 0.4);
    z-index: 998;
    padding: 32px 24px 24px 24px;
    flex-direction: column;
    transform: translateX(100%);
    transition: transform 0.75s cubic-bezier(0.4, 0, 0.2, 1);
    user-select: none;
    scrollbar-width: thin;
  }

  #side-menu.open ~ #side-menu-overlay,
  #side-menu-overlay.open {
    display: block;
    opacity: 1;
    pointer-events: auto;
  }

  #side-menu ul {
    list-style: none;
    padding: 0;
    margin: 0 20px;
  }

  #side-menu li {
    margin: 13px 0;
    color: var(--clr-white);
    font-size: 1.14em;
    text-decoration: none;
    transition: color 0.25s;
  }

  #close-menu {
    background: none;
    border: none;
    color: var(--clr-white);
    font-size: 2.29em;
    position: absolute;
    top: 12px;
    right: 18px;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    #ascii-art-container {
      font-size: 0.8em;
      display: none;
    }

    #side-menu.open {
      display: flex;
      transform: translateX(0);
      overflow-y: auto;
      overflow-x: hidden;
    }

    #side-menu-overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 998;
      transition: opacity 0.25s;
      opacity: 0;
      pointer-events: none;
    }

    #title-mobile {
      display: flex;
    }

    #header-expandida,
    #header-compacta {
      display: none !important;
    }
    
    #simple-title,
    #site-title {
      display: block !important;
      font-family: var(--fonte-tituloheader) !important;
      font-size: 1.71em !important;
      text-align: left !important;
      margin: 0 0 16px 0 !important;
      letter-spacing: 0;
    }
  }
  `;

  function injectNavbarCSS() {
    if (!document.getElementById("navbar-style")) {
      const style = document.createElement("style");
      style.id = "navbar-style";
      style.textContent = navbarCSS;
      document.head.appendChild(style);
    }
  }
  injectNavbarCSS();
  const links = {
    sobre: { label: "Sobre", href: "/sobre.html" },
    portfolio: {
      label: "Portfólio",
      href: "/portfolio/index.html",
      children: [
        { label: "Design", href: "/portfolio/design/index.html" },
        { label: "Arte", href: "/portfolio/arte/index.html" },
        { label: "Fotografia", href: "/portfolio/fotografia/index.html" },
      ],
    },
    /*projetos: {
			label: "Projetos",
			children: [
				{ label: "AkatsukiGames", href: "/akatsukigames.html" },
				{ label: "Lyrics Card Maker", href: "/lyrics-maker.html" },
				{ label: "mplace", href: "/mplace/index.html" },
			],
		},*/
    outros: {
      label: "Outros",
      children: [
        { label: "Pensamentos", href: "/pensamentos/index.html" },
        { label: "Sonhos", href: "/sonhos.html" },
        { label: "Inventário", href: "/inventario.html" },
        { label: "Links", href: "/links.html" },
      ],
    },
    doar: { label: "Doar", href: "/doar.html" },
  };

  function gerarNavbarLinks(obj) {
    return Object.values(obj)
      .map((item) => {
        const isDoar = item.href === "/doar.html";
        const linkClass = isDoar ? "btn-doar" : "";
        if (item.children && item.children.length) {
          const childrenHTML = item.children.map((c) => `<a href="${c.href}">${c.label}</a>`).join("");
          return `
          <div class="dropdown"><a href="${item.href || "#"}" class="${linkClass} dropbtn">${
            item.label
          }</a><div class="dropdown-content">${childrenHTML}</div></div>
        `;
        } else {
          return `<div><a href="${item.href}" class="${linkClass}">${item.label}</a></div>`;
        }
      })
      .join("");
  }

  function gerarNavbarMobile(obj) {
    return Object.values(obj)
      .map((item) => {
        const isDoar = item.href === "/doar.html";
        const itemClass = isDoar ? "btn-doar" : "";
        if (item.children && item.children.length) {
          const childrenHTML = item.children.map((c) => `<li><a href="${c.href}">${c.label}</a></li>`).join("");
          if (item.href) {
            return `<li><a href="${item.href}" class="${itemClass}">${item.label}</a></li><ul>${childrenHTML}</ul>`;
          } else {
            return `<li class="nopage">${item.label}</li><ul>${childrenHTML}</ul>`;
          }
        } else {
          return `<li><a href="${item.href}" class="${itemClass}">${item.label}</a></li>`;
        }
      })
      .join("");
  }

  if (headerHome) {
    const asciiArt = `                       
                                                                  mm                  
                                                                  MM                  
            \`7MMpMMMb.pMMMb.  ,pW"Wq.  M"""MMV  ,6"Yb.  \`7Mb,od8 mmMMmm                
              MM    MM    MM 6W'   \`Wb '  AMV  8)   MM    MM' "'   MM                  
              MM    MM    MM 8M     M8   AMV    ,pm9MM    MM       MM                  
              MM    MM    MM YA.   ,A9  AMV  , 8M   MM    MM       MM                  
            .JMML  JMML  JMML.\`Ybmd9'  AMMmmmM \`Moo9^Yo..JMML.     \`Mbmo               
                                                                                      
                                             ,,                                
                                             db                                
                                                                               
,pP"Ybd  .gP"Ya \`7MMpMMMb.pMMMb. \`7MMpdMAo.\`7MM   ,6"Yb.  \`7MMpMMMb.  ,pW"Wq.  
8I   \`" ,M'   Yb  MM    MM    MM   MM   \`Wb  MM  8)   MM    MM    MM 6W'   \`Wb 
\`YMMMa. 8M""""""  MM    MM    MM   MM    M8  MM   ,pm9MM    MM    MM 8M     M8 
L.   I8 YM.    ,  MM    MM    MM   MM   ,AP  MM  8M   MM    MM    MM YA.   ,A9 
M9mmmP'  \`Mbmmd'.JMML  JMML  JMML. MMbmmd' .JMML.\`Moo9^Yo..JMML  JMML.\`Ybmd9'  
                                   MM                                          
                                 .JMML.                                        
`;

    headerHome.innerHTML = `
        <div id="ascii-art-container"><pre><a href="/index.html">${asciiArt}</a></pre></div>
        <h1 id="simple-title"><a href="/home.html">mozartsempiano</a></h1>
        <div id="navbar-compacta">${gerarNavbarLinks(links)}</div>
    `;
  }

  if (headerCompacta) {
    headerCompacta.innerHTML = `
      <div class="wrap">
        <div id="header-titulo-compacto">
          <a href="/home.html">mozartsempiano</a>
        </div>
        <div id="navbar-compacta">${gerarNavbarLinks(links)}</div>
      </div>
    `;
  }

  if (headerMobile) {
    headerMobile.innerHTML = `
        <div id="title-mobile">
          <a href="/home.html"><span id="site-title">mozartsempiano</span></a>
          <button id="menu-btn" aria-label="Abrir menu">
		  	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M121.87-236.28v-86h716.26v86H121.87Zm0-201.22v-86h716.26v86H121.87Zm0-201.22v-86h716.26v86H121.87Z"/></svg>
		  </button>
        </div>
        <div id="side-menu-overlay"></div>
        <nav id="side-menu">
          <button id="close-menu" aria-label="Fechar menu">&times;</button>
          <ul>${gerarNavbarMobile(links)}</ul>
        </nav>
    `;
  }
}
