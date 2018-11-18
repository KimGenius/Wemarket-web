import jwt from 'jsonwebtoken'
import cookie from 'js-cookie'

export const host = 'http://localhost:3000'
export const prodHost = 'http://app.wemarket.kr'
export const getCookie = () => {
  const cookieToken = cookie.get('WMUD')
  return jwt.decode(cookieToken)
}
const config = {
  host,
  prodHost,
  getCookie
}
export default config
