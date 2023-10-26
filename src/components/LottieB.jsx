import React from "react";
import Lottie from "lottie-react";
import monsterB from "../assets/lottie/monsterB.json";

const style = {
    width: 120,
    height: 120,
}

const LogoB = () => <Lottie animationData={monsterB} loop={true} style={style}/>;

export default LogoB;