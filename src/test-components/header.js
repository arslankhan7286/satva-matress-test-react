import React, { useState } from 'react';
import Matress from './matress';

function Header(props) {
    const [count, setCount] = useState(0)
    const  counterHandler =  () => {
        setCount(count+1)

    }

      return ( 
            <>
                <div className="header">
                    <div className="container">
                        <div className="header_items">
                            <div className="title">
                                <h1>saatva</h1>
                            </div>
                            <div className="cart-icon">
                            <i class="bi bi-cart3"></i>
                            <span>{count}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Matress counterHandler={counterHandler}/>
            </>
         );
}
 
export default Header;