import clsx from "clsx";

interface ButtonProps {
    text: string;
    icon?: JSX.Element;
    variant?: "primary" | "danger" | "success" | "info" | "light" | "dark" | "brand";
    className?: string;
    onClick: () => void;
    disabled?: boolean;
}
export default function Button({ text, icon, variant, className, disabled = false, onClick }: ButtonProps) {
    return (
        <>
            <button
                onClick={onClick}
                className={clsx({
                    className: true,
                    "flex w-max items-center gap-x-2": true,
                    "btn-primary": variant === "primary",
                    "btn-danger": variant === "danger",
                    "btn-success": variant === "success",
                    "btn-info": variant === "info",
                    "btn-light": variant === "light",
                    "btn-dark": variant === "dark",
                    "btn-brand": variant === "brand"
                })}
                disabled={disabled}
            >
                {icon && icon}
                <span>{text}</span>
            </button>
        </>
    );
}
