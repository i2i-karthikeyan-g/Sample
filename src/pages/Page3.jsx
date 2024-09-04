import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";


export const Page3 = () => {

    const globalData = useContext(GlobalContext);

    useEffect(() => {
        globalData.setValue((prev => ({ ...prev, isBlockNavigation: true })));
    }, []);

    return <div>
        <h3>Page3</h3>
        <br />
        <h5>
            Navigation blocked
        </h5>
    </div>
}