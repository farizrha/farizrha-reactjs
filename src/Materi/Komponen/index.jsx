import React from 'react'
// import ClassComponent from './pembahasan/ClassComponent'
import ClassComponent from './tugas/ClassComponent'
import FunctionalComponent from './tugas/FunctionalComponent'
// import FunctionalComponent from './pembahasan/FunctionalComponent'

export class Komponen extends React.Component {

    render() {
        return (
            <div>
                <ClassComponent nama={"Fariz Rizky Haykal"}/>
                <FunctionalComponent/>
            </div>
        )
    }
}