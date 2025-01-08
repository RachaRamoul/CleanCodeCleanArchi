"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const api_config_1 = require("../../config/api.config");
const HomePage = () => {
    const [users, setUsers] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        fetch(`${api_config_1.API_BASE_URL}users`)
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Erreur:', error));
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Liste des utilisateurs" }), (0, jsx_runtime_1.jsx)("ul", { children: users.map((user) => ((0, jsx_runtime_1.jsxs)("li", { children: [user.firstName, " ", user.lastName] }, user.id))) }), (0, jsx_runtime_1.jsx)("h1", { children: "Ajouter un utilisateur" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/add-user", children: (0, jsx_runtime_1.jsx)("button", { children: "Ajouter un utilisateur" }) })] }));
};
exports.default = HomePage;
