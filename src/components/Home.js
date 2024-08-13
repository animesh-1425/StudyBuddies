import React, { useRef } from 'react';
import Nav from './Nav';
import '../assets/css/styles.css';
import Login from './Login';
import LoginButton from './LoginButton';
import { useAuth0 } from "@auth0/auth0-react";

import emailjs from '@emailjs/browser';


const Home = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_2yb96as', 'template_5p43q7p', form.current, {
            publicKey: '6Lsz_n3XPExp-Qejt',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
      <Nav/>
      <div  className='main' id='home'>
        <div className="container py-5 d-md-flex flex-md-col">
          
            <div className="row py-5 ">
                <div className="col-lg-7  pt-4 text-center">
                    <h1 className="ddd ">Discuss Discover & Develop</h1>
                    {isAuthenticated?<a href='/Classes' className='btn1'>Study Together</a>:<Login/>}
                </div>

                <div className="col-lg-3  pt-4 m-auto text-center d-flex justify-content-center align-items-center">
                 <img className='studyimg' src="images/main.jpg" style={{borderRadius:"120px 0px 121px 0px" }} alt="online video conference" />
                </div>
            </div>
            
        </div>
        </div>
        <div className="features" id="about">
     <div className="container py-5">

        <div className="row">
            <div className="col-lg-9 m-auto text-center">
                <h1>About Us!!</h1>
            </div>
        </div>
        
       
        <div className="row">
            <div className="col-lg-6 py-5 m-auto text-center">
             <img src="images/a1.jpeg" alt=""/>
            </div>
            <div className="col-lg-6 py-lg-5">
               <div className="row">
                 <div className="col-lg-6 m-auto text-center">
                    <h2>Find Your Community</h2>
                 </div>
               </div>
               <div className="row py-4">
                <div className="col-lg-6 m-auto text-center">
                   <p>Welcome to StudyBuddies, where learning knows no boundaries and connections span the globe. Are you tired of studying alone? Looking to explore new perspectives and collaborate with students from different corners of the world? Look no further! Our platform isn't just about virtual study rooms and tools; it's about finding your community, your tribe, your network of like-minded learners who share your passion for knowledge.</p>
                </div>
              </div>
            </div>
        </div>

        
        <div className="row">
            <div className="col-lg-6 py-5 m-auto text-center">
             <img src="images/a2.jpeg" alt="" />
            </div>
            <div className="col-lg-6 py-lg-5">
               <div className="row">
                 <div className="col-lg-6 m-auto text-center">
                    <h2>Unified Learning Nexus</h2>
                 </div>
               </div>
               <div className="row py-4">
                <div className="col-lg-6 m-auto text-center">
                   <p>Tired of juggling multiple tabs and platforms for coding, whiteboarding, chatting, and file sharing? Look no further. Our integrated platform brings together a suite of essential tools under one virtual roof, empowering you to focus on what truly matters: learning, collaborating, and achieving your goals.</p>
                </div>
              </div>
            </div>
        </div>

        
        <div className="row">
            <div className="col-lg-6 py-5 m-auto text-center">
             <img src="images/a3.jpeg" alt=""/>
            </div>
            <div className="col-lg-6 py-lg-5">
               <div className="row">
                 <div className="col-lg-6 m-auto text-center">
                    <h2>Progress Together</h2>
                 </div>
               </div>
               <div className="row py-4">
                <div className="col-lg-6 m-auto text-center">
                   <p>Join study rooms filled with students who share similar academic aspirations. Whether it's acing an exam, mastering a coding language, or completing a research project, you'll be part of a collective effort towards achieving your goals. let's embark on this journey of progress together. Let's transcend borders, bridge gaps in knowledge, and amplify each other's potential.
</p>
                </div>
              </div>
            </div>
        </div>
        
        

     </div>
    </div>

    <div className="about" id='features'>
        <div className="row m-auto text-center">

            <div className="row py-5 ">
                <div className="col-lg-8 m-auto text-center">
                    <h1 className="headings">Not Just a ordinary Study room!!</h1>
                    <h6>Improve your skills with new friends all over the globe</h6>
                </div>
            </div>
    
            <div className="col-lg-4">
                <div className="card mx-2 my-3 d-flex align-items-center justify-content-center" >
                  <img className="card-img-top" src="images/f1.jpeg" style={{maxWidth:'93%'}} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Inbuilt Code Editor</h5>
                    <p className="card-text">Enjoy coding with the inbuilt code editor and get rid of multiple apps</p>
                    <p className="card-text"><small className="text-muted">Keep Coding!!!</small></p>
                  </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="card mx-2 my-3 d-flex align-items-center justify-content-center">
                  <img className="card-img-top" src="images/f2.jpg" style={{maxWidth:'93%'}} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Todo List</h5>
                    <p className="card-text">Set your daily goals with the todo list and keep track of your works
