import { LoadManager } from "./core";

class App {
    constructor() {
        this.routes = {};
        this.currentView = null;
        LoadManager.init();
    }

    // Simulasi proses loading
    simulateLoading() {
        return new Promise((resolve) => {
            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                LoadManager.setProgress(progress);
                if (progress >= 100) {
                    clearInterval(interval);
                    resolve();
                }
            }, 100); // Update progress setiap 100ms
        });
    }

    addRoute(path, view) {
        this.routes[path] = view;
    }

    async navigate(path) {
        LoadManager.reset(); // Reset progress bar
        const { route, params } = this.extractRouteAndParams(path);
        if (this.routes[route]) {
            // Gunakan hash routing
            window.location.hash = `#${path}`;

            // Tampilkan progress bar dan mulai simulasi loading
            await this.simulateLoading();

            // Render view setelah loading selesai
            
            this.renderView(route, params);
            LoadManager.complete(); // Selesaikan progress bar
        } else {
            this.renderView('/404');
        }
    }

    extractRouteAndParams(path) {
        // Hapus karakter '#' dari path jika ada
        const cleanPath = path.startsWith('#') ? path.slice(1) : path;

        const route = Object.keys(this.routes).find((route) => {
            const regex = this.createRouteRegex(route);
            return regex.test(cleanPath);
        });

        if (!route) return { route: cleanPath, params: {} };

        const params = this.extractParams(route, cleanPath);
        return { route, params };
    }

    createRouteRegex(route) {
        const pattern = route.replace(/:\w+/g, '([^/]+)');
        return new RegExp(`^${pattern}$`);
    }

    extractParams(route, path) {
        const params = {};
        const routeParts = route.split('/');
        const pathParts = path.split('/');

        routeParts.forEach((part, index) => {
            if (part.startsWith(':')) {
                const paramName = part.slice(1);
                params[paramName] = pathParts[index];
            }
        });

        return params;
    }

    async renderView(route, params = {}) {
        const view = this.routes[route] || this.routes['/404'];
        const appElement = document.getElementById('app');

        setTimeout( async () => {
            // appElement.innerHTML = view.render(params);
            const html = await view.render(params); 
            appElement.innerHTML = html;
            // Panggil onMount saat view dimuat
            if (view.onMount) {
                view.onMount();
            }
        },1000);

    }

    start() {
        // Handle popstate event (untuk tombol back/forward browser)
        window.addEventListener('popstate', () => {
            const { route, params } = this.extractRouteAndParams(window.location.pathname);
            this.renderView(route, params);
        });

        // Handle hashchange event
        window.addEventListener('hashchange', () => {
            const hashPath = window.location.hash.slice(1); // Hapus karakter '#' dari hash
            const { route, params } = this.extractRouteAndParams(hashPath);
            this.renderView(route, params);
        });

        // Handle click event pada elemen dengan data-link
        document.body.addEventListener('click', (e) => {
            const linkElement = e.target.closest('[data-link]');
            if (linkElement) {
                e.preventDefault();
                const href = linkElement.getAttribute('href');
                this.navigate(href);
            }
        });

        // Render view awal berdasarkan hash saat ini
        const initialHashPath = window.location.hash.slice(1); // Hapus karakter '#' dari hash
        const { route, params } = this.extractRouteAndParams(initialHashPath || '/'); // Default ke '/' jika hash kosong
        this.renderView(route, params);
    }
}

export default App;