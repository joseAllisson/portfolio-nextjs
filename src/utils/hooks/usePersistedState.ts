import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
]

function usePersistedState<T>(key: string, initialState: T): Response<T> {
    const [state, setState] = useState(() => {
        const storage = localStorage.getItem(key);

        if (storage) {
            return JSON.parse(storage);
        } else {
            return initialState;
        }
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state])
    
    return [state, setState];
}

export default usePersistedState;