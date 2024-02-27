import React from 'react'
import { useState } from 'react'
import { useNavigate  } from 'react-router-dom'
import axios from 'axios'
export default function Adminlogin() {

  const history=useNavigate()
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")


  let login=async(e)=>{
    e.preventDefault()

    try{

      await axios.post("http://localhost:5000/adminlogin",{name,password})
      .then(res=>{
        if(res.data){
          const token = res.data.token;
          localStorage.setItem('token', token);
         
          history('/admin',{token:res.data})
        }
        else if(res.data=="notexist"){
          console.log("Credentails dont match")
          
        }
      })
    }
    catch(e){
      console.log(e)
    }
  }
 
  return (
    <div>
        
          <a href="/login">
          <button className="btn btn-light position-absolute top-0 start-0 m-3" >
          <img width="30" height="30" src="https://img.icons8.com/ios/50/circled-left-2.png" alt="circled-left-2"></img>
      
      </button>
          </a>
   
    <section className="bg-light py-3 py-md-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
          <div className="card border border-light-subtle rounded-3 shadow-sm">
            <div className="card-body p-3 p-md-4 p-xl-5">
              <div className="text-center mb-3">
                <a href="#!">
                  <img src="https://i.ibb.co/yRb6wBX/20240222-172942.png" alt="20240222-172942"  width="175" height="97"></img>
                </a>
              </div>
              <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Admin Login</h2>
              <form  method="POST">
                <div className="row gy-2 overflow-hidden">
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input type="text" className="form-control" name="name" id="email" placeholder="Senti" required onChange={(e)=>setName(e.target.value)}></input>
                      <label htmlFor="text" className="form-label">Username</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input type="password" className="form-control" name="password"  placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
                      <label htmlFor="password" className="form-label">Password</label>
                    </div>
                  </div>
                  
                  <div className="col-12">
                    <div className="d-grid my-3">
                      <button className="btn btn-primary btn-lg" type="submit"  onClick={login}>Log in</button>
                    </div>
                  </div>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
