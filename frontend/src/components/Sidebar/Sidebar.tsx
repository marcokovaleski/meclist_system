// Sidebar lateral expansível com controle de navegação e logout
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./sidebar.css";

export function Sidebar() {
    const { logout } = useAuth(); // Obtém função de logout do contexto
    const navigate = useNavigate(); // Hook de navegação do React Router

    // Controle de estados dos menus
    const [open, setOpen] = useState(false);
    const [cadastroOpen, setCadastroOpen] = useState(false);
    const [relatorioOpen, setRelatorioOpen] = useState(false);

    return (
        <div className={`sidebar ${open ? "expanded" : ""}`}>
            {/* Botão para expandir/recolher a sidebar */}
            <button onClick={() => setOpen(!open)} className="menu-button">
                M <span className="chevron">{open ? "«" : "»"}</span>
            </button>

            {/* Menu visível somente quando a sidebar está expandida */}
            {open && (
                <div className="menu-options">
                    <button onClick={() => navigate("/dashboard")}>Dashboard</button>

                    {/* Menu em grupo: Cadastro */}
                    <div className="menu-group">
                        <button onClick={() => setCadastroOpen(!cadastroOpen)}>
                            Cadastro <span>{cadastroOpen ? "▾" : "▸"}</span>
                        </button>
                        {cadastroOpen && (
                            <div className="submenu">
                                <button onClick={() => navigate("/cadastro-cliente")}>
                                    Cadastro de clientes
                                </button>
                                <button onClick={() => navigate("/cadastro-Mecanico")}>
                                    Cadastro de mecânicos
                                </button>
                            </div>
                        )}
                    </div>

                    <button onClick={() => navigate("/checklist")}>Checklist</button>

                    {/* Menu em grupo: Relatório */}
                    <div className="menu-group">
                        <button onClick={() => setRelatorioOpen(!relatorioOpen)}>
                            Relatório <span>{relatorioOpen ? "▾" : "▸"}</span>
                        </button>
                        {relatorioOpen && (
                            <div className="submenu">
                                <button onClick={() => navigate("/relatorio/mensal")}>
                                    Faturamento mensal
                                </button>
                                <button onClick={() => navigate("/relatorio/status")}>
                                    Checklist por status
                                </button>
                                <button onClick={() => navigate("/relatorio/tempo")}>
                                    Tempo médio de execução
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Botão de logout */}
                    <button onClick={logout} className="logout-button">
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}