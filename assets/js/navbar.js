export function carregarNavbar() {
	const headerHome = document.getElementById("header-expandida");
	const headerCompacta = document.getElementById("header-compacta");
	const headerMobile = document.getElementById("header-mobile");

	const navbarCSS = `#navbar,
  nav {
    gap: 20px;
    text-transform: capitalize;
    letter-spacing: 1px;
    font-size: 1em;
    transition: var(--transition-time);
    user-select: none;
  }
  #navbar {
    text-align: center;
    width: 100%;
    margin: 0 auto 22px;
    position: relative;
    display: flex;
    justify-content: center;
  }
  nav {
    display: flex;
    text-align: left;
  }
  #navbar a.atual,
  nav a.atual {
    color: var(--clr-main-a40);
  }
  #navbar a,
  nav a {
    cursor: pointer !important;
  }
  a:not([href]) {
    cursor: default;
  }
  #navbar .dropdown,
  nav .dropdown {
    position: relative;
    display: inline-block;
  }
  #navbar .dropdown::after,
  nav .dropdown::after {
    --svg: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>');
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 1em;
    height: 1em;
    mask: var(--svg) no-repeat center/contain;
    -webkit-mask: var(--svg) no-repeat center/contain;
    background-color: currentColor;
    pointer-events: none;
    padding-left: 6px;
  }
  #navbar .dropbtn,
  nav .dropbtn {
    text-decoration: none;
    color: inherit;
  }
  #navbar .dropdown-content,
  nav .dropdown-content {
    position: absolute;
    top: 100%;
    margin-top: -1px;
    background-color: var(--clr-black-a0);
    border: 1px solid var(--clr-gray-a10);
    border-radius: 0 var(--b-radius) var(--b-radius) 0;
    max-width: 150px;
    width: max-content;
    z-index: 500;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-5px);
    transition: opacity 0.15s, transform 0.3s, visibility 0.15s;
  }
  #navbar .dropdown-content a,
  nav .dropdown-content a {
    display: block;
    padding: 8px 12px;
    color: var(--clr-white);
    text-decoration: none;
    text-align: left;
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  #navbar .dropdown-content a:hover,
  nav .dropdown-content a:hover {
    background-color: var(--clr-main-a40);
  }
  #navbar .dropdown:hover .dropdown-content,
  nav .dropdown:hover .dropdown-content {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0);
  }

  #header-expandida {
    display: flex;
    gap: 21px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 75px;
    width: 100%;
    user-select: none;
    margin: 495px 0 26px;
    position: relative;
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
    z-index: -2;
    transform-origin: center;
    animation: fragmentFloat 8s infinite ease-in-out;
    filter: var(--img-main-filter, none);
  }

  #header-compacta {
    margin: 24px 0 64px;
  }

  #header-expandida pre {
    margin: 0;
  }  

  #ascii-art-container pre {
    width: 100%;
    text-align: center;
    user-select: none;
    animation: flickerAnim 1s normal forwards ease-in-out;
    margin-bottom: 12px;
  }

  #header-expandida pre a:hover,
  #simple-title a:hover,
  #site-title a:hover,
  #header-mobile a:hover {
    color: var(--clr-main-a40) !important;
    text-decoration: none !important;
  }

  /* Botão Doar */
  #header-expandida a.btn-doar,
  #header-compacta a.btn-doar,
  #header-mobile a.btn-doar {
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
  }

  #header-titulo-compacto {
    text-align: left;
    margin-right: 32px;
  }

  #title-mobile {
    display: none;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }

  #header-mobile a {
    color: var(--clr-white);
    text-decoration: none;
  }

  #menu-btn,
  #close-menu {
    background: none;
    border: none;
    color: var(--clr-white);
    font-size: 2.29em;
    cursor: pointer;
  }

  #menu-btn:hover,
  #close-menu:hover {
    color: var(--clr-main-a40);
  }

  #menu-btn svg {
    width: 0.9em;
    height: 0.9em;
    fill: currentColor;
  }

  #close-menu {
    position: absolute;
    top: 12px;
    right: 18px;
  }

  #side-menu {
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
    padding: 32px 24px 24px;
    display: flex;
    flex-direction: column;
    transform: translateX(100%);
    transition: transform 0.75s cubic-bezier(0.4, 0, 0.2, 1);
    user-select: none;
    scrollbar-width: thin;
  }

  #side-menu.open {
    transform: translateX(0);
    overflow-y: auto;
    overflow-x: hidden;
  }

  #side-menu-overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 998;
    transition: opacity 0.25s;
    opacity: 0;
    pointer-events: none;
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
    transition: color 0.25s;
  }

  @media (max-width: 1024px) {
    #ascii-art-container {
      font-size: 0.8em;
      display: none;
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
      font-size: 1.2em !important;
      text-align: left !important;
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
					const childrenHTML = item.children
						.map((c) => `<a href="${c.href}">${c.label}</a>`)
						.join("");
					return `
          <div class="dropdown"><a href="${
						item.href || "#"
					}" class="${linkClass} dropbtn">${
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
					const childrenHTML = item.children
						.map((c) => `<li><a href="${c.href}">${c.label}</a></li>`)
						.join("");
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
        <nav>${gerarNavbarLinks(links)}</nav>
    `;
	}

	if (headerCompacta) {
		headerCompacta.innerHTML = `
      <div class="wrap">
        <div id="header-titulo-compacto">
          <a href="/home.html">mozartsempiano</a>
        </div>
        <nav>${gerarNavbarLinks(links)}</nav>
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
