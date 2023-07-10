import { useEffect, useState } from "react";
import { deleteReply, getReply, putReply } from "../../api/repliesAPI";

const initState = {
    rno:0,
    bno:0,
    replyText:'',
    replyFile:'',
    replyer:''
}

const ReplyRead = ({rno,cancleRead,refreshPage}) => {

    console.log("ReplyRead..........." + rno)

    const [reply,setReply] = useState(initState)

    useEffect(() =>{
        getReply(rno).then(data => {
            console.log(data)
            setReply(data)
        })
    },[rno])

    const handleClickDelete = () => {

        deleteReply(rno).then(data => {
            alert(`${data.result}번 댓글이 삭제되었습니다.`)
            refreshPage(true)
        })

    }

    const handleChange = (e) => {
        reply[e.target.name] = e.target.value
        setReply({...reply})
    }

    const handleClickModify = () => {

        putReply(reply).then(data => {
            alert(`${data.result} 수정되었습니다`)
            refreshPage(true)
        })

    }

    if(reply.replyText === '해당 글은 삭제되었습니다.'){
        return <></>
    }


    return ( 
        <div className="m-4 border-2">
            <div className="m-1 font-bold text-xl text-[#418613]">REPLY READ</div>
            <div>
                <div className="p-1 text-[#707070]">
                  <span className="font-semibold text-[#418613]">NO </span>  
                  {rno}</div>
                <div className="p-1 text-[#707070]"> 
                    <sapn className="font-semibold text-[#418613]">CONTENT </sapn> 
										<input
										className=" border-2"
                    type="text" 
                    name="replyText" 
                    onChange={handleChange} 
                    value={reply.replyText} > 
                    </input>
                </div>
                <div className="p-1 text-[#707070]">
									<span className="font-semibold text-[#418613]">REPLYER </span>
									{reply.replyer}
								</div>
            </div>
            <div>
                <button 
									className="m-1 p-2 border-2 text-white font-extabold bg-sky-600 hover:bg-sky-700 rounded-lg"
									onClick={handleClickModify}>
									MOD
								</button>
                <button 
									className="m-1 p-2 border-2 text-white font-extabold bg-red-600 hover:bg-red-700 rounded-lg"
									onClick={handleClickDelete}>
									DEL
								</button>
                <button 
									className="m-1 p-2 border-2 text-white font-extabold bg-[#418613] hover:bg-green-900 rounded-lg"
									onClick={cancleRead}>
									CANCEL
								</button>
            </div>

        </div>
     );
}
 
export default ReplyRead;