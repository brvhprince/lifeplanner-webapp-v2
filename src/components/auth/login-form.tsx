/**
 * Project: lifeplanner-webapp
 * File: login-form
 * Created by pennycodes on 10/08/2023.
 * Copyright lifeplanner-webapp
 */
"use client";

import * as yup from 'yup';
import type { SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import type { LoginUserInput } from '@/interface';
import { Form } from '@/components/ui/forms/form';
import Password from '@/components/ui/forms/password';
import Input from '@/components/ui/forms/input';
import Button from '@/components/ui/button';
import useAuth from '@/utils/hooks/use-auth';
import client from '@/services/client';
import { useRouter } from "next/navigation";
import Link from "@/components/ui/link";
import routes from "@/config/routes";

const loginValidationSchema = yup.object().shape({
    email: yup.string().email('Enter a valid email address').required('Email is required'),
    password: yup.string().required('Password is required').min(8, 'Password should be of minimum 8 characters'),
});

export default function LoginUserForm() {
    const router = useRouter();

    const { authorize } = useAuth();
    const { mutate: login, isLoading } = useMutation(client.users.login, {
        onSuccess: (data) => {
            if (!data.status) {
                toast.error(<b>Something went wrong. please retry</b>, {
                    className: '-mt-10 xs:mt-0',
                });
                return;
            }
            toast.success(<b>{data.message}</b>, {
                className: '-mt-10 xs:mt-0',
            });
            authorize(data.item.token);

        },
        onError: (error) => {
            // @ts-ignore
            toast.error(<b>{error.response.data.message}</b>, {
                className: '-mt-10 xs:mt-0',
            });
        }
    });
    const onSubmit: SubmitHandler<LoginUserInput> = (data) => {
        login(data);
    };
    return (
        <div className="px-6 pt-10 pb-8 sm:px-8 lg:p-12">
            <div className="relative z-10 flex items-center">
                <div className="w-full shrink-0 text-left md:w-[380px]">
                    <div className="flex flex-col pb-5 text-left xl:pb-6 xl:pt-2">
                        <p className={'text-3xl pb-8'}>👋</p>
                        <h2 className="text-heading-2 text-heading-dark font-semibold dark:text-heading-light">
                            Welcome Back!
                        </h2>
                        <div className="mt-1.5 text-subheading leading-6 tracking-[0.2px] dark:text-body-dark lg:mt-2.5 xl:mt-3">
                            Let&apos;s plan your life

                        </div>
                    </div>
                    <Form<LoginUserInput>
                        onSubmit={onSubmit}
                        validationSchema={loginValidationSchema}
                        className="space-y-4 pt-4 lg:space-y-5"
                    >
                        {({ register, formState: { errors } }) => (
                            <>
                                <Input
                                    label="Email Address"
                                    type="email"
                                    {...register('email')}
                                    error={errors.email?.message}
                                    placeholder={"Enter your email address"}
                                />
                                <Password
                                    label="Password"
                                    {...register('password')}
                                    error={errors.password?.message}
                                    helpText={'Must be at least 8 characters'}
                                    placeholder={'Type your password'}

                                />
                                <div className="flex items-end justify-end space-x-5 ">
                                    <Link
                                        className="font-semibold text-brand hover:text-brand-light"
                                        href={routes.forgotPassword}
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>
                                <Button
                                    type="submit"
                                    isLoading={isLoading}
                                    disabled={isLoading}
                                    className="!mt-5 w-full text-sm tracking-[0.2px] lg:!mt-7"
                                >
                                    Sign In
                                </Button>
                            </>
                        )}
                    </Form>
                </div>
            </div>
        </div>
    );
}
