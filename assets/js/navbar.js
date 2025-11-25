export function carregarNavbar() {
	const headerHome = document.getElementById("header-expandida");
	const headerCompacta = document.getElementById("header-compacta");
	const headerMobile = document.getElementById("header-mobile");

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
          <div class="dropdown">
            <a href="${item.href || "#"}" class="${linkClass} dropbtn">${item.label}</a>
            <div class="dropdown-content">${childrenHTML}</div>
          </div>
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
          <button id="menu-btn" aria-label="Abrir menu">&#9776;</button>
        </div>
        <div id="side-menu-overlay"></div>
        <nav id="side-menu">
          <button id="close-menu" aria-label="Fechar menu">&times;</button>
          <ul>${gerarNavbarMobile(links)}</ul>
        </nav>
    `;
	}
}
