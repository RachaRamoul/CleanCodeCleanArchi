"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const api_config_1 = require("../../config/api.config");
const AddUserPage = () => {
    const [firstName, setFirstName] = (0, react_1.useState)('');
    const [lastName, setLastName] = (0, react_1.useState)('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`${api_config_1.API_BASE_URL}users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName }),
        });
        setFirstName('');
        setLastName('');
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Ajouter un utilisateur" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsx)("input", { type: "text", value: firstName, onChange: (e) => setFirstName(e.target.value), placeholder: "Pr\u00E9nom" }), (0, jsx_runtime_1.jsx)("input", { type: "text", value: lastName, onChange: (e) => setLastName(e.target.value), placeholder: "Nom" }), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: "Ajouter" })] })] }));
};
exports.default = AddUserPage;
