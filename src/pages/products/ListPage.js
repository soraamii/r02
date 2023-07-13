import ListComponent from "../../components/products/ListComponent";
import useQueryObj from "../../hooks/useQueryObj";

const ListPage = () => {

  const {queryObj, setSearch, moveRead, moveList} = useQueryObj()

  const movePage = (num) => {
    console.log("NUM ------------" + num)
    queryObj.page = num
    setSearch({...queryObj})
  }

  return ( 
    <div className="text-2xl text-[#418613] font-extrabold">
      PRODUCTS LIST
      <ListComponent
        queryObj={queryObj} 
        movePage = {movePage} 
        moveRead={moveRead}>  
      </ListComponent>
    </div>
   );
}
 
export default ListPage;