/**
 * Project: lifeplanner-webapp
 * File: error-message
 * Created by pennycodes on 10/08/2023.
 * Copyright lifeplanner-webapp
 */

interface ErrorProps {
    message?: string;
}

export const Error: React.FC<ErrorProps> = ({ message }) => {
    return (
        <p className="mt-2 text-xs text-red-500 ltr:text-left rtl:text-right">
            {message}
        </p>
    );
};

const ErrorMessage: React.FC<ErrorProps> = ({ message }) => {
    return (
        <p className="mx-auto mt-16 min-w-min max-w-sm rounded bg-red-400 p-5 text-center text-lg font-semibold text-light">
            {message}
        </p>
    );
};

export default ErrorMessage;


export const ErrorBoundaryFallback: React.FC<{ error: Error, resetErrorBoundary:any }> = ({ error, resetErrorBoundary }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <p className="text-center text-2xl font-semibold text-red-500">
                Something went wrong:
            </p>
            <p className="text-center text-lg font-semibold text-red-500">
                {error.message}
            </p>
        </div>
    );
}
