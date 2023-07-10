import { useEffect, useState } from "react";
import { getOne } from "../../../api/boardAPI";

const initState = {
  bno:0,
  title:'',
  content:'',
  writer:'',
  regDate:'',
  modDate:''
}

const ReadComponent = ({bno}) => {

  const [board, setBoard] = useState(initState)

  useEffect(() => {

    getOne(bno).then(data => {
      setBoard(data)

    })

  },[bno])

  return ( 
    <div className="m-1 border-b-2">
      <div className="p-1 text-[#707070]">
        <span className="font-semibold text-[#418613]">No </span> 
        {board.bno}
      </div>
      <div className="p-1 text-[#707070]">
        <span className="font-semibold text-[#418613]">TITLE </span>
        {board.title}
      </div>
      <div className="p-1 text-[#707070]">
        <span className="font-semibold text-[#418613]">CONTENT </span> 
        {board.content}
      </div>
      <div className="p-1 text-[#707070]">
        <span className="font-semibold text-[#418613]">WRITER </span> 
        {board.writer}
      </div>
      <div className="p-1 text-[#707070]">
        <span className="font-semibold text-[#418613]">DATE </span> 
       {board.regDate}
      </div>
      <div className="p-1 text-[#707070]">
      <span className="font-semibold text-[#418613]">UPDATE </span>  
       {board.modDate}
      </div>

    </div>
   );
}
 
export default ReadComponent;