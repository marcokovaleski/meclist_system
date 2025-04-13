import { Sidebar } from "../components/Sidebar";
import "../styles/dasboard.css";
import "../styles/cadastroCliente.css";
import { FaCar, FaPlus } from "react-icons/fa";

export default function CadastroCliente() {
    return (
        <div className="dashboard-container">
            <Sidebar />

            <main className="dashboard-content">
                <h1 className="page-title">Cadastro de clientes</h1>

                <div className="top-bar">
                    <div className="search-group">
                        <input type="text" placeholder="Buscar cliente" />
                        <button className="btn buscar-btn">
                            Buscar
                        </button>
                    </div>

                    <button className="btn cadastrar-btn">
                        Cadastrar cliente <FaPlus style={{ marginLeft: "5px" }} />
                    </button>
                </div>

                <div className="filter">
                    <strong>Filtrar</strong> <span className="filter-icon">🔽</span>
                </div>

                <table className="cliente-table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Veículos</th>
                            <th>CPF</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>Situação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gustavo Sganderla</td>
                            <td><FaCar /> <FaPlus /> 1</td>
                            <td>649.980.000-71</td>
                            <td>45 8842-7088</td>
                            <td>grsganderla@minha.fag.edu.br</td>
                            <td>Ativo</td>
                        </tr>
                        <tr>
                            <td>Gabriel Wrubel</td>
                            <td><FaCar /> <FaPlus /> 2</td>
                            <td>622.244.620-50</td>
                            <td>45 9934-4434</td>
                            <td>gwrubel@minha.fag.edu.br</td>
                            <td>Inativo</td>
                        </tr>
                        <tr>
                            <td>Marco Aurélio Kovaleki</td>
                            <td><FaCar /> <FaPlus /> 3</td>
                            <td>420.456.310-44</td>
                            <td>45 9806-4161</td>
                            <td>maksilva@minha.fag.edu.br</td>
                            <td>Ativo</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    );
}