import { getCookie, setCookie } from "cookies-next";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
]

function usePersistedState<T>(key: string, initialState: T): Response<T> {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const storage = getCookie("theme");

        if (storage) {
            setState(JSON.parse(storage as string));
        } else {
            setState(initialState);
        }
    }, [initialState]);

    useEffect(() => {
        setState((prev) => {
            setCookie(key, JSON.stringify(prev));

            return prev;
        })
    }, [key, state])

    return [state, setState];
}

export default usePersistedState;