import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {

  const [name,setName]=useState('')
    const [pass,setPassword]=useState('')
    const history=useNavigate()

    let submit=async(e)=>{
        e.preventDefault()
        
        try{
            console.log("sending")
            await axios.post("http://localhost:5000/signup",{name,pass})
            .then(res =>{
              if(res.data==="exists"){
                console.log("already exists")
                
              }
              else if(res.data==="notexist"){
                console.log("successfully registered")
                history('/login')
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
              {/* <div className="text-center mb-3">
                <a href="#!">
                  <img src="https://i.ibb.co/yRb6wBX/20240222-172942.png" alt="20240222-172942" width="175" height="97"></img>
                </a>
              </div> */}
              <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Create your account</h2>
              <form  method="POST">
                <div className="row gy-2 overflow-hidden">
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input type="number" className="form-control" name="name" id="email" placeholder="Senti" required onChange={(e)=>setName(e.target.value)} ></input>
                      <label htmlFor="text" className="form-label">Username</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating mb-3">
                      <input type="password" className="form-control" name="password"  placeholder="Password" onChange={(e)=>setPassword(e.target.value)} ></input>
                      <label htmlFor="password" className="form-label">Password</label>
                    </div>
                  </div>
                
                  <div className="col-12">
                    <div className="d-grid my-3">
                      <button className="btn btn-primary btn-lg" type="submit" onClick={submit}>Sign Up</button>
                    </div>
                  </div>
                  <div className="col-12">
                    <p className="m-0 text-secondary text-center">Go Back to <a href="/login" className="link-primary text-decoration-none">Login</a></p>
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
