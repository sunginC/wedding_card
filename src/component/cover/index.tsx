import { useState } from "react"
import { COVER_IMAGE } from "../../images"
import { LazyDiv } from "../lazyDiv"


export const Cover = () => {
  return (
  <LazyDiv className="cover">
    <div className="image-wrapper">
      <img
        src={COVER_IMAGE}
        alt="cover"
      />
    </div>
      {/* 👇 하단 문구 영역 */}
      <div className="cover-text">
        <div className="date">05.17</div>
        <div className="time">SUN PM 12:00</div>
        <div className="place">시크릿 가든</div>

        <div className="names">
          <span>성진</span>
          <span>아리</span>
        </div>
      </div>

    < div className="cover-bottom" />
  </LazyDiv>
)

}
