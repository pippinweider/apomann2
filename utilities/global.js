import { useEffect, useState } from "react";


const useSessionStorage = (key, initialValue = false) => {
    const [data, setData] = useState(initialValue);
    const [loaded, setLoaded] = useState(false);

    const get = () => {
        const value = localStorage.getItem(key);

        if (value === null && initialValue) {
            set(initialValue);
            return initialValue;
        }
        return value ? JSON.parse(value) : null;
    };
    
    const set = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setData(value);
    }

    useEffect(() => {
        if (window) {
            setData(get());
            setLoaded(true);
        }
    }, []);

    return [data, set, loaded];
}

const waitWindow = () => {
    const [foundWindow, setFoundWindow] = useState(false);

    useEffect(() => {
        if (window) {
            setFoundWindow(true);
        }
    }, []);

    return foundWindow;
}

const isMobile = () => {
    if (typeof window !== 'undefined') {
        return window.innerWidth < 768;
    }
}

const formatMoney = (value) => {
    return `${value} €`;
}

const debounce = (func, wait, immediate) => {
    let timeout;

    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
}

export {
    useSessionStorage,
    isMobile,
    waitWindow,
    formatMoney,
    debounce
}