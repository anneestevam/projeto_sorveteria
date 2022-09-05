import { Link } from "react-router-dom";

export default function Topo() {
    return (
        <header>
            <di>
                <img src="/assets/logo.png" alt="logo gelateria"/>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/sabores">Sabores</Link>
                    <Link to="/sobre">Sobre</Link>
                </nav>
            </di>
        </header>
    )
}