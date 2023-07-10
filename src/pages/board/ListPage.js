import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import ListComponent from "../../components/board/ListComponent";
import ListSearchComponent from "../../components/board/ListSearchComponent";
import useQueryObj from "../../hooks/useQueryObj";




const ListPage = () => {

  const {queryObj, setSearch, moveRead} = useQueryObj()

  console.log("queryObj --------")
  console.log(queryObj)

  const movePage = (num) => {
    console.log("NUM ------------" + num)
    queryObj.page = num
    setSearch({...queryObj})
  }

  const moveSearch = (type, keyword) => {
    queryObj.page = 1
    queryObj.type = type
    queryObj.keyword = keyword

    setSearch({...queryObj})
  }




  return ( 
    <div>
      <div className="p-2 text-2xl text-[#418613] font-bold border-b-2 text-center">Board List</div>
      <ListSearchComponent queryObj={queryObj} moveSearch={moveSearch}></ListSearchComponent>
      <ListComponent 
        queryObj={queryObj} 
        movePage = {movePage} 
        moveRead={moveRead}>  
      </ListComponent>
    </div>
   );
}
 
export default ListPage;