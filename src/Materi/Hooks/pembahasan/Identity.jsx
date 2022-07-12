import React from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const Identity = () => {
    const fetchUser = useCallback(() => ['Fariz', 'Tono', 'Wawan'], []);
    let [user, setUser] = useState([]);

    useEffect(() => {
        const data = fetchUser();
        setUser(data);
    }, [fetchUser])

  return (
    <div>
        <ul>
            {
                user.map(u => <li key={u}>{u}</li>)
            }
        </ul>

    </div>
  )
}
