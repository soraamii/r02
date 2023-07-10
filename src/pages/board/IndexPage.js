import { Outlet } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

const IndexPage = () => {
  return ( 
    <BasicLayout>
      <div className="p-4 flex justify-center">
        <div className="underline font-extrabold m-2 p-2">List</div>
        <div className="underline font-extrabold m-2 p-2">Register</div>
      </div>
      <div className="h-auto bg-white w-full border-2">
        <Outlet></Outlet>
      </div>
    </BasicLayout>
   );
}
 
export default IndexPage;