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
    <div className="p-3">
      <div className="m-1 font-bold text-xl text-[#418613]">LIST</div>
      <div>
        <ul>
          {listData.dtoList.map(({bno, title, writer, replyCount}) => 
            <li
            className="p-1 underline text-[707070#] hover:bg-gray-100 border-b-2" 
            key={bno}
            onClick={() => moveRead(bno)}
            >{bno} {title} {writer} [{replyCount}]</li>)}
        </ul>
      </div>
      <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>
    </div>
   );
}
 
export default ListComponent;