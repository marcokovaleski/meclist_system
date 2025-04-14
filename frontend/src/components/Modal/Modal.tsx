import { useEffect } from "react";
import ReactDOM from "react-dom";
import CadastroForm from "../../pages/cadastroCliente/CadastroForm";
import "./modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (cliente: any) => void; // Função para salvar cliente
}

export function Modal({ isOpen, onClose, onSave }: ModalProps) {
  // Fecha o modal ao pressionar a tecla Esc
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <CadastroForm onClose={onClose} onSave={onSave} /> {/* Passando o onSave */}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
