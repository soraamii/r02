import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginNav from "./LoginNav";

const SampleNav = () => {

  const todoArr = useSelector(state => state.todo)

  return ( 
    <div className="flex p-2 text-[#418613] font-extrabold border-b-2">
      <div className="m-4 text-3xl">
        <Link to="/">MAIN</Link>
        <span className="bg-red-500 font-extrabold text-white">{todoArr.length}</span>
      </div>
      <div className="m-4 text-3xl">
      <Link to="/about">ABOUT</Link>
      </div>
      <div className="m-4 text-3xl">
      <Link to="/products/list">PRODUCTS</Link>
      </div>
      <div className="m-4 text-3xl">
      <Link to="/board/list">BOARD</Link>
      </div>
      <div>
        <LoginNav></LoginNav>
      </div>
    </div>
   );
}
 
export default SampleNav;