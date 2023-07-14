const { Cookies } = require("react-cookie");

// 쿠키에 넣음
const cookies = new Cookies()

export const setCookie = (cookieName, value, days) => {

  const expires = new Date()
  expires.setUTCDate(expires.getUTCDate() + days)

  cookies.set(cookieName, value, {path: "/", expires: expires})

}

export const getCookie = (cookieName) => {
  return cookies.get(cookieName)
}

export const removeCookie = (cookieName, path="/") => {
  cookies.remove(cookieName, {path:path})
}