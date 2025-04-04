import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import "../styles/login.css"; // Importando a estilização específica da tela de login

const schema = yup.object().shape({
    username: yup.string().required("O usuário é obrigatório"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("A senha é obrigatória"),
});

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log("Dados do formulário:", data);
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
