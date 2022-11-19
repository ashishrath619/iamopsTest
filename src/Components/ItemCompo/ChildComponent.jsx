import React from 'react'

export default function ChildComponent({ item, key }) {

    console.log(item, key, 'props')
    return (
        <div><li>
            <a href={item.href} >{item.text}</a></li></div>
    )
}
