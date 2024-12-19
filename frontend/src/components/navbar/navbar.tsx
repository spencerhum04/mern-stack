import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="/">
                <div className="text-3xl font-bold">ExerPro</div>
            </Link>
        </div>
    )
}

export default Navbar;