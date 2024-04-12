import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import tv from "../images/tv.png";
import movie from "../images/movie.png";
import love from "../images/love.png";
import user from "../images/user.png";
import { Dispatch, SetStateAction, useState } from "react";

interface menuProp {
  setMenu: Dispatch<SetStateAction<string>>;
  setSearch: Dispatch<SetStateAction<boolean>>;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  search: boolean;
}

const Navbar = (props: menuProp) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300  bg-black h-screen text-white relative`}
      >
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <img
            onClick={() => {
              props.setSearch(false);
              props.setMenu("home");
            }}
            src={logo}
            className="w-16 ml-8 mt-8"
          />
          <img
            onClick={() => {
              props.setSearch(false);
              props.setMenu("tv");
            }}
            src={tv}
            className=" w-16 ml-7 mt-8"
          />
          <img
            onClick={() => {
              props.setSearch(false);
              props.setMenu("movie");
            }}
            src={movie}
            className=" w-16 ml-7 mt-8"
          />
          <Link to="/list">
            <img
              
              src={love}
              className=" w-16 ml-7 mt-8"
            />
          </Link>
          <Link to="/profile">
            <img
              
              src={user}
              className=" w-9 ml-12 mt-8"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
