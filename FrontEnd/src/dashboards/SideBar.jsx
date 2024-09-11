import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="w-56 bg-cyan-50 h-screen">
      <ul className="flex flex-col gap-10   items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
