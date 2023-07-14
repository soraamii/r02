import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "../util/cookieUtil";

const loadCookie = () => {

  const loginObj = getCookie("login")

  console.log("login......obj....")
  console.log(loginObj)

  if(!loginObj) {
    
    return initState

  }
  
  return loginObj

}

const initState = {
  email: '',
  signed: false
}

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: loadCookie(),   // 로그인 했는지, 안 했는지
  reducers: {
    requestLogin: (state, param) => { // param = action
      const payload = param.payload
      console.log("requestLogin", payload)
      const loginObj = {email: payload.email, signed:true}

      setCookie("login", JSON.stringify(loginObj), 1)

      return loginObj
    } 
  }

})
export const {requestLogin} = loginSlice.actions // 외부 호출하는 함수들

export default loginSlice.reducer // 실체 노출되는 건 reducer