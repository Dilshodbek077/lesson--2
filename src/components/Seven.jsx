import "./Seven.css"
import d from "../images/7-1.png"
import dd from "../images/7-2.png"
import ddd from "../images/7-3.png"
import dddd from "../images/7-4.png"


function Seven() {
    return (
        <div className="box-20">
            <h1>Cook it. Love it. Tag it #HelloFreshPics</h1>
            <p>Follow us on Instagram @hellofresh</p>
            <div className="box-21">
                <div className="box-22">
                    <img src={d} alt="img" />
                    <h3>bdanielle1285</h3>
                    <p className="polo">My little chef helping me make dinner tonight and trying out some of his new kitchen utensils I got him!</p>
                </div>
                <div className="box-22">
                <img src={dd} alt="img" />
                    <h3>lilpepthekelpie</h3>
                    <p className="polo">I’m helping out 🧑🏽‍🍳 #masterchef #bestboy</p>
                </div>
                <div className="box-22">
                <img src={ddd} alt="img" />
                    <h3>mandi14eid</h3>
                    <p className="polo">Drew and the kids made mom dinner tonight! Drew and I had our doubts but WOW was it tasty!</p>
                </div>
                <div className="box-22">
                <img src={dddd} alt="img" />
                    <h3>our_lovely_stride</h3>
                    <p className="polo">We had a cooking class yesterday and we had such an amazing time. 😁 They had such a great time working as a team and I can’t wait for our weekly cooking class 🙌🏻😁</p>
                </div>
            </div>
        </div>
    )
}

export default Seven