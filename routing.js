// Arquivo Reponsável pelas rotas da aplicação

const routes = {
    '/': '<app-login></app-login>',
    '/index.html': '<app-login></app-login>',
    '/dashboard': '<app-dashboard></app-dashboard>'
}

//console.log(routes);

const renderRoute = async (route) => {
    const routeContent = await canAccesRoute(route) ? routes[route] : routes['/'];
    document.getElementById('main-page').innerHTML = routeContent;
}

const navigateTo = (pathname) => {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    renderRoute(pathname);
}

const isAuthenticated = async () => {
    const token = localStorage.getItem('token');

    if(!token) return false;

    const response = await window.validateToken(`${window.apiURL}/validate/token`, token);
    const data = await response.json();

    return data.isValidToken;
}

const canAccesRoute = async (route) => {
    if (route !== '/dashboard') return true;
    return await isAuthenticated();
}
/*







*/



renderRoute(window.location.pathname);