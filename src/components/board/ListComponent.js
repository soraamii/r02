import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/boardAPI";


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

const ListComponent = ({queryObj, movePage}) => {

  const [listData, setListData] = useState(initState)

  useEffect(() => {

    getList(queryObj).then(data => {
      console.log(data)
      setListData(data)
    })

  },[queryObj])

  const handleCkickPage = (pageNum) => {
    movePage(pageNum)
  }

  return ( 
    <div>
      <div>ListComponent</div>
      <div>
        <ul>
          {listData.dtoList.map(({bno, title, writer, replyCount}) => <li key={bno}>{bno} {title} {writer} [{replyCount}]</li>)}
        </ul>
      </div>
      <div>
        <div className="flex m-4 p-2 ">
          <ul className="flex">

            {listData.prev ? <li className="m-2 p-2 bg-red-300 border-2 text-white font-bold"
            onClick={() => handleCkickPage(listData.start -1)}
            >PREV</li> : <></>}

            {listData.pageNums.map(num =>
              <li 
              className="m-2 p-2 bg-red-300 border-2 text-white font-bold"
              onClick={() => handleCkickPage(num)}
              key={num}>
                {num}
              </li>)}

              {listData.next ? <li className="m-2 p-2 bg-red-300 border-2 text-white font-bold"
              onClick={() => handleCkickPage(listData.end + 1)}
              >NEXT</li> : <></>}
          </ul>
        </div>
      </div>
    </div>
   );
}
 
export default ListComponent;