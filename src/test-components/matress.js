import React, { useState } from 'react';
function Matress(props) {

        const [SaatvaClassic, setSaatvaClassic] =useState(false)
        const [LoomLeaf, setLoomLeaf] =useState(true)
        const [Zenhaven, setZenhaven] =useState(false)

        const setclassic = () =>{
            setSaatvaClassic(true)
            setLoomLeaf(false)
            setZenhaven(false)
        }
        const setLoom = () =>{
            setSaatvaClassic(false)
            setLoomLeaf(true)
            setZenhaven(false)
        }
        const setZen = () =>{
            setSaatvaClassic(false)
            setLoomLeaf(false)
            setZenhaven(true)
        }
        const counterHandler =() => {
            props.counterHandler()
        }
        
        return(
        <div className="matress">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="matress-gallery">
                            <div className={`${SaatvaClassic ? " show " : "hide"} product-card`}>
                                <img src="/images/1.e4b8a6d6.jpg" alt="" />
                            </div>
                            <div className={`${LoomLeaf ? " show " : "hide"} product-card`}>
                                <img src="/images/2.3a13c0b9.jpg" alt="" />
                            </div>
                            <div className={`${Zenhaven ? " show " : "hide"} product-card`}>
                                <img src="/images/3.f42f5c6c.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="matress-selector">
                            <h2>Choose Your Matress </h2>
                            <p>SELECT MATRESS TYPE</p>
                            <button id="selector-btn" 
                            onClick={setclassic} 
                            className={SaatvaClassic ? "button-active" : ""}>
                                Saatva Classic
                            </button>
                            <button id="selector-btn"
                                onClick={setLoom}
                                className={LoomLeaf ? "button-active" : ""}>
                                Loom & Leaf
                            </button>
                            <button id="selector-btn"
                                onClick={setZen}
                                className={Zenhaven ? "button-active" : ""}>
                                Zenhaven
                            </button>
                            <div className="matress-price">
                                <div className={`${SaatvaClassic ? " show " : "hide"} matress-pricess`}>
                                    <p>Saatva Classic Matress</p>
                                    <span>$1,100</span>
                                </div>
                                <div className={`${LoomLeaf ? " show " : "hide"} matress-pricess`}>
                                    <p>Loom & Leaf Matress</p>
                                    <span>$1,200</span>
                                </div>
                                <div className={`${Zenhaven ? " show " : "hide"} matress-pricess`}>
                                    <p>Zenhaven Matress</p>
                                    <span>$1,300</span>
                                </div>
                            </div>
                            <div className="addcart-btn">
                                <button onClick={counterHandler}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
 
export default Matress;