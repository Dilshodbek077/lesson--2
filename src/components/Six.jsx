import "./Six.css"
import s from "../images/6-1.png"
import ss from "../images/6-2.png"
import sss from "../images/6-3.png"
import ssss from "../images/6-4.png"



function Six() {
    return (
        <div className="box-10">
            <h1>Over 30+ fresh recipes every week</h1>
            <p>Easy meals designed by professional chefs and nutritionists</p>
            <div className="box-11">
                <img src={s} alt="img" />
                <img src={ss} alt="img" />
                <img src={sss} alt="img" />
                <img src={ssss} alt="img" />
            </div>
            <button className="butt">View our menus</button>
        </div>

    )
}


export default Six