type HeaderRoutes = {
  title: string;
  links: { title: string; url: string }[];
}[];

export const headerRoutes: HeaderRoutes = [
  {
    title: "Campeonatos",
    links: [
      {
        title: "Campeonato Brasileiro Série B",
        url: "https://ge.globo.com/futebol/brasileirao-serie-b/",
      },
      {
        title: "Copa do Brasil",
        url: "https://ge.globo.com/futebol/copa-do-brasil/",
      },
      {
        title: "Campeonato Catarinense",
        url: "https://ge.globo.com/sc/futebol/campeonato-catarinense/",
      },
    ],
  },
  {
    title: "Elencos",
    links: [
      {
        title: "Elenco Profissional",
        url: "https://chapecoense.com/elenco/",
      },
      {
        title: "Elenco Sub 20",
        url: "https://chapecoense.com/sub-20/",
      },
      {
        title: "Elenco Sub 17",
        url: "https://chapecoense.com/sub-17/",
      },
      {
        title: "Elenco Sub 15",
        url: "https://chapecoense.com/sub-15/",
      },
    ],
  },
  {
    title: "Sobre",
    links: [
      {
        title: "Diretoria",
        url: "https://chapecoense.com/diretoria/",
      },
      {
        title: "Nossa História",
        url: "https://chapecoense.com/nossa-historia/",
      },
      {
        title: "Localização",
        url: "https://chapecoense.com/nossa-historia/#localizacao",
      },
      {
        title: "Hinos e Simbolos",
        url: "https://chapecoense.com/nossa-historia/#hino-simbolos",
      },
      {
        title: "Mascote",
        url: "https://chapecoense.com/nossa-historia/#mascote",
      },
      {
        title: "Títulos",
        url: "https://chapecoense.com/nossa-historia/#titulos",
      },
      {
        title: "Notícias",
        url: "https://www.youtube.com/user/ACFChapecoense",
      },
      {
        title: "Museu Virtual",
        url: "https://www.emuseudoesporte.com.br/br/colecoes-acessiveis/142",
      },
    ],
  },
  {
    title: "Torcedor",
    links: [
      {
        title: "Seja Sócio",
        url: "https://socios.chapecoense.com/associe-se.aspx",
      },
      {
        title: "Área do Sócio",
        url: "https://socios.chapecoense.com/Login.aspx?RedirectUrl=Index.aspx",
      },
      {
        title: "Transparência",
        url: "https://chapecoense.com/portal-da-transparencia/",
      },
      {
        title: "Ingressos",
        url: "https://ingressos.chapecoense.com/",
      },
      {
        title: "Associe-se",
        url: "https://socios.chapecoense.com/associe-se.aspx",
      },
    ],
  },
];
