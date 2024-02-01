import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 

    const navigate = useNavigate();

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }


    const onLogIn = async (event) => {
        event.preventDefault();


        let response = await fetch(
            'https://telefon-bozor-backend.onrender.com/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }
        )


        let parsed = await response.json();

        if( parsed.code === 0 )
        {
            navigate('/')
        }
        else
        {
            alert(parsed.message)
        }

 
 }

    return (
        <div>
            <form >
                <h1 className='reg'>Regsterasatsiya</h1>
                <input type="text" onChange={onChangeUsername} />
                <input type="text" onChange={onChangePassword} />
                <button type='button' onClick={onLogIn}>Log In</button>
            </form>
        </div>
    )
}

export default Login


