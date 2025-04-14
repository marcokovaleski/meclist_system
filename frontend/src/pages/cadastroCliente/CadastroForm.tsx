import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../components/Button/Button";
import "./cadastroCliente.css";

interface FormData {
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  endereco: string;
  senha: string;
  confirmacaoSenha: string;
}

interface CadastroFormProps {
  onClose: () => void;
  onSave: (cliente: FormData) => void; // Função para salvar cliente
}

const schema = yup.object().shape({
  nome: yup.string().required("O nome é obrigatório"),
  cpf: yup.string().required("O CPF é obrigatório"),
  telefone: yup.string().required("O telefone é obrigatório"),
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
  endereco: yup.string().required("O endereço é obrigatório"),
  senha: yup.string().required("A senha é obrigatória"),
  confirmacaoSenha: yup
    .string()
    .oneOf([yup.ref("senha")], "As senhas devem ser iguais")
    .required("A confirmação de senha é obrigatória"),
});

export function CadastroForm({ onClose, onSave }: CadastroFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    // Salva no localStorage
    const clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
    clientes.push(data); // Adiciona o novo cliente
    localStorage.setItem("clientes", JSON.stringify(clientes));

    onSave(data); // Passa para o componente pai

    onClose(); // Fecha o modal após o cadastro
  };

  return (
    <div className="cadastro-form">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          type="button"
          onClick={onClose}
          style={{
            backgroundColor: "#D86B06",
            border: "none",
            borderRadius: "6px",
            padding: "4px 10px",
            color: "#fff",
            fontWeight: "bold",
            marginBottom: "10px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Nome" {...register("nome")} />
        {errors.nome && <p className="error">{errors.nome.message}</p>}

        <input placeholder="CPF (somente números)" {...register("cpf")} />
        {errors.cpf && <p className="error">{errors.cpf.message}</p>}

        <input placeholder="Telefone (somente números)" {...register("telefone")} />
        {errors.telefone && <p className="error">{errors.telefone.message}</p>}

        <input placeholder="Email" {...register("email")} />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input placeholder="Endereço" {...register("endereco")} />
        {errors.endereco && <p className="error">{errors.endereco.message}</p>}

        <input type="password" placeholder="Senha" {...register("senha")} />
        {errors.senha && <p className="error">{errors.senha.message}</p>}

        <input
          type="password"
          placeholder="Confirmação de Senha"
          {...register("confirmacaoSenha")}
        />
        {errors.confirmacaoSenha && (
          <p className="error">{errors.confirmacaoSenha.message}</p>
        )}

        <Button type="submit" text="Cadastrar" />
      </form>
    </div>
  );
}

export default CadastroForm;
