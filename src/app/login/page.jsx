"use client";

import { useState } from "react";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      toast.error(error.message || "Login failed");
      setLoading(false);
      return;
    }

    toast.success("Login successful");
    router.push("/");
  };

  const googleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-100 px-4">
      
      <Card className="w-full max-w-md p-6 shadow-xl rounded-2xl bg-white/90 backdrop-blur">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">
          Please Login 👋
        </h2>

        {/* Form */}
        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Enter a valid email";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            name="password"
            type="password"
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Minimum 8 characters
            </Description>
            <FieldError />
          </TextField>

          {/* Buttons */}
          <Button
            type="submit"
            className="bg-teal-700 text-white hover:bg-teal-800"
            isDisabled={loading}
          >
            <Check />
            {loading ? "Logging in..." : "Login"}
          </Button>

          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </Form>

        {/* Divider */}
        <div className="my-6 text-center text-gray-400">
          ───── Or continue with ─────
        </div>

        {/* Google */}
        <Button
          onClick={googleSignIn}
          className="w-full border text-gray-500 border-gray-300 bg-white hover:bg-gray-50"
        >
          Continue with Google
        </Button>

        {/* Register */}
        <p className="text-center mt-6 text-gray-600">
          New here?{" "}
          <Link
            href="/registration"
            className="text-teal-700 font-semibold underline"
          >
            Please Register
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;