import { ReactComponent as Rectangle } from "../assets/img/svg/rectangle.svg"
import { ReactComponent as Circle } from "../assets/img/svg/bg-pattern-home-1.svg"

export function AppHeader() {

    return (<article className="header-container full main-layout">
        {/* <Circle className="circle"/> */}
        <section className="header">
            <div className="find">
                <span>Find the</span>
                <div>best <span className="talent">talent</span></div>
            </div>
            <div className="header-content">
                <Rectangle />
                <div className="card">
                    Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</div>
            </div>
        </section>
    </article>
    )
}