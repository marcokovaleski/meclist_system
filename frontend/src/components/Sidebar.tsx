import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import "../styles/sidebar.css"

export function Sidebar() {
    const { logout } = useAuth(); // Função para deslogar o usuário
    const [open, setOpen] = useState(false); // Estado para controlar se a sidebar está expandida

    return (
        <div className={`sidebar ${open ? "expanded" : ""}`}>
            <button onClick={() => setOpen(!open)} className="menu-button">
                M <span className="chevron">{open ? "«" : "»"}</span>
            </button>

            {open && (
                <div className="menu-options">
                    <button onClick={logout} className="logout-button">
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}