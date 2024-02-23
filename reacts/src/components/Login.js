import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const history=useNavigate()
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")

  let login=async(e)=>{
    e.preventDefault()

    try{

      await axios.post("http://localhost:5000/login",{name,password})
      .then(res=>{
        if(res.data){
          const token = res.data.token;
          localStorage.setItem('token', token);
          history('/home',{state:{id:name}})
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
              <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Sign in to your account</h2>
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
                      <button className="btn btn-primary btn-lg" type="submit" onClick={login}>Log in</button>
                    </div>
                  </div>
                  <div className="col-12">
                    <p className="m-0 text-secondary text-center">Admin?<a href="/adminlogin" className="link-danger text-decoration-none"> Login Here</a></p>
                  </div>
                  <div className="col-12">
                    <p className="m-0 text-secondary text-center">Don't have an account? <a href="/signup" className="link-primary text-decoration-none">Sign up</a></p>
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
