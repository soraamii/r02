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
    <div>
      <div className="text-[#418613] text-xl font-semibold">PRODUCTS LIST</div>
      <ListComponent
        queryObj={queryObj} 
        movePage = {movePage} 
        moveRead={moveRead}>  
      </ListComponent>
    </div>
   );
}
 
export default ListPage;