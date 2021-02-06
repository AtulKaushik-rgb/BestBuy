import React, { useEffect } from "react";
import './productCarousal.css'

const productCarousal = () => {

  // $('#recipeCarousel').carousel({
  //   interval :2000
  // })
   useEffect(() => {
     console.log(document.querySelector("#recipeCarousel"));
     //document.getElementById('recipeCarousel').carousel({interval:2000})
     let items = document.querySelectorAll(".carousel-item");

     items.forEach(function (item) {
       let next = item.nextSibling;
       console.log(next);
       console.log(item.parentNode.childNodes.item(0));
       let firstChild = item.parentNode.childNodes.item(0);
       if (!next) {
         next = firstChild;
       }
       firstChild.cloneNode().appendChild(item);

      //  for (var i = 0; i < 2; i++) {
      //    next = item.nextSibling;
      //    if (!next) {
      //      next = firstChild;
      //    }
      //    firstChild.cloneNode().appendChild(item);
      //  }
     });
   });

 




//   $('.carousel .carousel-item').each(function(){
//       var next = $(this).next();
//       if (!next.length) {
//       next = $(this).siblings(':first');
//       }
//       next.children(':first-child').clone().appendTo($(this));
      
//       for (var i=0;i<2;i++) {
//           next=next.next();
//          if (!next.length) {
//             next = $(this).siblings(':first');
//           }
//           next.children(':first-child').clone().appendTo($(this));
//         }
//   });

//   $('.carousel .carousel-item').each(function(){
//     var next = $(this).next();
//     if (!next.length) {
//     next = $(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));
    
//     for (var i=0;i<2;i++) {
//         next=next.next();
//        if (!next.length) {
//           next = $(this).siblings(':first');
//         }
//         next.children(':first-child').clone().appendTo($(this));
//       }
// });
  return (
    <div id="recipeCarousel" style={{interval:'1000'}} class="carousel slide" data-ride="carousel">
  <div class="carousel-inner w-100" role="listbox">
    <div class="carousel-item active ">
      <img class="d-block col-3 img-fluid" style={{width:'200px',height:'200px'}} src="https://cdn.shopify.com/s/files/1/2304/9095/files/MBE_LOGO.png?10873" alt="First slide"></img>
    </div>
    <div class="carousel-item ">
    <img class="d-block col-3 img-fluid" style={{width:'200px',height:'200px'}} src="https://cdn.shopify.com/s/files/1/2304/9095/files/MBE_LOGO.png?10873" alt="First slide"></img>
    </div>
    <div class="carousel-item ">
    <img class="d-block col-3 img-fluid" style={{width:'200px',height:'200px'}} src="https://cdn.shopify.com/s/files/1/2304/9095/files/MBE_LOGO.png?10873" alt="First slide"></img>
    </div>
    <div class="carousel-item ">
    <img class="d-block col-3 img-fluid" style={{width:'200px',height:'200px'}} src="https://cdn.shopify.com/s/files/1/2304/9095/files/MBE_LOGO.png?10873" alt="First slide"></img>
   </div>
    <div class="carousel-item ">
    <img class="d-block col-3 img-fluid" style={{width:'200px',height:'200px'}} src="https://cdn.shopify.com/s/files/1/2304/9095/files/MBE_LOGO.png?10873" alt="First slide"></img>
   </div>
   <div class="carousel-item ">
    <img class="d-block col-3 img-fluid" style={{width:'200px',height:'200px'}} src="https://cdn.shopify.com/s/files/1/2304/9095/files/MBE_LOGO.png?10873" alt="First slide"></img>
   </div>


  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>





    //   <>
    //    <a><i id='left' onClick={clickLeftHandler} class="fa fa-arrow-left left-icon" style={{fontSize:'28px',color:'black'}} aria-hidden="true"></i></a>
    //   <div className="container">
    //            <div id='div-item' class="item">
    //                    <img
    //                      src="https://source.unsplash.com/300x300/?perth,australia"
    //                      class="img-responsive"
    //                    ></img>
    //                    <h1>Price</h1>
    //             </div>
    //             <div class="item">
    //                    <img
    //                      src="https://source.unsplash.com/300x300/?perth,australia"
    //                      class="img-responsive"
    //                    ></img>
    //                    <h1>Price</h1>
    //             </div>
    //             <div class="item">
    //                    <img
    //                      src="https://source.unsplash.com/300x300/?perth,australia"
    //                      class="img-responsive"
    //                    ></img>
    //                    <h1>Price</h1>
    //             </div>
    //             <div class="item">
    //                    <img
    //                      src="https://source.unsplash.com/300x300/?perth,australia"
    //                      class="img-responsive"
    //                    ></img>
    //                    <h1>Price</h1>
    //             </div>
    //             <div class="item">
    //                    <img
    //                      src="https://source.unsplash.com/300x300/?perth,australia"
    //                      class="img-responsive"
    //                    ></img>
    //                    <h1>Price</h1>
    //             </div>
    //             <div class="item">
    //                    <img
    //                      src="https://source.unsplash.com/300x300/?perth,australia"
    //                      class="img-responsive"
    //                    ></img>
    //                    <h1>Price</h1>
    //             </div>
    //             <div class="item">
    //                    <img
    //                      src="https://source.unsplash.com/300x300/?perth,australia"
    //                      class="img-responsive"
    //                    ></img>
    //                    <h1>Price</h1>
    //             </div>
    //             <div class="item">
    //                    <img
    //                      src="https://source.unsplash.com/300x300/?perth,australia"
    //                      class="img-responsive"
    //                    ></img>
    //                    <h1>Price</h1>
    //             </div>
           
    //   </div>
    //   <a><i id='right' onClick={clickRightHandler} class="fa fa-arrow-right right-icon" style={{fontSize:'28px',color:'black'}} aria-hidden="true"></i></a>
    //   </>
    // <div>
    //   <div class="container">
    //     <div class="row" style={{width:'400px'}}>
    //       <div class="col-md-12">
    //         <div class="carousel slide multi-item-carousel" id="theCarousel">
    //           <div class="carousel-inner flex_row">
    //             <div class="item active">
    //               <div class="col-xs-4">
    //                 <a href="#1">
    //                   <img
    //                     src="https://source.unsplash.com/300x300/?perth,australia"
    //                     class="img-responsive"
    //                   ></img>
    //                 </a>
    //               </div>
    //             </div>
    //             <div class="item">
    //               <div class="col-xs-4">
    //                 <a href="#1">
    //                   <img
    //                     src="https://source.unsplash.com/300x300/?fremantle,australia"
    //                     class="img-responsive"
    //                   ></img>
    //                 </a>
    //               </div>
    //             </div>
    //             <div class="item">
    //               <div class="col-xs-4">
    //                 <a href="#1">
    //                   <img
    //                     src="https://source.unsplash.com/300x300/?west-australia"
    //                     class="img-responsive"
    //                   ></img>
    //                 </a>
    //               </div>
    //             </div>
    //             <div class="item">
    //               <div class="col-xs-4">
    //                 <a href="#1">
    //                   <img
    //                     src="https://source.unsplash.com/300x300/?perth"
    //                     class="img-responsive"
    //                   ></img>
    //                 </a>
    //               </div>
    //             </div>
    //             <div class="item">
    //               <div class="col-xs-4">
    //                 <a href="#1">
    //                   <img
    //                     src="https://source.unsplash.com/300x300/?quokka,perth"
    //                     class="img-responsive"
    //                   ></img>
    //                 </a>
    //               </div>
    //             </div>
    //             <div class="item">
    //               <div class="col-xs-4">
    //                 <a href="#1">
    //                   <img
    //                     src="https://source.unsplash.com/300x300/?margaretriver,australia"
    //                     class="img-responsive"
    //                   ></img>
    //                 </a>
    //               </div>
    //             </div>
    //             {/* <!-- add  more items here -->
    //       <!-- Example item start:  --> */}

    //             <div class="item">
    //               <div class="col-xs-4">
    //                 <a href="#1">
    //                   <img
    //                     src="https://source.unsplash.com/300x300/?perth,australia&r=7"
    //                     class="img-responsive"
    //                   ></img>
    //                 </a>
    //               </div>
    //             </div>

    //             {/* <!--  Example item end --> */}
    //           </div>
    //           <a
    //             class="left carousel-control"
    //             href="#theCarousel"
    //             data-slide="prev"
    //           >
    //             <i class="glyphicon glyphicon-chevron-left"></i>
    //           </a>
    //           <a
    //             class="right carousel-control"
    //             href="#theCarousel"
    //             data-slide="next"
    //           >
    //             <i class="glyphicon glyphicon-chevron-right"></i>
                
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default productCarousal;
