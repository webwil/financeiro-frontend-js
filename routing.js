// Arquivo Reponsável pelas rotas da aplicação

const routes = {
    '/': '<app-login></app-login>',
    '/index.html': '<app-login></app-login>',
    '/dashboard': '<app-dashboard></app-dashboard>'
}

console.log(routes);

const renderRoute = async (route) => {
    const routeContent = routes[route];
    document.getElementById('main-page').innerHTML = routeContent;
}

const navigateTo = (pathname) => {
    renderRoute(pathname);
}

renderRoute(window.location.pathname);