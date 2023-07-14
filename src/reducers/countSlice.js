import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({

  name: "CountSlice",
  initialState: {num: 5},
  reducers: {
    inc: (state, param, third) => { // 3번째 파라미터는 undefined가 됨
      console.log(state)
      console.log(param)
      console.log(third)
      return {num: state.num + param.payload} // return은 새로운 상태
    },
    dec: (state, param, third) => {
      console.log(state)
      console.log(param)
      console.log(third)
      return {num: state.num - param.payload}
    }
  }

})

export const {inc, dec} = countSlice.actions // 외부 호출하는 함수들

export default countSlice.reducer // 실체 노출되는 건 reducer