import { Link } from "react-router-dom"

export default function Header () {
    const isLogged = false
    return(
        <header className="gf-header">
        {
            isLogged
                ? <Link to="/logout">
                Logout
                </Link>
                : <Link to="/login">
                login
                </Link>
        }
        </header>
    )
}