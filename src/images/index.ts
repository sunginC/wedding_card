import coverImage1 from "./CBY-5759.jpg";
import coverImage2 from "./CBY-5840.jpg";
import coverImage3 from "./CBY-5870.jpg";
import coverImage4 from "./CBY-6548.jpg";

const coverImages = [
     coverImage1
    ,coverImage2
    ,coverImage3
    ,coverImage4
];
const COOKIE_KEY = "cover_index";
function getCookie(name: string) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
  return null;
}
// 쿠키 쓰기
function setCookie(name: string, value: string, days = 7) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; path=/; expires=${d.toUTCString()}; SameSite=Lax`;
}

// 이전 인덱스 가져오기
let index = parseInt(getCookie(COOKIE_KEY) || "-1", 10);

// 첫 방문이면 랜덤 선택
if (index === -1) {
  index = Math.floor(Math.random() * coverImages.length);
} else {
  // 이후 방문이면 순차적으로 다음 이미지
  index = (index + 1) % coverImages.length;
}

// 쿠키에 저장
setCookie(COOKIE_KEY, index.toString());
export const COVER_IMAGE = coverImages[index];