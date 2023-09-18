/**
 * Project: lifeplanner-webapp
 * File: use-is-mounted
 * Created by pennycodes on 10/08/2023.
 * Copyright lifeplanner-webapp
 */

import { useEffect, useState } from 'react';

export function useIsMounted() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    return mounted;
}
// Compare this snippet from src/utils/hooks/use-is-mounted.ts:
// /**
//  * Project: lifeplanner-webapp
//  * File: use-is-mounted
//  * Created by pennycodes on 10/08/2023.
//  *
//  * This hook is used to prevent memory leaks when using async functions
//  * in useEffect. It checks if the component is mounted before updating state.
//  *
//  * Usage:
//  * const isMounted = useIsMounted();
//  * useEffect(() => { if (isMounted) { // do something } }, [isMounted]);
//  *
//  * @param {void}
//  * @returns {boolean}
//  */
