import { useEffect, useState } from "react";
import { postReply } from "../../api/repliesAPI";

const initState = {
  bno:0,
  replyText:'',
  replyFile:'',
  replyer:''
}

const ReplyInput = ({bno, refreshLast}) => {

  const [reply, setReply] = useState({...initState})


  const handleChange = (e) => {
    
    reply[e.target.name] = e.target.value

    setReply({...reply})

  }

  const handleClickRegister = (e) => {

    reply.bno = bno

    postReply(reply).then(data => {


      console.log(data)

      alert(`${data.result}번 댓글 등록 완료`)

      refreshLast()

      setReply({...initState})
      

    })

  }

  return ( 
    <div className="m-4 border-2">
      <div className="font-bold text-[#418613]">REPLY INPUT</div>
      <div className="m-2">
        <input className=" border-2 text-[#707070]" 
          type="text" name="replyText" value={reply.replyText} onChange={handleChange}></input>
      </div>
      <div className="m-2">
        <input className=" border-2 text-[#707070]" 
          type="text" name="replyer" value={reply.replyer} onChange={handleChange}></input>
      </div>
      <div>
      <button 
        className="m-1 p-2 border-2 text-white font-extabold bg-[#418613] hover:bg-green-900 rounded-lg"
        onClick={handleClickRegister}>
        Register
      </button>
      </div>
    </div>
   );
}
 
export default ReplyInput;