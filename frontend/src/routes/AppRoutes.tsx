import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import CadastroCliente from "../pages/cadastroCliente/CadastroCliente";
import { useAuth } from "../contexts/AuthContext";

// Configura as rotas da aplicação, redirecionando conforme o estado de autenticação
export function AppRoutes() {
    const { user } = useAuth();

    return (
        <Routes>
            <Route
                path="/"
                element={!user ? <Login /> : <Navigate to="/dashboard" replace />}
            />
            <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/" replace />}
            />
            <Route
                path="/cadastro-cliente"
                element={user ? <CadastroCliente /> : <Navigate to="/" replace />}
            />
        </Routes>
    );
}