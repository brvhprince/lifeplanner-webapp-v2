/**
 * Project: lifeplanner-webapp
 * File: validate-environment-variables
 * Created by pennycodes on 10/08/2023.
 * Copyright lifeplanner-webapp
 */
import * as yup from 'yup';
import { ConfigValue } from '.';

const environmentVariablesSchema = yup.object().shape({
    NODE_ENV: yup
        .string()
        .oneOf(['development', 'production'])
        .default('development'),
    API_URL: yup.string().required(),
    SITE_URL: yup.string().required()
});

export function validateEnvironmentVariables() {
    environmentVariablesSchema
        .validate(
            Object.fromEntries(
                Object.keys(ConfigValue).map((key) => [
                    key,
                    ConfigValue[key as keyof typeof ConfigValue],
                ])
            ),
            {
                abortEarly: false,
            }
        )
        .catch(function (err) {
            throw new Error(
                `Please set the following environment variables: ${err.errors.join(
                    ', '
                )}`
            );
        });
}
