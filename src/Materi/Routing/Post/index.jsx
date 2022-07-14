import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const Post = () => {
    const navigate = useNavigate();
    let { postId } = useParams();
  return (
    <div className='main'>
        <h4>Post ke { postId }</h4>
        <p>deskripsi</p>
        <button onClick={() => navigate('/')}>Kembali</button>
    </div>
    
  )
}
