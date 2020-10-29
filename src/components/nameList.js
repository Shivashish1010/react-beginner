import React from 'react'
import Person from './person'

// function change(i){
//     return <di>{i}</di>
// }

function NameList() {
    const my_list = [{
            id:1,
            name:"abc",
            city:"indore"
        },
        {
            id:2,
            name:"pqr",
            city:"pune"
        }
]
const lis = [1,2,3,45]

const res = lis.map((x, index) => <div key={index}>{index} {x}</div>)
    return (
        <div>{res}</div>
    )
}

export default NameList
