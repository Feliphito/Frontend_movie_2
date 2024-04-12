
import { useState } from 'react'
import signin from '../images/signin.jpg'
import { useLocation } from 'react-router-dom'


const Signin = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [, navigate] = useLocation()

    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate("/")
    }    
    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-2 h-screen bg-black">
            <div style={{backgroundImage:`linear-gradient(to left,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(${signin})`}} >

            </div>
            <div className='ml-36'>
               <h1 className="mt-24 text-x1 font-semibold text-white">Log in or Sign up to Continue</h1>
                <input 
                placeholder='Username'
                onChange={e => setUsername(e.target.value)}
                value={username}
                required
                ></input>
                <input
                type='password'
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}
                value={password}
                required
                ></input>
                <h6 className='text-gray-500 text-xs mt-2 '>Agree to the Privacy Policy and terms of use</h6>
                <button  className='mt-12 bg-blue-700 w-40 ml-2 hover:bg-green-700 text-white' >
                    Signin
                </button>
            </div>
        </form>
    )
}

export default Signin