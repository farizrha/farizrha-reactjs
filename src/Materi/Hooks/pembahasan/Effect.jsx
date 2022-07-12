import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const Effect = () => {

    let [text, setText] = useState('');
    let [user, setUser] = useState('');
    let [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log('interval')
        let intervalId = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);

        return () => {
            console.log('clean');
            clearInterval(intervalId);
        }
    } ,[]) 

    useEffect(() => {
        // setDisplay(() => localStorage.getItem('text'));
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.json())
            .then(res => setUser(res))
    },[seconds]);

    useEffect(() => {
        localStorage.setItem('text', text);
        console.log('singkronisasi');
    }, [text])
  return (
    <div>
        <textarea cols="30" rows="10" onChange={(e) => setText(e.target.value)}/>
        <p>{user.name}</p>
        <div>Waktu: {Math.floor(seconds/60)} Menit {seconds % 60} Detik</div>
    </div>
  )
}
