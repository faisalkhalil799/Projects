import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import '../style/Menu.scss';
import Cart from '../components/Cart';
import { fetchCart } from '../action';
import { connect } from 'react-redux';

Modal.setAppElement('#modal');

const Menu = (props) => {

    const [renderMenu, setRenderMenu] = useState(props.menu);
    const [updated, setUpdated] = useState(false);


    useEffect(() => {
        setRenderMenu(props.menu);
    }, [props.menu]);


    const update = (mName, e) => {
        const { value } = e.target;

        const arr = [...renderMenu];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].name === mName) {
                arr[i].quantity = value;
            }
        }
        setUpdated(true);
        setRenderMenu(arr);
        
    };

    return (
        <div className="menu">
            <div className="menus">
                {
                    renderMenu ?
                        <>{
                            renderMenu.map((menu, index) => (
                                <div className="item" key={index}>
                                    <div className="menu-item">
                                        <img src={menu.image} alt="menu Image"></img>
                                        <div className="menu-content">
                                            <div className="nameAndPrice">
                                                <h6>{menu.name}</h6>
                                                <div> {menu.price > 0 ?'$ ' + Number(menu.price).toFixed(2)+ ' USD': "Price Not Available"} </div>
                                            </div>
                                            <p>{menu.description}</p>
                                            <div className="add">
                                                <input type={'number'}  min={1} defaultValue={"1"} onChange={(e) => update(menu.name, e)} ></input>
                                               
                                                <Cart item={menu} isUpdate={updated} isNavBar={false} canAdd={menu.price > 0 ? true : false}/>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        </> :
                        <>
                            {
                                <div></div>
                            }
                        </>
                }

            </div>

        </div>
    );
};

const mapStateToProps = (state) => {
    return { cart: state.cart }
};

export default connect(mapStateToProps, { fetchCart })(Menu);