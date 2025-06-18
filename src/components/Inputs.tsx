import { IconType } from "react-icons";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

interface InputWithIconProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: IconType | React.ComponentType<{ className?: string }>;
  type?: string;
  className?: string;
  inputClassName?: string;
  iconClassName?: string;
  disabled?: boolean;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({
  label,
  value,
  onChange,
  placeholder = "",
  icon: Icon = FaUser,
  type = "text",
  className = "",
  inputClassName = "",
  disabled = false,
  iconClassName = disabled ? "text-foreground" : "text-primary",
}: InputWithIconProps) => {
  return (
    <div className={`${className}`}>
      <label className="block text-foreground/50 mb-2 text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        <motion.input
          type={type}
          disabled={disabled}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full border tracking-widest disabled:bg-primary/30 disabled:text-foreground border-border rounded-lg px-4 py-3 
            placeholder-foreground/50 focus:outline-none focus:ring-2 text-foreground focus:ring-primary/50
            pl-12 transition-all duration-200 ${inputClassName}`}
        />
        <motion.div className="absolute left-3 top-1/2 -translate-y-1/2">
          <Icon className={`${iconClassName}`} />
        </motion.div>
      </div>
    </div>
  );
};

export default InputWithIcon;
