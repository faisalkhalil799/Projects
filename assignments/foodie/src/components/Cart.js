import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import Modal from 'react-modal';
import { fetchCart, fetchCartAfterRemove } from "../action";
import '../style/Menu.scss';
import { fetchPayment } from "../action";

const customStyles = {
    content: {
        position: 'fixed',
        right: "0%",
        top: '0',
        bottom: 'auto'
    },
};

Modal.setAppElement('#modal');

const Cart = (props) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const [pay, setPay] = useState(0);
    const [length, setLength] = useState(0);

    useEffect(() => {
        setCart(props.cart);
        props.fetchPayment(props.cart);
        setPay(props.pay);

        let l = 0;

        for (let i = 0; i < props.cart.length; i++) {
            l += Number(props.cart[i].quantity);
        }

        setLength(l);

    }, [props.cart]);


    useEffect(() => {
        setPay(props.pay);
    }, [props.pay]);



    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);

    }

    const update = (mName, e) => {
        const { value } = e.target;

        const arr = [...cart];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].name === mName) {
                arr[i].quantity = value;
            }
        }
        setCart(arr);
    };

    const onRemove = (item) => {
        props.fetchCartAfterRemove(item);
    };


    const onRefresh = (cart) => {

        props.fetchPayment(cart);
        setPay(props.pay);
    };

    const addToCart = () => {
        if (props.isUpdate === false) {

            let obj = props.item;
            obj.quantity = obj.quantity + 1;

            props.fetchCart(obj);
            setCart(props.cart);

        } else {
            props.fetchCart(props.item);
            setCart(props.cart);

        }

    };


    return (
        <Fragment>
            {
                props.isNavBar ?
                    <div className="cart-bg" onClick={() => openModal()} >
                        <svg width="17px" height="17px" viewBox="0 0 17 17"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><path d="M2.60592789,2 L0,2 L0,0 L4.39407211,0 L4.84288393,4 L16,4 L16,9.93844589 L3.76940945,12.3694378 L2.60592789,2 Z M15.5,17 C14.6715729,17 14,16.3284271 14,15.5 C14,14.6715729 14.6715729,14 15.5,14 C16.3284271,14 17,14.6715729 17,15.5 C17,16.3284271 16.3284271,17 15.5,17 Z M5.5,17 C4.67157288,17 4,16.3284271 4,15.5 C4,14.6715729 4.67157288,14 5.5,14 C6.32842712,14 7,14.6715729 7,15.5 C7,16.3284271 6.32842712,17 5.5,17 Z" fill="white" fillRule="nonzero"></path></g></svg>
                        <div className="count">{length}</div>
                    </div>
                    :
                    <button
                        onClick={() => {
                            if (props.canAdd) {
                                addToCart();
                                props.fetchPayment(props.cart);
                                openModal();
                            } else {
                                alert("Cannot Add Item");
                            }

                        }}
                    >
                        Add to cart
                    </button>
            }




            <Modal className="modal"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                backdropOpacity={0.3}
                contentLabel="Example Modal"
            >
                <div className="modal-config">
                    <div className="modal-header">
                        <h1>Your Order</h1>
                        <button onClick={closeModal}>X</button>
                    </div>
                    <hr />
                    <div className="modal-content" onClick={() => onRefresh(cart)}>
                        {cart.length > 0 ?
                            <>
                                {
                                    cart.map((item, index) => (
                                        <div className="item" key={index}>
                                            <img src={item.image} alt="Item Image"></img>
                                            <div className="item-desc">
                                                <div>
                                                    <div className="name">{item.name}</div>
                                                    <div className="price">$ {item.price} USD</div>
                                                    <div className="remove" onClick={() => onRemove(item)}>Remove</div>
                                                </div>
                                                <input value={item.quantity} onChange={(e) => update(item.name, e)}></input>
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
                    <div className="modal-footer">
                        <hr />
                        <div className="amount">
                            <h3>SubTotal</h3>
                            <div>$ {Number(pay).toFixed(2)} USD</div>
                        </div>
                        <div className="checkout">Chechout</div>

                    </div>
                </div>
            </Modal>
        </Fragment>
    );

}

const mapStateToProps = (state) => {
    return { cart: state.cart, pay: state.pay }
};

export default connect(mapStateToProps, { fetchCart, fetchPayment, fetchCartAfterRemove })(Cart);