import React from "react";
import './stl.css';

const Progresslevel = () => {
  return (
    <div>
        <div>
    <h1 class="mb-2 mt-3 text-bold font-roboto text-center text-primary  "> My Skill</h1>
</div>
<div class="container">
    <div class="row">
    <div class="col-md-6">
        <h3 className="text-primary text-center ">Font end</h3>
            <h5 className=' '>HTML</h5>
            <p>85%</p>
            <div class="progress">
                <div class="progress-bar"  style={{width: '85%', background:'#97c513'}}>
                    <div class="progress-value">85%</div>
                </div>
            </div>
            {/* <h5 className=' '>CSS</h5> */}
             <h4>CSS</h4><p>95%</p>
            <div class="progress">
                <div class="progress-bar"  style={{width: '95%', background:'#f2545b'}}>
                    <div class="progress-value">95%</div>
                </div>
            </div>
            <h5 className=' '>JAVASCRIPT</h5>
            <p>85%</p>
            <div class="progress">
                <div class="progress-bar" style={{width: '85%', background:'#4286f4'}}>
                    <div class="progress-value">85%</div>
                </div>
            </div>
            <h5 className=' '>BOOTSTRAP</h5>
            <p>75%</p>
            <div class="progress">
                <div class="progress-bar" style={{width: '75%', background:'#21ff63'}}>
                    <div class="progress-value">75%</div>
                </div>
            </div>
            
            <h5 className=' '>Tailwind CSS</h5>
            <p>69%</p>
            <div class="progress">
                <div class="progress-bar" style={{width: '69%', background:'#21ff63'}}>
                    <div class="progress-value">69%</div>
                </div>
            </div>
            
            <h5 className=' '>React Js</h5>
            <p>89%</p>
            <div class="progress">
                <div class="progress-bar" style={{width: '89%', background:'#21ff63'}}>
                    <div class="progress-value">89%</div>
                </div>
            </div>
            
            <h5 className=' '>React Native</h5>
            <p>55%</p>
            <div class="progress">
                <div class="progress-bar" style={{width: '55%', background:'#21ff63'}}>
                    <div class="progress-value">55%</div>
                </div>
            </div>
            
            
        </div>
        <div class="col-md-6">
        <h3 className="text-primary text-center ">Back End</h3>
            <h5 className=' '>Node js</h5>
            <p>85%</p>
            <div class="progress">
                <div class="progress-bar"  style={{width: '85%', background:'#97c513'}}>
                    <div class="progress-value">85%</div>
                </div>
            </div>
            <h5 className=' '>MongoDB</h5>
            <p>55%</p>
            <div class="progress">
                <div class="progress-bar"  style={{width: '55%', background:'#f2545b'}}>
                    <div class="progress-value">55%</div>
                </div>
            </div>
            <h5 className=' '>JAVASCRIPT</h5>
            <p>75%</p>
            <div class="progress">
                <div class="progress-bar" style={{width: '75%', background:'#4286f4'}}>
                    <div class="progress-value">75%</div>
                </div>
            </div>
            <h5 className=' '>Heroku</h5>
            <p>80%</p>
            <div class="progress">
                <div class="progress-bar" style={{width: '80%', background:'#21ff63'}}>
                    <div class="progress-value">80%</div>
                </div>
            </div>
            <h5 className=' '>Python</h5>
            <p>45%</p>
            <div class="progress">
                <div class="progress-bar"  style={{width: '45%', background:'#f2545b'}}>
                    <div class="progress-value">45%</div>
                </div>
            </div>
            <h5 className=' '>PHP</h5>
            <p>25%</p>
            <div class="progress">
                <div class="progress-bar"  style={{width: '25%', background:'#97c513'}}>
                    <div class="progress-value">25%</div>
                </div>
            </div>
            
            
        </div>
    </div>
</div>
    </div>
  );
};

export default Progresslevel;
