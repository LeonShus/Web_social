import classes from'./Aside.module.css'

const Aside = () => {
    return (
        <aside className={classes.aside}>
            <nav className={classes.nav}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
        </aside>
    )
}

export default Aside;