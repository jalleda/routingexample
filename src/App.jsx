import React from 'react';

import './App.css';
import { useState } from 'react';

function App() {

  var [key,setKey]=useState(true)
  var [two,setTwo]=useState(true)
  const images=[
    {img:"https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",id:1},
    {img:"https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",id:2},
    {img:"https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",id:3},
    {img:"https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",id:4},
    {img:"https://images.unsplash.com/photo-1437964706703-40b90bdf563b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",id:5},
    {img:"https://images.unsplash.com/photo-1564860924912-f27764fd2ab6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",id:6},
    {img:"https://images.unsplash.com/photo-1584181854784-b8b3fd9d6c45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHRyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",id:7},
    {img:"https://images.unsplash.com/photo-1421790500381-fc9b5996f343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHRyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",id:8},
    {img:"https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHRyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",id:9},
    {img:"https://images.unsplash.com/photo-1561941850-0576b6269859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHRyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",id:10},
    {img:"https://images.unsplash.com/photo-1507629221898-576a56b530bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHRyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",id:11},
    {img:"https://plus.unsplash.com/premium_photo-1675438998042-8159173ccd82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHRyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",id:12},
  ]
  function gh(){
    setKey(!key)
    setTwo(!two)
  }
  function hg(){
    setKey(!key)
    setTwo(!two)
  }

  return (
    <div>
      
     <div className='mt-3'>  {key?<button onClick={gh} className="btn " >2D view</button>:<button className='btn' onClick={hg} >3D view</button>}</div>
       {/* <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">3D view</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">2D view</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
    <div className='body'>
  <div className='slider' >

       
               {images && images.map((item,index)=>{
       return <span style={{"--i":`${item.id}`}} key={index+1}>
            <img src={item.img} alt=""/>
        </span>
        })}
        
        </div>
  </div>
  </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
    <div className='d-flex flex-wrap'>
         {
          images.map((k,l)=>{
            return <div key={l}>  <img src={k.img} alt="" width="310px" height="300px" style={{padding:"10px"}}/> </div>


          })
        }
        </div>
  </div>
  
</div> */}
  {two? <div className='body'>
  <div className='slider' >

       
               {images && images.map((item,index)=>{
       return <span style={{"--i":`${item.id}`}} key={index+1}>
            <img src={item.img} alt=""/>
        </span>
        })}
        
        </div>
  </div>:<div className='d-flex flex-wrap'>
         {
          images.map((k,l)=>{
            return <div key={l}>  <img src={k.img} alt="" width="310px" height="300px" style={{padding:"10px"}}/> </div>


          })
        }
        </div>}
</div>

  );
}

export default App;
