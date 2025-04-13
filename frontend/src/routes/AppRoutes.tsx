import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import CadastroMecanico from "../pages/CadastroMecanico"
import Dashboard from "../pages/Dashboard";
import CadastroCliente from "../pages/CadastroCliente";
import { useAuth } from "../contexts/AuthContext";

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
                path="/cadastro-Mecanico"
                element={user ? <CadastroMecanico /> : <Navigate to="/" replace />}
            />
            <Route
                path="/cadastro-cliente"
                element={user ? <CadastroCliente /> : <Navigate to="/" replace />}
            />
        </Routes>
    );
}