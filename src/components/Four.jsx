import "./Four.css"
import f from "../images/4-1.png"
import ff from "../images/4-2.png"
import fff from "../images/4-3.png"
import ffff from "../images/4-4.png"



function Four() {
    return (
        <header>
            <div className="box-1">
                <h1>Why HelloFresh?</h1>
                <div className="box-2">
                    <div className="box-3">
                        <img src={f} alt="img" />
                        <h3>No skimpin’ on the chicken!</h3>
                        <p className="p-p">Or steak, or fish, or plant protein.</p>
                    </div>
                    <div className="box-3">
                    <img src={ff} alt="img" />
                        <h3>No commitment whatsoever</h3>
                        <p className="p-p">Skipping weeks or cancelling is super easy.</p>
                    </div>
                    <div className="box-3">
                    <img src={fff} alt="img" />
                        <h3>The most 5-star reviews</h3>
                        <p className="p-p">Our huge recipe selection wows week after week.</p>
                    </div>
                    <div className="box-3">
                    <img src={ffff} alt="img" />
                        <h3>Fresh and affordable</h3>
                        <p className="p-p">Chef-created deliciousness from $7.49 per meal.</p>
                    </div>
                </div>
                <button className="btn">Get started</button>
            </div>
        </header>

    )
}

export default Four