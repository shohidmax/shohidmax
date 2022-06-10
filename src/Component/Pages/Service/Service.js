import React from 'react';
import './Service.css';

const Service = () => {
    return (
        <div class="container cont" id='serve1'>
        <div class="row align-items-center">
           <div class="col-lg-5">
              <h2 class="title">What <span>Service</span> We
                 Provide
              </h2>
              <p class=" mt-3 ">We Provided Best Quality and Researched Product For Best Expriance with Audiance And also Provide Quality and IOS Standard.</p>
              <a class="btn btn-primary my-5" href="#">More Info </a>
           </div>
           <div class="col-lg-7">
              <div class="row card-items">
                 <div class="col-lg-6 col-sm-6">
                    <div class="card">
                       <div class="card-body">
                          <i class="bi bi-laptop"></i>
                          <h5 class="card-title">Web Development</h5>
                          <p class="card-text">We Privide Full Stack Web Design and Development with React or Wordpress</p>
                          <button className='btn btn-primary btn-sm'>Learn More</button>
                       </div>
                    </div>
                 </div>
                 <div class="col-lg-6 col-sm-6">
                    <div class="card">
                       <div class="card-body">
                          <i class="bi bi-droplet-half"></i>
                          <h5 class="card-title">UX/UI Design</h5>
                          <p class="card-text">We Design eye Casting user behaviors product And Design.</p>
                          <button className='btn btn-primary btn-sm'>Learn More</button>
                       </div>
                    </div>
                 </div>
                 <div class="col-lg-6 col-sm-6">
                    <div class="card">
                       <div class="card-body">
                          <i class="bi bi-envelope-open"></i>
                          <h5 class="card-title"> Digital Marketing</h5>
                          <p class="card-text">We provide Facebook, Instagram and Website seo and Marketing .</p>
                          <button className='btn btn-primary btn-sm'>Learn More</button>
                       </div>
                    </div>
                 </div>
                 <div class="col-lg-6 col-sm-6">
                    <div class="card">
                       <div class="card-body">
                          <i class="bi bi-phone"></i>
                          <h5 class="card-title"> Mobile App Development</h5>
                          <p class="card-text">We are working With React Native App development for Android and IOS.</p>
                          <button className='btn btn-primary btn-sm'>Learn More</button>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
    );
};

export default Service;


// <div class="card">
//             <img class="card-img-top" src="//placeimg.com/280/180/tech" alt="Card image cap">
//             <div class="card-body">
//                <h5 class="card-title border-bottom pb-3">Card title <a href="#" class="float-right btn btn-sm btn-info d-inline-flex share"><i class="fas fa-share-alt"></i></a></h5>
//                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                <a href="#" class="btn btn-sm btn-info float-right">Read more <i class="fas fa-angle-double-right"></i></a>
//             </div>
//          </div>