
import "./navigationalert.css"
    ;
export const NavigationAlert = (props) => {

    return <div className="navigation-alert-container">
        <div className="navigation-alert-content">
            <h3 className="info">
                {props.info}
            </h3>
            <div className="footer">
                <button className="btn" onClick={() => props.onOk?.()}>
                    OK
                </button>
                <button className="btn" onClick={() => props.onCancell?.()}>
                    Cancell
                </button>
            </div>
        </div>
    </div>
}