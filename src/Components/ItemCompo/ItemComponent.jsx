import React from 'react'
import ChildComponent from './ChildComponent'

export default function ItemComponent() {

    const data = [{
        href: "https://www.google.com", text: "Google"
    },
    { href: "https://www.bing.com", text: "Bing" }]
    return (
        <div>
            <ul style={{ listStyleType: "none" }}>

                {data.map((item, index) => {
                    return (<>
                        <ChildComponent item={item} key={index} />
                    </>
                    )
                })}
            </ul>
        </div>
    )
}
