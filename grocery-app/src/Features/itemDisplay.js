import React from 'react'
import {useSelector} from 'react-redux'


const ItemDisplay =()=>{
const cartItems = useSelector((state)=>{
    debugger
    return Object.values(state.items)
})
return (
    <ul>
        {cartItems.map((cartItem)=>{
            return <li key={cartItem.id}>{cartItem.name}</li>
        })}
    </ul>
)


}

export default ItemDisplay;