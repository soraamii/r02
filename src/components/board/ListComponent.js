import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/boardAPI";
import ListPageComponent from "../common/ListPageComponent";



const initState = {
  dtoList:[],
  end:0,
  start:0,
  next:false,
  prev:false,
  pageNums:[],
  page:0,
  size:0,
  reuqestDTO: null
}

const ListComponent = ({queryObj, movePage, moveRead}) => {

  const [listData, setListData] = useState(initState)

  useEffect(() => {

    getList(queryObj).then(data => {
      console.log(data)
      setListData(data)
    })

  },[queryObj])


  return ( 
    <div>
      <div>ListComponent</div>
      <div>
        <ul>
          {listData.dtoList.map(({bno, title, writer, replyCount}) => 
            <li key={bno}
            onClick={() => moveRead(bno)}
            >{bno} {title} {writer} [{replyCount}]</li>)}
        </ul>
      </div>
      <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>
    </div>
   );
}
 
export default ListComponent;