import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps>= ({ title, styles }) => {
  return (
    <button className={`bg-blue-400 py-1 px-3 ${styles}`}>
      <p className="text-sm">{title}</p>
    </button>
  );
}

export default Button;