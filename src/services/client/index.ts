/**
 * Project: lifeplanner-webapp
 * File: index
 * Created by pennycodes on 10/08/2023.
 * Copyright lifeplanner-webapp
 */
import type {
    AuthResponse,
    ForgetPasswordInput,
    LoginUserInput,
    OrderQueryOptions,
    PasswordChangeResponse,
    RegisterUserInput,
    ResetPasswordInput,
    Settings,
    UpdateProfileInput,
    User,
    QueryOptions,
    VerifyForgetPasswordTokenInput,
    ChangePasswordInput,
    Attachment,
    SettingsQueryOptions
} from '@/interface';
import { API_ENDPOINTS } from './endpoints';
import { HttpClient } from './http-client';

class Client {

    users = {
        me: () => HttpClient.get<User>(API_ENDPOINTS.USERS_ME),
        update: (user: UpdateProfileInput) =>
            HttpClient.put<User>(`${API_ENDPOINTS.USERS}/${user.id}`, user),
        login: (input: LoginUserInput) =>
            HttpClient.post<AuthResponse>(API_ENDPOINTS.USERS_LOGIN, input),
        register: (input: RegisterUserInput) =>
            HttpClient.post<AuthResponse>(API_ENDPOINTS.USERS_REGISTER, input),
        forgotPassword: (input: ForgetPasswordInput) =>
            HttpClient.post<PasswordChangeResponse>(
                API_ENDPOINTS.USERS_FORGOT_PASSWORD,
                input
            ),
        verifyForgotPasswordToken: (input: VerifyForgetPasswordTokenInput) =>
            HttpClient.post<PasswordChangeResponse>(
                API_ENDPOINTS.USERS_VERIFY_FORGOT_PASSWORD_TOKEN,
                input
            ),
        resetPassword: (input: ResetPasswordInput) =>
            HttpClient.post<PasswordChangeResponse>(
                API_ENDPOINTS.USERS_RESET_PASSWORD,
                input
            ),
        changePassword: (input: ChangePasswordInput) =>
            HttpClient.post<PasswordChangeResponse>(
                API_ENDPOINTS.USERS_CHANGE_PASSWORD,
                input
            ),
        logout: () => HttpClient.post<boolean>(API_ENDPOINTS.USERS_LOGOUT, {}),
    };
    settings = {
        all: (params?: SettingsQueryOptions) =>
            HttpClient.get<Settings>(API_ENDPOINTS.SETTINGS, { ...params }),
        upload: (input: File[]) => {
            let formData = new FormData();
            input.forEach((attachment) => {
                formData.append('attachment[]', attachment);
            });
            return HttpClient.post<Attachment[]>(API_ENDPOINTS.UPLOADS, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        },
    };

}

export default new Client();
