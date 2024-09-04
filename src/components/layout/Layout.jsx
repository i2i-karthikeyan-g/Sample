import { Outlet, useBlocker } from "react-router-dom";
import { MenuList } from "../../constants/constant";
import "./layout.css";
import { Menus } from "../menus/Menus";
import { NavigationAlert } from "../navigationalert/NavigationAlert";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

export const Layout = () => {

    const globalData = useContext(GlobalContext);
    console.log({ globalData });

    const blocker = useBlocker((data) => {
        return (globalData.value.isBlockNavigation && data.currentLocation.pathname !== data.nextLocation.pathname);
    });

    const onOk = () => {
        globalData.setValue((prev => ({ ...prev, isBlockNavigation: false })));
        blocker.proceed();
    }

    const onCancell = () => {
        blocker.reset();
    }

        console.log(blocker);

    return <div className="layout">
        <div className="menus-holder">
            <Menus list={MenuList} />
        </div>
        <div className="content-holder">
            <Outlet />
        </div>
        {
            blocker.state === "blocked" ?
                <NavigationAlert
                    info={`Are you sure you want to navigate to ?`}
                    onOk={onOk}
                    onCancell={onCancell}
                />
                :
                ""

        }
    </div>
}