import { useFormContext } from "react-hook-form";
import styles from './styles.module.scss';

interface ValidationRules {
    required?: string | boolean;
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
    validate?: (value: string) => boolean | string;
};

interface FormInputProps {
    label: string;
    name: string;
    type?: string;
    validation?: ValidationRules;
    error?:string|null
}

export const FormInput = ({ label, name, type = "text", validation , error }: FormInputProps) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const fieldError = errors[name]?.message as string | undefined;

    return (
        <div className={styles.field}>
            <label className={styles.label}>{label}</label>
            <input
                type={type}
                className={styles.input}
                {...register(name, validation)}
            />
            <span className={styles.field_error}>{error??(fieldError??'')}</span>
        </div>
    );
};