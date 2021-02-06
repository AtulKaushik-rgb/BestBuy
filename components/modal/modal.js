// import React from 'react'
// import styles from './modal.module.css'
// import Backdrop from '../backdrop/backdrop'
// import { Jumbotron } from 'react-bootstrap'

// const modal = () => {
//     return (
//         <div className={styles.backdrop}>
//         {/* //<Backdrop/> */}
//             <div className={styles.modal}>
//                 <div className={styles.content}>
//                     <Jumbotron><h1>Hello this is modal</h1></Jumbotron>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default modal

import React from 'react';
import './modal.css';


const Modal = () => {
  //const showHideClassName = show ? "modal display-block" : "modal display-none";

  console.log('rendering modal');

  return (
    <div className="modal display-block">
      <section className="modal-main">
        <div>Hello</div>
        {/* <button type="button" >
          Close
        </button> */}
      </section>
    </div>
  );
};

export default Modal;