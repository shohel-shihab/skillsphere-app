"use client"
import { Check } from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const LoginPage = () => {
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({ email, password })
        const { data, error } = await authClient.signIn.email({
            email,
            password
        })

        if (error) {
            toast.error(error.message || "Login failed");
            return;
        }
        toast.success("Login successful");
        router.push("/")

    }
    const googleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
        <div className="my-10 ">
            <Form className="flex w-96 flex-col mx-auto gap-4" onSubmit={onSubmit}>
                <Card.Title className="text-center text-2xl">Please Login!</Card.Title>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="Your Email" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Login
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
            <div className="text-center">
                <p className="my-2 text-2xl text-blue-400">------------- Or ------------------</p>
                <Button onClick={googleSignIn}>Google Sign In</Button>
            </div>
            <p className="text-center text-xl mt-2">If you are New! <span className="underline text-blue-500"><Link href="/registration">Register</Link></span></p>
        </div>
    )
}

export default LoginPage