import { getCookie, setCookie } from "cookies-next";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
]

function usePersistedState<T>(key: string, initialState: T): Response<T> {
    const [state, setState] = useState(() => {
        const storage = getCookie(key);

        if (storage) {
            return JSON.parse(storage as string);
        } else {
            return initialState;
        }
    });

    useEffect(() => {
        setCookie(key, JSON.stringify(state));
    }, [key, state])

    return [state, setState];
}

export default usePersistedState;