</p>
                    <p className="card-text"><small className="text-muted">Keep Achieving !!</small></p>
                  </div>
                </div>
            </div>

            <div className="col-lg-4">
                <div className="card mx-2 my-3 d-flex align-items-center justify-content-center">
                  <img className="card-img-top" src="images/f3.jpeg" style={{maxWidth:'93%'}} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Choose your Domain</h5>
                    <p className="card-text">Join your studyrooms as per your domains and work with others</p>
                    <p className="card-text"><small className="text-muted">Keep Slaying !!</small></p>
                  </div>
                </div>
            </div>
           
        </div>
    </div>
    <br/>
    <br/>
    <br/>

    <div className="study py-5">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-9 m-auto text-center">
                    <h1>What are you waiting for!!</h1>
                </div>
            </div>
            <div className="row py-5 ">
                <div className="col-lg-5 m-auto text-center">
                    <button className="btn2"><a style={{textDecoration: 'none'}} href="study.html">Lets gooo!!</a></button>
                </div>
            </div>
            
        </div>

    </div>
    <div className="contact py-5" id='contact'>
      <div className="container py-5">
        <div className="row">
            <div className="col-lg-5 m-auto text-center">
                <h1>Contact Us</h1>
                <h6 style={{color:'red'}}>Always be in touch with us</h6>
            </div>
        </div>
        <div className="row py-5">
            <div className="col-lg-9 m-auto">
                <div className="row">
                    <div className="col-lg-4">
                        <h6>LOCATION</h6>
                        <h4 style={{fontWeight:100,padding: "5px 0px"}}>New York 0911 First Street DC</h4>
                   
                        <h6>PHONE</h6>
                        <h4 style={{fontWeight:100,padding: "5px 0px"}}>+91 9142525262</h4>
               
                        <h6>EMAIL</h6>
                        <h4 style={{fontWeight:100,padding: "5px 0px"}}>studybuddies123@gmail.com</h4>
                  
                   </div>
                   <div className="col-lg-7"> 
                    
                    <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-lg-6">
                            <input type="text" name='from_name' className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-lg-6">
                            <input type="email" name="from_email" className="form-control" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 py-3">
                            <textarea name="message" className="form-control" placeholder="Enter your message" id="" cols="10" rows="5"></textarea>
                        </div>
                    </div>
                    <input className="btn3" type='submit' value="Submit"/>
                    </form>
                   </div>
               </div>
        </div>
      </div>
    </div>
    </div>
    <div className="newsletter py-5">
        <div className="container py-5">
            <div className="row">
                <div className="col-12 m-auto text-center">
                    <h1 className='join'>Join Our Community</h1>
                    <input type="text" className="px-3" placeholder="Enter your mail"/>
                    <button className="btnnews">Submit</button>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-12 m-auto">
                    <div className="row">
                        <div className="col-lg-3 py-3 center">
                            <h5 className=" pb-3 footerlogo">StudyBuddies</h5>
                            <p><a href="#">Home</a></p>
                            <p><a href="#">About us</a></p>
                            <p><a href="#">Studyrooms</a></p>
                            <p><a href="#">Study together</a></p>
                        </div>

                        <div className="col-lg-3 py-3 center">
                            <h5 className="pb-3">Legal</h5>
                            <p><a href="#">Cookies</a></p>
                            <p><a href="#">Terms and conditions</a></p>
                            <p><a href="#">Privacy Policy</a></p>
                          
                        </div>

                        <div className="col-lg-3 py-3 center">
                            <h5 className="pb-3">About</h5>
                            <p><a href="#">About us</a></p>
                            <p><a href="#">Latest Features</a></p>
                            <p><a href="#">FAQ</a></p>
                            
                        </div>

                        <div className="col-lg-3 py-3 ">
                            <h5 className="pb-3 center">Social Media</h5>
                            <div className='center flex-row'>
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            </div>
                        </div>
                      
                    </div>

                    

                </div>
            </div>
        </div>

    </div>

      </div>
    
  )
}

export default Home;