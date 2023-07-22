// gerador do routers
export function rotas(path, component, name = '', title = '', auth = true) {
    return {
        path, 
        name,
        component,
        meta: {
            title,
            auth
        }
    };
}
/*
export default {
    metaInfo() {
      return {
        title: 'Título da Página Específica',
        meta: [
          { name: 'description', content: 'Descrição da Página Específica' },
          { name: 'keywords', content: 'Palavras-chave, relevantes, para, SEO' },
          { name: 'author', content: 'Nome do Autor' },
          { name: 'robots', content: 'index, follow' }, // Define como os robôs de busca devem se comportar
          { property: 'og:title', content: 'Título para Compartilhamento em Redes Sociais' }, // Open Graph meta tags para compartilhamento em redes sociais
          { property: 'og:description', content: 'Descrição para Compartilhamento em Redes Sociais' },
          { property: 'og:image', content: 'URL da Imagem para Compartilhamento em Redes Sociais' },
          // Outras metatags relevantes para o seu conteúdo
        ],
      };
    },
  };
  */