import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useAuth } from "../contexts/AuthContext";
import "../styles/login.css";

// Tipagem dos dados do formulário
interface LoginFormData {
    username: string;
    password: string;
}

// Validação com Yup
const schema = yup.object().shape({
    username: yup.string().required("O usuário é obrigatório"),
    password: yup
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("A senha é obrigatória"),
});

function Login() {
    const { login } = useAuth(); // Ação de login do contexto

    // Hook do react-hook-form com validação do schema
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: yupResolver(schema),
    });

    // Ao submeter o formulário, loga o usuário com os dados fornecidos
    const onSubmit = (data: LoginFormData) => {
        login({
            id: "1", // Valor fixo apenas para exemplo
            username: data.username,
        });
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>MEC LIST</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input type="text" placeholder="Username" {...register("username")} />
                    {errors.username && <p className="error">{errors.username.message}</p>}

                    <Input type="password" placeholder="Password" {...register("password")} />
                    {errors.password && <p className="error">{errors.password.message}</p>}

                    <Button text="LOGIN" type="submit" />

                    <a href="#" className="forgot-password">
                        Esqueceu a senha?
                    </a>
                </form>
            </div>
        </div>
    );
}

export default Login;