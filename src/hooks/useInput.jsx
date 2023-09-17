import {useEffect, useState} from "react";

export const useInput = (verifyFn) => {

    const [value, setValue] = useState("")
    const [error, setError] = useState(null)
    const [touched, setTouched] = useState(null)

    useEffect(() => {
        setError(verifyFn(value))
    }, [value]);

    return {
        value,
        setValue,
        error,
        touched,
        setTouched
    }
}