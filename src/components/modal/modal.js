import React from "react";
import "./modal.css";

const Modal = (props) => {
  const showHideClassName = props.display
    ? "modal display-block"
    : "modal display-none";


  let display = <h1>Sorry no data found</h1>;

  if (props.cartItem) {
    display = props.cartItem.map((item) => {
      return (
        <>
          <li className="list">
            <div className="content">
              <div className="card_image">
              <img
                src={item.imageUrl}
                />
              </div>
              <div className="inner_container">
              <h4 >{item.title}</h4>
              <h6 >₹ {item.prices}</h6>
              <h6 >{item.customer_rating} ★</h6>
              </div>
            </div>
          
            <button onClick={()=>props.handleRemove(item)}>Remove</button>
          </li>
          <hr/>
        </>
      );
    });
  }
  return (
    <div onClick={props.handleClose} className={showHideClassName}>
      <section className="modal-main">
      <button className='modalbtn' type="button" onClick={props.handleClose}>
          X
      </button>
        {display}
      </section>
    </div>
  );
};

export default Modal;
