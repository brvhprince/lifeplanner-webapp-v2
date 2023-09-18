/**
 * Project: lifeplanner-webapp
 * File: privat-route
 * Created by pennycodes on 10/08/2023.
 * Copyright lifeplanner-webapp
 */
import {ReactNode} from "react";


const PrivateRoute = ({ children }: { children: ReactNode}) => {
    return (
        <>
            {children}
        </>
    );
}

export default PrivateRoute;
