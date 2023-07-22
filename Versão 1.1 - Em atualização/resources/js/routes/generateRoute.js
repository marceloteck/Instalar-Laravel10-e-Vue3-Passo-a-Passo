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