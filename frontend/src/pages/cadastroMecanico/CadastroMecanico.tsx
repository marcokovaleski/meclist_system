// Importa os hooks de formulário do react-hook-form e a integração com o yup para validação
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Importa o yup para definição do schema de validação
import * as yup from "yup";

// Importa componentes reutilizáveis e estilos
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import "../dashboard/dasboard.css";
import "./cadastro.css";

// Define o tipo dos dados que o formulário irá lidar
interface CadastroFormData {
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    endereco: string;
    senha: string;
    confirmacaoSenha: string;
}

// Define as regras de validação usando yup
const schema = yup.object().shape({
    nome: yup.string().required("O nome é obrigatório"),
    cpf: yup
        .string()
        .required("O CPF é obrigatório")
        .matches(/^\d{11}$/, "CPF deve conter 11 números"),
    telefone: yup
        .string()
        .required("O telefone é obrigatório")
        .matches(/^\d{10,11}$/, "Telefone inválido"),
    email: yup.string().email("Email inválido").required("O email é obrigatório"),
    endereco: yup.string().required("O endereço é obrigatório"),
    senha: yup
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("A senha é obrigatória"),
    confirmacaoSenha: yup
        .string()
        .oneOf([yup.ref("senha")], "As senhas não coincidem")
        .required("A confirmação de senha é obrigatória"),
});

// Componente principal do cadastro
export default function Cadastro() {
    // useForm cria os métodos para lidar com o formulário, integrando com o schema do yup
    const {
        register,          // Registra os inputs no controle do react-hook-form
        handleSubmit,      // Lida com o evento de submit do formulário
        formState: { errors }, // Acessa os erros de validação
    } = useForm<CadastroFormData>({
        resolver: yupResolver(schema), // Conecta o schema de validação do yup ao formulário
    });

    // Função chamada ao submeter o formulário com sucesso
    const onSubmit = (data: CadastroFormData) => {
        console.log("Usuário cadastrado:", data);
        // Aqui poderia ser feito um POST para API, por exemplo
    };

    return (
        <div className="dashboard-container">
            {/* Menu lateral da aplicação */}
            <Sidebar />

            {/* Conteúdo principal da página */}
            <main className="dashboard-content">
                <h1>Cadastro de Usuário</h1>

                {/* Formulário de cadastro */}
                <form className="cadastro-form" onSubmit={handleSubmit(onSubmit)}>
                    {/* Campo de nome */}
                    <Input type="text" placeholder="Nome" {...register("nome")} />
                    {errors.nome && <p className="error">{errors.nome.message}</p>}

                    {/* Campo de CPF */}
                    <Input type="text" placeholder="CPF (somente números)" {...register("cpf")} />
                    {errors.cpf && <p className="error">{errors.cpf.message}</p>}

                    {/* Campo de telefone */}
                    <Input type="text" placeholder="Telefone (somente números)" {...register("telefone")} />
                    {errors.telefone && <p className="error">{errors.telefone.message}</p>}

                    {/* Campo de email */}
                    <Input type="email" placeholder="Email" {...register("email")} />
                    {errors.email && <p className="error">{errors.email.message}</p>}

                    {/* Campo de endereço */}
                    <Input type="text" placeholder="Endereço" {...register("endereco")} />
                    {errors.endereco && <p className="error">{errors.endereco.message}</p>}

                    {/* Campo de senha */}
                    <Input type="password" placeholder="Senha" {...register("senha")} />
                    {errors.senha && <p className="error">{errors.senha.message}</p>}

                    {/* Campo de confirmação de senha */}
                    <Input type="password" placeholder="Confirmação de Senha" {...register("confirmacaoSenha")} />
                    {errors.confirmacaoSenha && <p className="error">{errors.confirmacaoSenha.message}</p>}

                    {/* Botão de envio do formulário */}
                    <Button type="submit" text="Cadastrar" />
                </form>
            </main>
        </div>
    );
}