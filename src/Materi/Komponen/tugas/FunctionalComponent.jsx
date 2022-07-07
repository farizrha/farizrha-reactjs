import { useState } from 'react'

const FunctionalComponent = ({nama}) => {
    const [value, setValue] = useState(0);

    const handlePlus = () => {
        setValue(value + 1);
    }

    const handleMinus = () => {
        if(value > 0) {
            setValue(value - 1);
        }
    }
    
    return(
        <div>
            <h1>Menggunakan Hook yang ada di Functional Component</h1>
            <h3>Halo {nama}, silahkan pesan tiket pesawat anda.</h3>
            <button onClick={handleMinus}>-</button>
            <span>{' '} {value} {'tiket'}</span>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}

FunctionalComponent.defaultProps = {
    nama: 'User'
}

export default FunctionalComponent