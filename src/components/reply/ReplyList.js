import { useEffect, useState } from "react";
import { getRepliesOfBoard } from "../../api/repliesAPI";
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

const ReplyList = ({bno, page, last, movePage, refresh, changeCurrent}) => {
  
  const [listData, setListData] = useState(initState)

  console.log("Reply List...bno: " + bno)

  useEffect(() => {

    getRepliesOfBoard(bno,page,last).then(data => {

      console.log(data) //PageResponseDTO

      setListData(data)

    })

  },[bno,page,last,refresh])
  
  return ( 
    <div className="m-4 border-2">
      <div className="m-1 font-bold text-xl text-[#418613]">
        REPLY
      </div>
      <div>
        <ul>
          {listData.dtoList.map( reply => 
          <li 
          className="p-1 underline text-[#707070]  hover:bg-gray-100 border-b-2" 
          key={reply.rno}
          onClick={() => changeCurrent(reply.rno)}
          >{reply.rno} {reply.replyText} </li>)}
        </ul>
        <ListPageComponent {...listData} movePage={movePage}></ListPageComponent>
      </div>
    </div>
   );
}
 
export default ReplyList;