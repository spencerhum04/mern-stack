import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="/">
                <div className="underline">Return to Home</div>
            </Link>
        </div>
    )
}

export default Navbar;