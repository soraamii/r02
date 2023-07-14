import SampleNav from "./nav/SampleNav";

const BasicLayout = ({children}) => {
  return ( 
    <div className="font-['Noto Sans KR'] container mx-auto min-w-[1280px] bg-white">
      <div>
        <SampleNav></SampleNav>
      </div>
      <div>
        {children}
      </div>
    </div>
   );
}
 
export default BasicLayout;