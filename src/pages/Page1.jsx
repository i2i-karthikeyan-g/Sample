import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";


export const Page1 = () => {
    const [isBlocked, setIsBlocked] = useState(false);
    const globalData = useContext(GlobalContext);
 
    const onBlock = () => {
        setIsBlocked(true);
        globalData.setValue((prev => ({ ...prev, isBlockNavigation: true })));
    }

    const onUnBlock = () => {
        setIsBlocked(false);
        globalData.setValue((prev => ({ ...prev, isBlockNavigation: false })));
    }

    return <div>
        <h3>Page1</h3>

        <button className="btn" onClick={onBlock}>
            Block
        </button>

        <button className="btn" onClick={onUnBlock}>
            UnBlock
        </button>

        {
            isBlocked ?
                <h5>
                    Routing is Blocked now
                </h5>
                :
                ""
        }
    </div>
}