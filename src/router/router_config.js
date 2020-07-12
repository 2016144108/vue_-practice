const router_config={
    mode: "history",
    routes: [
        {
            path: "/",
            name: "info",
            component: ()=>import("../views/Info"),
        },
        {
            path: "/About",
            name: "about",
            component: ()=>import("../views/About"),
        },
    ]
}

export default router_config;

