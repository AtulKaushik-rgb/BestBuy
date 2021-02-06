import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './product.module.css'

import React from 'react'

const product = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
<Carousel
   swipeable={true}
//   draggable={false}
//   showDots={true}
  responsive={responsive}
  //ssr={true} // means to render carousel on server-side.
  infinite={false}
  //autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  //keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  //removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div><img style={{width:'200px',height:'200px'}} src="https://rukminim1.flixcart.com/image/150/150/jxc5a4w0/bag/z/t/2/sm-dome-sat-lavie-8-original-imafhrgbzdfmxsdy.jpeg" alt="First slide"></img></div>
  <div><img style={{width:'200px',height:'200px'}} src="https://rukminim1.flixcart.com/image/150/150/jw9ke4w0/backpack/z/j/g/player-backpack-01-teal-fr3-0-11-101-backpack-american-tourister-original-imafgzhf8bdfgvw3.jpeg" alt="First slide"></img></div>
  <div><img style={{width:'200px',height:'200px'}} src="https://rukminim1.flixcart.com/image/150/150/khkvukw0-0/shoe/n/v/w/hiw12-7-reebok-black-nacho-original-imafxk87agx9hyvz.jpeg"></img></div>
  <div><img style={{width:'200px',height:'200px'}} src="https://rukminim1.flixcart.com/flap/150/150/image/00617aba3b2e6acc.jpg" alt="First slide"></img></div>
  <div><img style={{width:'200px',height:'200px'}} src="https://rukminim1.flixcart.com/image/150/150/jxc5a4w0/bag/z/t/2/sm-dome-sat-lavie-8-original-imafhrgbzdfmxsdy.jpeg" alt="First slide"></img></div>
  <div><img style={{width:'200px',height:'200px'}} src="https://rukminim1.flixcart.com/image/150/150/jw9ke4w0/backpack/z/j/g/player-backpack-01-teal-fr3-0-11-101-backpack-american-tourister-original-imafgzhf8bdfgvw3.jpeg" alt="First slide"></img></div>
  <div><img style={{width:'200px',height:'200px'}} src="https://rukminim1.flixcart.com/image/150/150/khkvukw0-0/shoe/n/v/w/hiw12-7-reebok-black-nacho-original-imafxk87agx9hyvz.jpeg"></img></div>
  <div><img style={{width:'200px',height:'200px'}} src="https://rukminim1.flixcart.com/flap/150/150/image/00617aba3b2e6acc.jpg" alt="First slide"></img></div>
  <div><img style={{width:'200px',height:'200px'}} src="https://rukminim1.flixcart.com/image/150/150/jxc5a4w0/bag/z/t/2/sm-dome-sat-lavie-8-original-imafhrgbzdfmxsdy.jpeg" alt="First slide"></img></div>
  <div><img style={{width:'200px',height:'200px'}} src="https://rukminim1.flixcart.com/image/150/150/jw9ke4w0/backpack/z/j/g/player-backpack-01-teal-fr3-0-11-101-backpack-american-tourister-original-imafgzhf8bdfgvw3.jpeg" alt="First slide"></img></div>
  <div><img style={{width:'200px',height:'200px'}} src="https://rukminim1.flixcart.com/image/150/150/khkvukw0-0/shoe/n/v/w/hiw12-7-reebok-black-nacho-original-imafxk87agx9hyvz.jpeg"></img></div>
  <div><img style={{width:'200px',height:'200px'}} src="https://rukminim1.flixcart.com/flap/150/150/image/00617aba3b2e6acc.jpg" alt="First slide"></img></div>
</Carousel>
    )
}

export default product




// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3 // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2 // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1 // optional, default to 1.
//   }
// };
// ;