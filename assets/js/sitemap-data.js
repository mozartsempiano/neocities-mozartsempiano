// Sitemap data structure used to build the sitemap HTML
export const sitemap = [
  { href: "/index.html", label: "/index" },
  {
    group: true,
    items: [
      { href: "/home.html", label: "/home" },
      { href: "/sobre.html", label: "/sobre" },
      {
        href: "/portfolio/index.html",
        label: "/portfolio",
        children: [
          { href: "/portfolio/design/index.html", label: "/design" },
          {
            href: "/portfolio/arte/index.html",
            label: "/arte",
            children: [
              { href: "/portfolio/arte/sketchbook-2019.html", label: "/sketchbook-2019" },
              { href: "/portfolio/arte/sketchbook-2022.html", label: "/sketchbook-2022" },
            ],
          },
          { href: "/portfolio/fotografia/index.html", label: "/fotografia" },
        ],
      },
      { nopage: true, label: "/projetos" },
      {
        items: [
          { href: "/2kki.html", label: "/2kki" },
          { href: "/akatsukigames.html", label: "/akatsukigames" },
          { href: "/mplace/index.html", label: "/mplace" },
        ],
      },
      { nopage: true, label: "/outros" },
      {
        items: [
          { href: "/pensamentos/index.html", label: "/pensamentos" },
          { href: "/anotacoes.html", label: "/anotacoes" },
          { href: "/sonhos.html", label: "/sonhos" },
          { href: "/inventario.html", label: "/inventario" },
          { href: "/links.html", label: "/links" },
        ],
      },
      { href: "/doar.html", label: "/doar" },
      { href: "/changelog.html", label: "/changelog" },
      { href: "/not_found.html", label: "/404" },
    ],
  },
  { href: "https://neocities.org/site/mozartsempiano", label: "/neocities", external: true },
];

export default sitemap;
