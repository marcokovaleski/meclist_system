// Importa tipos do HTML e estilos do input
import { InputHTMLAttributes } from "react";
import "./input.css";

// Importa ícones SVG do projeto (usuário e cadeado)
import userIcon from "../../assets/user-icon.svg";
import lockIcon from "../../assets/lock-icon.svg";

// Define as props que o componente Input aceita, com um ícone opcional
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: "user" | "lock";
}

// Componente de input estilizado, com ícone condicional
export function Input({ icon, ...rest }: InputProps) {
    const iconSrc = icon === "user" ? userIcon : lockIcon;

    return (
        <div className="input-container">
            {icon && <img src={iconSrc} alt={`${icon} icon`} />}
            <input {...rest} />
        </div>
    );
}