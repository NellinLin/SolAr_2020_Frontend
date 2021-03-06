/**
 * Router
 */
export default class Router {
    /**
     * Router constructor
     * @param {object} root
     */
    constructor(root) {
        this.root = root;
        this.routesMap = new Map();

        // When clicking on the link, correctly process
        this.catchMouseClick = this.catchMouseClick.bind(this);
        this.root.addEventListener('click', this.catchMouseClick);
    }

    /**
     * Open route
     * @param {string} route
     */
    open(route) {
    // console.log(this.routesMap);

        window.history.replaceState({}, '', route);

        if (this.routesMap.has(route)) {
            this.routesMap.get(route).render();
        } else {
            alert('Такой страницы нет! Перенаправляю на группы');
            this.open('/group');
        }
    }

    /**
     * Catch click function
     * @param {object} event
     */
    catchMouseClick(event) {
        if (!(event.target instanceof HTMLAnchorElement || event.target instanceof HTMLImageElement)) {

        } else if (event.target instanceof HTMLAnchorElement) {
            event.preventDefault();
            const link = event.target;

            this.open(link.pathname);
        } else if (event.target instanceof HTMLImageElement) {
            event.preventDefault();
            this.open(event.target.dataset.section);
        }
    }

    /**
     * Add route function
     * @param {string} route
     * @param {function} handler
     */
    addRoute(route, handler) {
    // handler is a callable function or method
        this.routesMap.set(route, handler);
    }
}
