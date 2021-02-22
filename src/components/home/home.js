import React,{useState} from 'react'
import 'react-bootstrap'

const home = () => {

    const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
    // function ControlledCarousel() {
        
      
        // return items =  (
        //   <div activeIndex={index} onSelect={handleSelect}>
        //     <div className="Item">
        //       <img
        //         className="d-block w-100"
        //         src="https://rukminim1.flixcart.com/image/495/594/kk5rgy80/t-shirt/r/3/4/xxl-tblhdful-d32-tripr-original-imafzkbskeagqyzf.jpeg"
        //         alt="Third slide"
        //       />
      
        //       <div className="caption">
        //         <h3>Third slide label</h3>
        //         <p>
        //           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //         </p>
        //       </div>
        //     </div>
        //     <div className="Item">
        //       <img
        //         className="d-block w-100"
        //         src="https://rukminim1.flixcart.com/image/495/594/kk5rgy80/t-shirt/r/3/4/xxl-tblhdful-d32-tripr-original-imafzkbskeagqyzf.jpeg"
        //         alt="Third slide"
        //       />
      
        //       <div className="caption">
        //         <h3>Third slide label</h3>
        //         <p>
        //           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //         </p>
        //       </div>
        //     </div>
        //     <div className="Item">
        //       <img
        //         className="d-block w-100"
        //         src="https://rukminim1.flixcart.com/image/495/594/kk5rgy80/t-shirt/r/3/4/xxl-tblhdful-d32-tripr-original-imafzkbskeagqyzf.jpeg"
        //         alt="Third slide"
        //       />
      
        //       <div className="caption">
        //         <h3>Third slide label</h3>
        //         <p>
        //           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //         </p>
        //       </div>
        //     </div>
        //   </div>
        // );
     // }

    return (
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    
    )
}

export default home;


  
//   render();
