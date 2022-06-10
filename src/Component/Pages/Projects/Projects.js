import React from 'react';

const Projects = () => {
    return (
        <>
        <div className='container'>
            <h1 className='text-center text-bold text-primary mb-2 mt-2'> My Projects</h1>
            
            <div className='row'>

            <div class="col-md-6">
         <div class="card flex-md-row mb-4 shadow-sm h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
               <strong class="d-inline-block mb-2 text-primary">Troyal Electro </strong>
               <h6 class="mb-0">
                  <p class="text-dark "> Best Iot Parts making Company</p>
               </h6>
               <div class="mb-1 text-muted small">Nov 21</div>
               <p class="card-text mb-auto">This is a full-stack responsive react project where dealers can buy Products from company With Payment. This Website also maintain Stock management and user Friendly.</p>

               <br/>
               <a class="btn btn-outline-primary btn-sm" role="button" href="https://assaignment-12-fullstack.web.app/">Explore more</a>
            </div>
            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="https://i.ibb.co/vL6bbQ5/1.png" style={{width: '200px', height: '250px'}} />
         </div>
      </div>
      <div class="col-md-6">
         <div class="card flex-md-row mb-4 shadow-sm h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
               <strong class="d-inline-block mb-2 text-primary">UniMart</strong>
               <h6 class="mb-0">
                  <p class="text-dark" href="#">Grosary management system</p>
               </h6>
               <div class="mb-1 text-muted small">feb 22</div>
               <p class="card-text mb-auto">This is a full-stack responsive react project where maintain stock balance and sales with employee managemnt with cloud database and firebase coustomizable product with inventry.</p>
               <br/>
               <a class="btn btn-outline-primary btn-sm" role="button" href="https://assaignment-11-fullstack.web.app">Explore more</a>
            </div>
            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="https://i.ibb.co/GRR5BCR/2.png" style={{width: '200px', height: '250px'}} />
         </div>
      </div>
            </div>
        </div>
        <div className='container'>
            
            <div className='row'>

            <div class="col-md-6">
         <div class="card flex-md-row mb-4 shadow-sm h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
               <strong class="d-inline-block mb-2 text-primary">OnShortS </strong>
               <h6 class="mb-0">
                  <p class="text-dark "> Best PhotoGrapher in city </p>
               </h6>
               <div class="mb-1 text-muted small">jan 22</div>
               <p class="card-text mb-auto">This is the simple React  Firebase Project about a City Photo grapher Website For Recent Photogrphy Post and Booking for Photographer .</p>

               <br/>
               <a class="btn btn-outline-primary btn-sm" role="button" href="https://assignment-10-shohidmax.web.app/">Explore more</a>
               
            </div>
            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="https://i.ibb.co/k0dmPqp/Untitled-design.png" style={{width: '200px', height: '250px'}} />
         </div>
      </div>
      <div class="col-md-6">
         <div class="card flex-md-row mb-4 shadow-sm h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
               <strong class="d-inline-block mb-2 text-primary">City Convenson Center</strong>
               <h6 class="mb-0">
                  <p class="text-dark" href="#">Book  Your Dream </p>
               </h6>
               <div class="mb-1 text-muted small">jan 22</div>
               <p class="card-text mb-auto">This is the simple HTML and Css Project With using Bootstrap for Responsive and some Other booking Card , image slider , and so one .</p>
               <br/>
               <a class="btn btn-outline-primary btn-sm" role="button" href="https://assaignment-11-fullstack.web.app">Explore more</a>
            </div>
            <img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" src="https://i.ibb.co/fCfTJ7W/Untitled-design-1.png" style={{width: '200px', height: '250px'}} />
         </div>
      </div>
            </div>
        </div>
        </>
    );
};

export default Projects;