/**
 * Project: lifeplanner-webapp
 * File: index
 * Created by pennycodes on 09/08/2023.
 * Copyright lifeplanner-webapp
 */
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';


export interface QueryOptions {
    page?: number;
    limit?: number;
}

export interface DefaultResponse {
    status: number;
    message: string;
}

enum ERROR_REASONS {
    REQUIRED_FIELD = 'PropertyRequiredError',
    INVALID_FIELD = 'ValidationError',
    INVALID_RESPONSE = 'ResponseError',
}
export interface ErrorResponse {
    code: number;
    reason: ERROR_REASONS;
    message: string;
    property?: string;
    extendedHelper?: string;
}

export interface OrderQueryOptions extends QueryOptions {
    orderBy: string;
    sortedBy: string;
}

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    authorization?: boolean;
    getLayout?: (page: ReactElement) => ReactNode;
};

export interface AccordionItem {
    title: string;
    content: string;
}

export interface UserProfile {
    avatar: string | null;
    cover: string | null;
    date_of_birth: string | null;
    gender: string | null;
    other_gender: string | null;
    place_of_birth: string | null;
    about: string | null;
    fun_facts: string | null;
    nationality: string | null;
    pin_code: string | null;
    security_questions: string | null;
    two_fa: boolean;
    two_fa_code: string | null;
    metadata: string | null;
    created_at: string;
    updated_at: string;
}
export interface User {
    token: string;
    user_id: string;
    first_name: string;
    other_names: string;
    email: string;
    phone: string;
    email_verified: boolean;
    phone_verified: boolean;
    status: string;
    message: string;
    created_at: string;
    updated_at: string;
    profile: UserProfile;
}

export interface AuthResponse extends DefaultResponse {
    item: User;
}

export interface UpdateProfileInput {
    id: string;
}

export interface LoginUserInput {
    email: string;
    password: string;
}

export interface RegisterUserInput {

}

export interface ForgetPasswordInput {

}

export interface PasswordChangeResponse {

}

export interface VerifyForgetPasswordTokenInput {

}

export interface ResetPasswordInput {}

export interface ChangePasswordInput {}

export interface SettingsQueryOptions {}

export interface Settings {}

export interface Attachment {}
