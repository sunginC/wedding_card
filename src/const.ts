import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2026-05-17 12:00", "Asia/Seoul")
export const WEDDING_DATE_FORMAT = `YYYY년 MMMM D일 dddd A h시${WEDDING_DATE.minute() === 0 ? "" : " m분"}`

export const HOLIDAYS = [5,25]

export const LOCATION = "시크릿가든 웨딩홀"
export const LOCATION_ADDRESS = "대전 유성구 수통골로71번길 39 시크릿가든웨딩"

export const BRIDE_FULLNAME = ""
export const BRIDE_FIRSTNAME = ""
export const BRIDE_TITLE = "딸"
export const BRIDE_FATHER = ""
export const BRIDE_MOTHER = ""
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010--",
    account: "국민은행 ",
    kakaopay: "",
  },
  {
    relation: "신부 아버지",
    name: BRIDE_FATHER,
    phone: "010--",
    account: "농협은행 ",
     kakaopay: "",
  },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    phone: "010--",
    account: "농협은행 016620778008",
     kakaopay: "",
  },
]

export const GROOM_FULLNAME = ""
export const GROOM_FIRSTNAME = ""
export const GROOM_TITLE = "아들"
export const GROOM_FATHER = ""
export const GROOM_MOTHER = ""
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "010--",
    account: "신한은행 ",
    kakaopay: "",
  },
  {
    relation: "신랑 아버지",
    name: GROOM_FATHER,
    phone: "010--",
    account: "농협은행 ",
     kakaopay: "",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: "010--",
    account: "농협은행 ",
      kakaopay: "",
  },
]
