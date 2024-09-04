import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";


export const Page2 = () => {

    const globalData = useContext(GlobalContext);

    const [value, setValue] = useState("");

    useEffect(() => {
        if (value) {
            globalData.setValue((prev => ({ ...prev, isBlockNavigation: true })));
        } else {
            globalData.setValue((prev => ({ ...prev, isBlockNavigation: false })));
        }
    }, [value]);

    return <div>
        <h3>Page2</h3>
        <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        <div>
            {value ?
                <h5>
                    Navigation Blocked
                </h5>
                :
                ""
            }
        </div>
    </div>
}