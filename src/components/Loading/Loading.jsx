import React from "react"
import LottieLoading from "../../common/Lotties/loader.json"
import Lottie from "lottie-react"
import './Loading.scss'
export const Loading = () => {
  return<div className="lottie">
      <Lottie animationData={LottieLoading} loop={true} />

  </div> 
}
