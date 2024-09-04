import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";


export const Home = () => {

    const globalData = useContext(GlobalContext);

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter !== 0) {
            globalData.setValue((prev => ({ ...prev, isBlockNavigation: true })));
        } else {
            globalData.setValue((prev => ({ ...prev, isBlockNavigation: false })));
        }

    }, [counter]);

    const onIncrement = () => {
        setCounter(prev => prev + 1);
    }

    const onDecrement = () => {
        setCounter(prev => prev - 1);
    }

    return <div>
        <h3>Home</h3>
        <h4>
            {counter}
        </h4>

        <button className="btn" onClick={onIncrement}>
            Increment
        </button>

        <button className="btn" onClick={onDecrement}>
            Decrement
        </button>

        {counter !== 0 ?
            <h5>navigation is blocked</h5> :
            ""
        }
    </div>
}