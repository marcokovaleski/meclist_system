import { useState, useEffect } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Modal } from "../../components/Modal/Modal";
import CadastroForm from "./CadastroForm";
import "../dashboard/dasboard.css";
import "./cadastroCliente.css";
import { FaCar, FaPlus } from "react-icons/fa";

// Interface para tipagem dos clientes
interface Cliente {
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  // Adicione mais campos conforme necessário
}

export default function CadastroCliente() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clientes, setClientes] = useState<Cliente[]>([]);

  // Carregar os dados dos clientes do localStorage ao carregar a página
  useEffect(() => {
    try {
      const storedClientes = JSON.parse(localStorage.getItem("clientes") || "[]") as Cliente[];
      setClientes(storedClientes);
    } catch (error) {
      console.error("Erro ao carregar clientes do localStorage:", error);
      setClientes([]);
    }
  }, []);

  // Função para adicionar cliente à lista e salvar no localStorage
  const handleSaveCliente = (cliente: Cliente) => {
    const updatedClientes = [...clientes, cliente];
    setClientes(updatedClientes);
    localStorage.setItem("clientes", JSON.stringify(updatedClientes));
  };

  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="dashboard-content">
        <h1 className="page-title">Cadastro de clientes</h1>

        {/* Barra superior com busca e botão de cadastro */}
        <div className="top-bar">
          <div className="search-group">
            <input type="text" placeholder="Buscar cliente" />
            <button className="btn buscar-btn">Buscar</button>
          </div>

          <button
            className="btn cadastrar-btn"
            onClick={() => setIsModalOpen(true)}
          >
            Cadastrar cliente <FaPlus style={{ marginLeft: "5px" }} />
          </button>
        </div>

        {/* Filtro visual */}
        <div className="filter">
          <strong>Filtrar</strong> <span className="filter-icon">🔽</span>
        </div>

        {/* Tabela de dados dos clientes */}
        {clientes.length > 0 ? (
          <div className="cliente-table-container">
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
                {clientes.map((cliente) => (
                  <tr key={cliente.cpf}>
                    <td>{cliente.nome}</td>
                    <td>
                      <FaCar /> {/* Pode incluir lógica de veículos futuramente */}
                    </td>
                    <td>{cliente.cpf}</td>
                    <td>{cliente.telefone}</td>
                    <td>{cliente.email}</td>
                    <td>Ativo</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="no-clientes">Nenhum cliente cadastrado.</p>
        )}
      </main>

      {/* Modal com o formulário de cadastro */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveCliente}
      />
    </div>
  );
}
