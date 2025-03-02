interface ButtonProps {
    label : string
}

export const Button = ({label} : ButtonProps) => {
    return <button className="bg-background py-2 px-6 rounded-xl text-3xl">{label}</button>
}