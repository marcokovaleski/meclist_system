import { InputHTMLAttributes } from "react";
import "../styles/input.css";
import userIcon from "../assets/user-icon.svg";
import lockIcon from "../assets/lock-icon.svg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: "user" | "lock";
}

export function Input({ icon, ...rest }: InputProps) {
    const iconSrc = icon === "user" ? userIcon : lockIcon;

    return (
        <div className="input-container">
            {icon && <img src={iconSrc} alt={`${icon} incon`} />}
            <input {...rest} />
        </div>
    );
}