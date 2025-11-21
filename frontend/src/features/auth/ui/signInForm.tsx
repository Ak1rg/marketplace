'use client'
import Link from 'next/link';
import { FormInput } from './formInput';
import styles from './styles.module.scss';
import { FormProvider, useForm } from "react-hook-form";
import { useEffect, useState } from 'react';

interface SignInFormValues {
    email: string;
    password: string;
}

export const SignInForm = () => {

    const methods = useForm<SignInFormValues>();

    const [error, seterror] = useState<string>('')

    const {handleSubmit} = methods

    const API = 'http://localhost:8081'

//     const login = async () => {
//     const res = await fetch(API+"/users/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//             "password": "Password!",
//             "email": "test@gmail.com"
//         }),
//     });

//     const data = await res.json();
//     console.log("Login response:", data);

//     const token = data.token;
//     if (!token) {
//         console.error("No token received!");
//         return;
//     }

//     localStorage.setItem("token", token);

//     const userRes = await fetch(API+"/admin", {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         },
//     });

//     if (!userRes.ok) {
//         const text = await userRes.text();
//         console.error("Server error:", text);
//         return;
//     }

//     const userData = await userRes.json();
//     console.log("User data:", userData);
// }

    useEffect(() => {
        
    }, [])

    
    const onSubmit = async () => {
        try {
            throw error
        } catch (err) {
            console.error(err)
            seterror('Password is incorrect');
        }
    };

    return (
        <section className={styles.section}>
            <FormProvider {...methods}>
                <form
                    className={styles.form}
                    onSubmit={handleSubmit(onSubmit)}
                >

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
                        }}
                        error={error!==''?error:null}
                    />

                    <button
                        type="submit"
                        className={styles.submit}
                    >
                        Sign In
                    </button>

                    <Link 
                        className={styles.signin}
                        href={'/signup'}
                    >
                        Have an account? - Go to sign up
                    </Link>
                </form>
            </FormProvider>
        </section>
    )
}

