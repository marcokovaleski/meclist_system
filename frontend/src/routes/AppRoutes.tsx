import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { useAuth } from "../contexts/AuthContext";

export function AppRoutes() {
    const { user } = useAuth(); // Recupera o usuário logado do contexto

    return (
        <Routes>
            <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" replace />}
            />
            <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/dashboard" replace />}
            />
        </Routes>
    );
}