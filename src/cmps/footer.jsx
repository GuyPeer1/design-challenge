export function Footer() {
    return (<article className="footer-container full main-layout">
    <section className="footer">
        <div className="footer-left">
            <div className="team">
                myteam
                <div className="team-details">
                    <span className="home">home</span>
                    <span className="about">about</span>
                </div>
            </div>

            <div className="address">
                <span className="adress-row">987  Hillcrest Lane</span>
                <span className="adress-row">Irvine, CA</span>
                <span className="adress-row">California 92714</span>
                <span className="adress-row">Call Us : 949-833-7432</span>
            </div>
        </div>
        <div className="social">
            <img src={require(`../assets/img/icons/social.png`)} alt="" />
            <span className="copy">Copyright 2020. All Rights Reserved</span>
        </div>
    </section>
    </article>
    )
}