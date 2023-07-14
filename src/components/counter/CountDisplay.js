import { useSelector } from "react-redux";

const CountDisplay = () => {

  // 모든 상태를 다 받음
  // 어떤 것을 선별해 올 것인지
  const obj = useSelector(state => state.counter)

  console.log(obj)


  return ( 
    <div className="text-4xl">
      COUNT: {obj.num}
    </div>
   );
}
 
export default CountDisplay;