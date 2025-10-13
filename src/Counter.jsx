import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const LIMIT_MAX = 10;

    useEffect(() => {
        document.title = `Counter: ${count}`;
        console.log("El contador ha cambiado:", count);
    }, [count]);

    // Dentro de Counter.jsx

    useEffect(() => {
        // 1. INICIO del Efecto: Iniciamos el temporizador y guardamos su ID.
        const timerId = setTimeout(() => {
            // ... (Alguna acción)
            console.log("¡Temporizador ejecutado después de 1 segundo!");
        }, 3000);

        // 2. LIMPIEZA (Cleanup): La función que se ejecuta al desmontar.
        return () => {
            // Usamos el ID guardado para detener el temporizador.
            clearTimeout(timerId);
            console.log("¡Se detuvo el temporizador antes de que se desmontara el componente!");
        };
    }, []); // Array de dependencias vacío, solo se ejecuta al montar.



    return (
        <div>
            <h1>Counter: <span>{count}</span></h1>

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

            {count === LIMIT_MAX && <p>¡Has llegado al máximo!</p>}
            {count === 0 && <p>No puedes bajar de cero.</p>}

        </div>
    );
}

export default Counter;