import React from "react";
import Lottie from "lottie-react";
import monsterB from "../assets/lottie/monsterB.json";

const style = {
    width: 60,
    height: 60,
}

const LottieBicon = () => <Lottie animationData={monsterB} loop={true} style={style}/>;

export default LottieBicon;