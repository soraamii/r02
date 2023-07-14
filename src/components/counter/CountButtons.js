import { useDispatch } from "react-redux";
import { dec, inc } from "../../reducers/countSlice";

const CountButtons = () => {

  const dispatch = useDispatch()

  const handleClickInc = () => {
    dispatch(inc(2, "INC")) // 파라미터를 추가하면 console에 payload로 찍힘
  }

  const handleClickDec = () => {
    dispatch(dec(2, "DEC"))
  }

  return ( 
    <div>
      <button onClick={handleClickInc}> INC </button>
      <button onClick={handleClickDec}> DEC </button>
    </div>
   );
}
 
export default CountButtons;