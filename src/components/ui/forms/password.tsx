/**
 * Project: lifeplanner-webapp
 * File: password
 * Created by pennycodes on 10/08/2023.
 * Copyright lifeplanner-webapp
 */
import { useState, forwardRef } from 'react';
import cn from 'classnames';
import { BsEyeFill as EyeIcon } from 'react-icons/bs';
import { BsEyeSlashFill as EyeCloseIcon } from 'react-icons/bs';


type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    label: string;
    error?: string;
    className?: string;
    helpText?: string;
    inputClassName?: string;
};

const Password = forwardRef<HTMLInputElement, InputProps>(
    (
        { label, error, className, helpText, inputClassName = '', ...props },
        ref
    ) => {

        let [showPassword, setShowPassword] = useState(false);
        return (
            <div className={className}>
                <label className="block text-label font-medium">
                    {label && (
                        <span className="block cursor-pointer pb-1.5 text-body-light dark:text-body-dark">
              {label}
            </span>
                    )}

                    <span className="relative block">
            <input
                type={showPassword ? 'text' : 'password'}
                ref={ref}
                {...props}
                className={cn(
                    'h-11 w-full appearance-none rounded-md border px-4 py-2 text-input-large ring-[0.5px] focus:ring-[0.5px] md:h-12 lg:px-5 xl:h-[50px]',
                    inputClassName,
                    {
                        'bg-transparent dark:bg-transparent border-input-border text-input-text placeholder:text-input-placeholder focus:border-brand ring-input-border focus:ring-brand dark:border-secondary-dark dark:text-secondary dark:ring-secondary-dark dark:placeholder:text-secondary-dark dark:focus:border-secondary-light dark:focus:ring-secondary-light': (!props.disabled || !props.readOnly) && !error,
                    },
                    {
                        "border-danger dark:border-danger text-danger-dark dark:text-danger-dark placeholder:text-danger-dark dark:placeholder:text-danger-dark bg-danger-soft focus:bg-transparent focus:border-danger-dark dark:focus:border-danger-dark focus:outline-none dark:ring-danger focus:ring-danger dark:focus:ring-danger": error
                    },
                    {
                        "bg-input-muted-bg dark:bg-secondary-dark border-input-border  dark:border-secondary-dark text-input-text dark:text-input-text dark:placeholder:text-input-muted-placeholder placeholder:text-input-muted-placeholder": props.disabled || props.readOnly
                    }
                )}
            />
            <span
                onClick={() => setShowPassword(!showPassword)}
                className=" absolute top-0 flex h-full w-[34px] cursor-pointer items-center justify-start text-body-light hover:text-secondary-dark right-0  dark:text-body-dark hover:dark:text-light-900 lg:w-9"
            >
              {showPassword ? (
                  <EyeCloseIcon className="h-auto w-5" />
              ) : (
                  <EyeIcon className="h-auto w-5" />
              )}
            </span>
          </span>
                </label>

                {error && (
                    <span role="alert" className="block pt-2 text-xs font-semibold text-danger-dark">
            {error}
          </span>
                )}
                {helpText && (
                    <div className={"block mt-2 text-body-2 text-body-muted"}>
                        {helpText}
                    </div>
                )}
            </div>
        );
    }
);

Password.displayName = 'Password';
export default Password;
