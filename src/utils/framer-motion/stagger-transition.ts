/**
 * Project: lifeplanner-webapp
 * File: stagger-transition
 * Created by pennycodes on 10/08/2023.
 * Copyright lifeplanner-webapp
 */

export function staggerTransition(staggerChildren: number = 0.05) {
    return {
        enter: {
            transition: { staggerChildren },
        },
        exit: {
            transition: { staggerChildren },
        },
    };
}
