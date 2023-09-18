/**
 * Project: lifeplanner-webapp
 * File: input
 * Created by pennycodes on 10/08/2023.
 * Copyright lifeplanner-webapp
 */
import {forwardRef, ReactNode} from 'react';
import classNames from 'classnames';
import useMaxlength from "@/utils/hooks/use-maxlength";
import {BsDashCircleFill} from "react-icons/bs";

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    label: string;
    error?: string;
    helpText?: string;
    icon?: ReactNode;
    className?: string;
    inputClassName?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            icon,
            error,
            helpText,
            type = 'text',
            className,
            inputClassName = '',
            required,
            ...props
        },
        ref
    ) => {

        const { isLimitExceeded, isLimitReached, onChange, counter, isShowCounter, isWarning } = useMaxlength({
            maxLength: props.maxLength,
            value: props.defaultValue as string | undefined,
            validate: true
        })

        return (
            <div className={className}>
                <label className="block text-label font-medium">
                    {label && (
                        <span className="block cursor-pointer pb-1.5 text-body-light dark:text-body-dark">
             {label} {required && <small className="text-red-500 text-xs font-semibold">required</small>}
            </span>
                    )}
                    <div className="relative mt-1 rounded-md shadow-sm">
                        {icon &&
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                {icon}
                            </div>
                        }
                        <input
                            type={type}
                            ref={ref}
                            {...props}
                            className={classNames(
                                'h-11 w-full appearance-none rounded-md border px-4 py-2 text-input-large ring-[0.5px] focus:ring-[0.5px] md:h-12 lg:px-5 xl:h-[50px]',
                                inputClassName,
                                {
                                    'bg-transparent dark:bg-transparent border-input-border text-input-text placeholder:text-input-placeholder focus:border-brand ring-input-border focus:ring-brand dark:border-secondary-dark dark:text-secondary dark:ring-secondary-dark dark:placeholder:text-secondary-dark dark:focus:border-secondary-light dark:focus:ring-secondary-light': !props.disabled && !props.readOnly && !error,
                                },
                                {
                                    "border-danger dark:border-danger text-danger-dark dark:text-danger-dark placeholder:text-danger-dark dark:placeholder:text-danger-dark bg-danger-soft focus:bg-transparent focus:border-danger-dark dark:focus:border-danger-dark focus:outline-none dark:ring-danger focus:ring-danger dark:focus:ring-danger": error
                                },
                                {
                                    "bg-input-muted-bg dark:bg-secondary-dark border-input-border  dark:border-secondary-dark text-input-text dark:text-input-text dark:placeholder:text-input-muted-placeholder placeholder:text-input-muted-placeholder": props.disabled || props.readOnly
                                }
                            )}
                        />
                        <span className={classNames("pointer-events-none absolute right-0 -bottom-5 flex items-center pl-3",
                            {
                                "text-red-500": isLimitExceeded || isLimitReached,
                                "text-brand-warning": isWarning,
                                "text-brand-green": !isLimitExceeded && !isLimitReached
                            }
                        )}>
                            {isShowCounter && <span className="text-xs">{counter}/{props.maxLength}</span>}
                        </span>
                        {error && (
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                <BsDashCircleFill className="h-5 w-5 text-danger" aria-hidden="true" />
                            </div>
                        )}
                    </div>
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

Input.displayName = 'Input';
export default Input;
