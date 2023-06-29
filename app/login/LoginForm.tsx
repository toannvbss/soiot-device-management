'use client';

import { useState } from "react";

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const loginData = {
            username,
            password
        }
    
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(loginData)
            })
    
            const res = await response.json();
            if(!res.success) {
                setError(res.msg);
            }

        } catch (error) {
            console.log(error);
            setError('An error occurred!');
        }
    }
    

    const handleUsernameInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
        setError('');
    }

    const handlePasswordInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        setError('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className="block h-4 text-xs mb-3 text-red-500">{error}</p>
            <div className='mb-5 text-xs'>
                <input 
                id="username"
                required={true}
                minLength={3}
                maxLength={30}
                placeholder="Username"
                value={username}
                onChange={handleUsernameInput}
                className="w-full px-3 py-2 bg-orange-150 rounded-sm text-base text-gray-150 focus:outline"
                />
            </div >
            <div className='mb-5 text-xs'>
                <input 
                id="password"
                required={true}
                minLength={3}
                maxLength={20}
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordInput}
                className="w-full px-3 py-2 bg-orange-150 rounded-sm text-base text-gray-150 focus:outline"
                />
            </div>
            <div className='flex items-center justify-center mt-8'>
                <button className='px-5 py-2 mr-3 rounded bg-orange-350 hover:bg-orange-450 text-base font-bold text-white drop-shadow-md'>LOGIN</button>
                <a href="/signup" className='text-xs font-medium text-sky-500'>or create new account?</a>
            </div>
        </form>
    )
}
