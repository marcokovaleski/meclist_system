import { ButtonHTMLAttributes } from "react";
import "../styles/button.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

// Componente Button reutilizável
export function Button({ text, ...rest }: ButtonProps) {
    return <button {...rest}>{text}</button>;
}