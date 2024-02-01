"use client"
import Lottie from "lottie-react"
import Loder from "./data.json"
import styles from "./animate.module.css"
function LottieAnimation() {
    return (
        <>
            <div className={styles.box}>
                <Lottie animationData={Loder}/>
            </div>
        </>
    );
}

export default LottieAnimation;