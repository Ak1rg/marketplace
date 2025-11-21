'use client'
import Link from 'next/link';
import { FormInput } from './formInput';
import styles from './styles.module.scss';
import { FormProvider, useForm } from "react-hook-form";

interface SignUpFormValues {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const SignUpForm = () => {

    const methods = useForm<SignUpFormValues>();

    const {
        handleSubmit,
        watch,
    } = methods

    const onSubmit = (data: SignUpFormValues) => {
        console.log("Sign Up Data:", data);
    };

    const password = watch("password");

    return (
        <section className={styles.section}>
            <FormProvider {...methods}>
                <form
                    className={styles.form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <FormInput
                        label="Name"
                        name="name"
                        validation={{
                            required: "Name is required",
                            minLength: { value: 2, message: "At least 2 characters" },
                        }}
                    />

                    <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        validation={{
                            required: "Email is required",
                            pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email format",
                            },
                        }}
                    />

                    <FormInput
                        label="Password"
                        name="password"
                        type="password"
                        validation={{
                            required: "Password is required",
                            minLength: { value: 6, message: "Min 6 characters" },
                        }}
                    />

                    <FormInput
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        validation={{
                            required: "Confirm your password",
                            validate: (value) =>
                            value === password || "Passwords do not match",
                        }}
                    />

                    <button
                        type="submit"
                        className={styles.submit}
                    >
                        Sign Up
                    </button>

                    <Link 
                        className={styles.signin}
                        href={'/signin'}
                    >
                        Go to sign in
                    </Link>
                </form>
            </FormProvider>
        </section>
    )
}
