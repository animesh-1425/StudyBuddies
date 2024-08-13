    import React from "react";
    import {Link} from 'react-router-dom';

    import '../assets/css/class.css'
    import {firebase} from './firebase2';
    import Classes from "./Classes";
    import LogoutButton from './LogoutButton';
    const ClassRoom = ({item}) => {
        
       const handleDel=(id)=>{
            firebase.firestore().collection('classes').doc(id).delete();
       }
       
    return (
        <div className="col-lg-3 col-md-4 col-12">
            
                <div class="card">
                    
                <div class="card-body">
                    <div class="color" style={{backgroundColor:item.Theme,display:"flex",justifyContent:'center',alignItems:'center'}}> <h4 class="card-title">{item.class}</h4>
                    </div>
                    <div class="content">
                    <p style={{display:"flex",justifyContent:'center',alignItems:'center'}} class="card-text">{item.desc}</p>
                   
                    <div class="d-flex flex-row">
                    <a href="/meeting" className="col-9">
                    <button className='classbutton' style={{backgroundColor:item.Theme,textAlign:'center',width:'80%'}}>Join Room</button> 
                    </a>    
                    
                    <button className="col-3 classbutton" style={{backgroundColor:item.Theme}} onClick={()=>handleDel(item.id)}><i class="fa-solid fa-trash"></i></button>
                   
                    </div>
                    </div>
                    
                    </div></div></div>
            

    )
    }

    export default ClassRoom;