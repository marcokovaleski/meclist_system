import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

// Componente Button reutilizável
export function Button({ text, ...rest }: ButtonProps) {
    return <button {...rest}>{text}</button>;
}