/**
 * Project: lifeplanner-webapp
 * File: use-auth
 * Created by pennycodes on 10/08/2023.
 * Copyright lifeplanner-webapp
 */
import { atom, useAtom } from 'jotai';
import {
    checkHasAuthToken,
    getAuthToken,
    removeAuthToken,
    setAuthToken,
} from '@/utils/tokens';

const authorizationAtom = atom(checkHasAuthToken());
export default function useAuth() {
    const [isAuthorized, setAuthorized] = useAtom(authorizationAtom);
    return {
        setToken: setAuthToken,
        getToken: getAuthToken,
        isAuthorized,
        authorize(token: string) {
            setAuthToken(token);
            setAuthorized(true);
        },
        unauthorize() {
            setAuthorized(false);
            removeAuthToken();
        },
    };
}
