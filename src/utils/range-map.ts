/**
 * Project: lifeplanner-webapp
 * File: range-map
 * Created by pennycodes on 10/08/2023.
 * Copyright lifeplanner-webapp
 */
export default function rangeMap(n: number, fn: (i: number) => any) {
    const arr = [];
    while (n > arr.length) {
        arr.push(fn(arr.length));
    }
    return arr;
}
