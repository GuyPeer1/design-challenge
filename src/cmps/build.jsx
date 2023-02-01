export function Build() {

    return (<section className="build build-full-width">
        <div className="build-main">
            Build & manage distributes teams like no one else.
        </div>
        <ul className="build-list">
            <li>
                <img className="list-img" src={require(`../assets/img/svg/Group11.png`)} alt="" />
                <div className="txt">
                    <span className="head">Experienced Individuals</span>
                    <span className="txt"> Our network is made up of highly experienced professionals who are passionate about what they do.</span>
                </div>
            </li>
            <li>
            <img className="list-img" src={require(`../assets/img/svg/Group12.png`)} alt="" />
                <div className="txt">
                <span className="head">Easy to Implement</span>
                <span className="txt"> Our processes have been refined over years of implementation meaning our teams always deliver.</span>
                </div>
            </li>
            <li>
            <img className="list-img" src={require(`../assets/img/svg/Group13.png`)} alt="" />
                <div className="txt">
                <span className="head">Enhanced Productivity</span>
                <span className="txt"> Our customized platform with in-built analytics helps you manage your distributed teams.</span>
                </div>
            </li>
        </ul>
    </section>
    )
}