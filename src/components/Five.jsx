import "./Five.css"
import fi from "../images/five.png"


function Five() {
    return (
        <div className="box-5">
            <div className="box-6">
                <div className="box-7">
                    <img src={fi} alt="img" />
                </div>
                <div className="box-8">
                    <h1>What’s inside each box?</h1>
                    <p className="pol">✓ Easy-to-follow recipes with clear nutritional info</p>
                    <p className="pol">✓ High-quality ingredients sourced straight from the farm</p>
                    <p className="pol">✓ Convenient meal kits that fit perfectly in the fridge</p>
                    <p className="pol">✓ A fun cooking experience that makes you feel unstoppable</p>
                    <a className="aa" href="#">✓ Innovative packaging designed to reduce waste</a>
                    <button className="btn2">View our plans</button>

                </div>

            </div>
        </div>

    )
}


export default Five