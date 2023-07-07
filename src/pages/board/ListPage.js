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
      Board List Page
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