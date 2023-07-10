import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ReadComponent from "../../components/board/read/ReadComponent";
import ReplyWrapper from "../../components/reply/ReplyWrapper";

const ReadPage = () => {

  const {queryObj, moveList} = useQueryObj()
  const {bno} = useParams()
  
  console.log(bno)
  console.log(queryObj)

  return ( 
    <div>
      <div className="font-bold text-2xl text-[#418613]">READ</div>
      <ReadComponent bno={bno}></ReadComponent>
      <ReplyWrapper bno={bno}></ReplyWrapper>
      <button 
        className="m-1 p-2 border-2 text-white font-extabold bg-[#418613] hover:bg-green-900 rounded-lg"
        onClick={e => moveList()}>
        List
      </button>
    </div>
   );
}
 
export default ReadPage;