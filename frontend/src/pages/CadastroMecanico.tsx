import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Sidebar } from "../components/Sidebar";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import "../styles/dasboard.css";
import "../styles/cadastro.css";

interface CadastroFormData {
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    endereco: string;
    senha: string;
    confirmacaoSenha: string;
}

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

export default function Cadastro() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CadastroFormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: CadastroFormData) => {
        console.log("Usuário cadastrado:", data);
    };

    return (
        <div className="dashboard-container">
            <Sidebar />

            <main className="dashboard-content">
                <h1>Cadastro de Usuário</h1>

                <form className="cadastro-form" onSubmit={handleSubmit(onSubmit)}>
                    <Input type="text" placeholder="Nome" {...register("nome")} />
                    {errors.nome && <p className="error">{errors.nome.message}</p>}

                    <Input type="text" placeholder="CPF (somente números)" {...register("cpf")} />
                    {errors.cpf && <p className="error">{errors.cpf.message}</p>}

                    <Input type="text" placeholder="Telefone (somente números)" {...register("telefone")} />
                    {errors.telefone && <p className="error">{errors.telefone.message}</p>}

                    <Input type="email" placeholder="Email" {...register("email")} />
                    {errors.email && <p className="error">{errors.email.message}</p>}

                    <Input type="text" placeholder="Endereço" {...register("endereco")} />
                    {errors.endereco && <p className="error">{errors.endereco.message}</p>}

                    <Input type="password" placeholder="Senha" {...register("senha")} />
                    {errors.senha && <p className="error">{errors.senha.message}</p>}

                    <Input type="password" placeholder="Confirmação de Senha" {...register("confirmacaoSenha")} />
                    {errors.confirmacaoSenha && <p className="error">{errors.confirmacaoSenha.message}</p>}

                    <Button type="submit" text="Cadastrar" />
                </form>
            </main>
        </div>
    );
}