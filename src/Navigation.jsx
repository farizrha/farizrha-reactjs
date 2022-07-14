import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div>
        <h2>Materi:</h2>
        <ul>
            <li>
                <Link to="validation">Form</Link>
            </li>
            <li>
                <Link to="hooks">Hooks</Link>
            </li>
            <li>
                <Link to="komponen">Komponen</Link>
            </li>
            <li>
                <Link to="lifecycle">Lifecycle</Link>
            </li>
            <li>
                <Link to="rendering">Rendering</Link>
            </li>
            <li>
                <Link to="reuseable">Reuseable</Link>
            </li>
            <li>
                <Link to="styling">Styling</Link>
            </li>
        </ul>
    </div>
  )
}
