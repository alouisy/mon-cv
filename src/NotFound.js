import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Oups..</h2>
            <p>Cette page n'exsiste pas :(</p>
            <Link to="/">Retourner à l'accueil</Link>
        </div>
    );
}

export default NotFound;