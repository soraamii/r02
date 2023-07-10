import { useEffect, useState } from "react";
import ReplyList from "./ReplyList";

const initState = {
  bno: 0,
  page: 1,
  last: true
}

const ReplyWrapper = ({bno}) => {

  const [data, setDate] = useState(initState)

    useEffect(() => {

      data.bno = bno
      data.last = true
      data.page = 1

      setDate({...data})

    },[bno])

    const movePage = (num) => {
      
      data.page = num
      data.last = false

      console.log(num)
      
      setDate({...data})

    }

  return ( 
    <div>
      <ReplyList {...data} movePage={movePage}></ReplyList>
    </div>
   );
}
 
export default ReplyWrapper;