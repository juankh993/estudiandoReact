import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const LIMIT_MAX = 10;

    useEffect(() => {
        document.title = `Counter: ${count}`;
        console.log("El contador ha cambiado:", count);
    }, [count]);

    return (
        <div>
            <h1>Counter: <span>{count}</span></h1>
            <button
                onClick={() => {
                    if (count < LIMIT_MAX) {
                        setCount(count + 1);
                    }
                }}
                disabled={count === LIMIT_MAX}
            >
                Increment
            </button>

            <button
                onClick={() => {
                    if (count > 0) {
                        setCount(count - 1);
                    }
                }}
                disabled={count === 0}
            >
                Decrement
            </button>

            {count === LIMIT_MAX && <p>¡Has llegado al máximo!</p>}
            {count === 0 && <p>No puedes bajar de cero.</p>}

        </div>
    );
}

export default Counter;