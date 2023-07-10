import { Link } from "react-router-dom";

const SampleNav = () => {
  return ( 
    <div className="flex p-2 text-[#418613] font-extrabold border-b-2">
      <div className="m-4 text-3xl">
        <Link to="/">MAIN</Link>
      </div>
      <div className="m-4 text-3xl">
      <Link to="/about">ABOUT</Link>
      </div>
      <div className="m-4 text-3xl">
      <Link to="/board/list">BOARD</Link>
      </div>
    </div>
   );
}
 
export default SampleNav;