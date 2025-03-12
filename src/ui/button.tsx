interface ButtonProps {
    label : string,
    type? : "submit" | "button" | "reset"
}

export const Button = ({label ,type = "button"} : ButtonProps) => {
    return <button type={type} className="bg-background py-2 px-6 rounded-xl text-3xl">{label}</button>
}