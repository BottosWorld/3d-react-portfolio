import React from "react";
import Lottie from "lottie-react";
import monsterB from "../assets/lottie/monsterB.json";

const style = {
    width: 100,
    height: 100,
}

const LogoB = () => <Lottie animationData={monsterB} loop={true} style={style}/>;

export default LogoB;