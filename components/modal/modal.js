import React from "react";
import "./modal.css";
import { useSelector } from "react-redux";

const Modal = (props) => {
  const showHideClassName = props.display
    ? "modal display-block"
    : "modal display-none";
  //console.log("class name is " + showHideClassName);
  //const showHideClassName = show ? "modal display-block" : "modal display-none";

  //console.log("rendering modal");
  let display = <h1>Sorry no data found</h1>;

 // console.log(props.cartItem);
  // "id": 113,
  // "title": "IPhone 12",
  // "desc": "This is book1",
  // "prices":"1000",
  // "customer_rating":"3",
  // "brand":300,
  // "imageUrl":"https://rukminim1.flixcart.com/image/495/594/kk5rgy80/t-shirt/r/3/4/xxl-tblhdful-d32-tripr-original-imafzkbskeagqyzf.jpeg",
  // "type":402

  if (props.cartItem) {
    //console.log(props.cartItem);
    display = props.cartItem.map((item) => {
      return (
        <>
          <li className="list">
            <div className="content">
              <h1>{item.title}</h1>
              <h3>{item.prices}</h3>
              <h3>{item.customer_rating}</h3>
            </div>
          </li>
          <hr/>
        </>
      );
    });
  }
  return (
    <div className={showHideClassName}>
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
