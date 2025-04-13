// Importa os tipos de propriedades HTML e o CSS específico deste botão
import { ButtonHTMLAttributes } from "react";
import "./button.css";

// Define as props que o componente Button pode receber, incluindo texto
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

// Componente reutilizável de botão estilizado
export function Button({ text, ...rest }: ButtonProps) {
    return <button {...rest}>{text}</button>;
}