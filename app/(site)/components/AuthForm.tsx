'use client'

import Input from "@/app/components/input/Input";
import { useCallback, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/Button";
import AuthSocailButton from "./AuthSocailButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
    const [variant,setVarinant] = useState<Variant>("LOGIN");
    const [isLoading,setIsLoading] = useState(false);

    const toggleVariant = useCallback(()=>{
        if(variant === 'LOGIN'){
            setVarinant('REGISTER');
        } else{
            setVarinant('LOGIN');
        }
    },[variant])

    // defining useForm with it's type
    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm<FieldValues>({
        // possible value that can come in form
        defaultValues:{
            name:"",
            email:"",
            password:"",
        }
    });

    // creating submitHandler with the help of useForm SubmitHandler with it's type
    const onSubmit: SubmitHandler<FieldValues> = (data)=>{
        // during submition show the loading effect
        setIsLoading(true);

        // user want's to register
        if(variant == 'REGISTER'){
            // axios register
        }
        // user want's to login or SignIn
        if(variant === 'REGISTER'){
            // NextAuth SignIn
        }
    }

    const socialAction = (action : string)=>{
        setIsLoading(true);

        //NextAuth Social signin
    }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow-sm rounded-lg sm:px-10">
            {/* handleSubmit exported from useForm object at line 23 and taking a submit handler creating by us */}
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                {variant === 'REGISTER' && (
                    <Input
                    id="name"
                    label="Name"
                    register={register}
                    errors={errors}
                    />
                )}
                    <Input
                    id="email"
                    label="Email Address"
                    type="email"
                    register={register}
                    errors={errors}
                    />
                    <Input
                    id="password"
                    label="password"
                    type="password"
                    register={register}
                    errors={errors}
                    />

                    <div>
                        <Button
                        disabled={isLoading}
                        fullWidth
                        type="submit"

                        >
                            {variant === 'LOGIN' ? "Sign in" : "Register"}
                        </Button>
                    </div>
            </form>

            <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"/>
                    </div>
                    <div className="relative flex justify-center text-center">
                        <span className="bg-white py-2 text-gray-500">
                            Or continue with
                        </span>
                    </div>
                </div>

                <div className="mt-6 flex gap-2">
                    <AuthSocailButton
                    icon={BsGithub}
                    onClick={()=> socialAction('github')}
                    />
                    <AuthSocailButton
                    icon={BsGoogle}
                    onClick={()=> socialAction('google')}
                    />
                </div>
            </div>

            <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                <div>
                    {variant === 'LOGIN' ? "New to Messenger?" : "Already have an account?"}
                </div>
                {/* toggeling the auth form */}
                <div onClick={toggleVariant} className="underline cursor-pointer">
                    {variant === 'LOGIN' ? "Create an account" : "Login"}
                </div>
            </div>

        </div>
    </div>
  )
}

export default AuthForm