import React, {  useState, } from 'react'
import '../style/Login.css'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [username, setUsername] =useState('')
    const [password, setPassword] = useState('')
    const changeRoute = useNavigate()
    // Perform login API request
    const signIn=()=>{
    fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        username: username,
        password: password,
        // expiresInMins: 60, // optional
    })
    }).then(res => res.json())
    .then(data=>{

        if (data && data.token) {
            localStorage.setItem('authToken', data.token);
            changeRoute("/home")
        }
        
    })
    .catch((error)=>console.log("Error", error.message))

}
    // console.log(localStorage.getItem('authToken'));




  return (
    
    <div className='login_page'>

        <div className="container">
{/* ------------USERNAME INPUT---------------------- */}
            <label htmlFor="username">Username</label>
            <input type="text" id='username' 
            value={username} 
            // value={'kminchelle'} 
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='Enter Username' />  
            <br />

{/* ------------PASSWORD INPUT---------------------- */}
            <label htmlFor="password">Password</label>
            <input type="text" id="password"
                value={password}
                // value={'0lelplR'}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='Enter Password'/>

{/* ---------------SIGNIN BUTTON-------------------- */}
            <div className='signInDiv'>
            {/* <Link to="/home"><button className='subtmitBtn' type='submit' onClick={signIn}>Sign In</button></Link> */}
            <button className='subtmitBtn' type='submit' onClick={()=>{signIn()}}>Sign In</button>
                <small>username: 'kminchelle',password: '0lelplR',</small>
                <small>username: 'atuny0',password: '9uQFF1Lh',</small>
            </div>
        </div>
    </div>

  )

}

export default Login