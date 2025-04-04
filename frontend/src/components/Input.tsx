import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export function Input({ label, ...rest }: InputProps) {
    return (
        <div>
            {label && <label>{label}</label>}
            <input {...rest} />
        </div>
    );
}
