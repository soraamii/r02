import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name:"todoSlice",
  initialState: ['AAA', 'BBB'],
  reducers: {
    addTodo: (state, param) => {
      console.log("todoState: " , state)

      return [...state, param.payload]
    }
  }
})
export const {addTodo} = todoSlice.actions // 외부 호출하는 함수들

export default todoSlice.reducer // 실체 노출되는 건 reducer