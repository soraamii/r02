import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/productAPI";
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
      <div>
        <ul className="flex flex-wrap container justify-center">
          {listData.dtoList.map((dto) => 
            <li
            className="w-2/5 h-auto m-2 p-1 text-[707070#] hover:bg-gray-100 border-b-2 rounded-md shadow-lg" 
            key={dto.pno}
            onClick={() => moveRead(dto.pno)}
            >
              <div>
                <div className="text-[#418613] font-extrabold" >
                  {dto.pno}
                </div>
                <div className="flex justify-center items-center">
                <img src={`http://localhost/s_${dto.fname}`}></img>
                </div>
                <div className="text-center text-2xl">
                  {dto.pname} 
                </div>
                <div className="text-center text-2xl">
                  \ {dto.price}
                </div>
                <div className="flex justify-end">
                  <div>REVIEW {dto.reviewCnt} {dto.reviewAvg}</div>
              
                </div>
              </div>
            </li>)}
        </ul>
      </div>
      <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>
    </div>
   );
}
 
export default ListComponent;