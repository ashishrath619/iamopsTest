import React, { useState } from 'react'

export default function Tooltip() {
    const [showToolTipValue, setshowToolTipValue] = useState('')

    const handleBtn = (value) => {

        console.log(value, 'value')
        if (value == 'First button') {
            setshowToolTipValue('First button')
        } else if (value == 'Second button') {
            setshowToolTipValue('Second button')
        }

    }

    return (
        <div>
            <div id='tooltip'></div>
            <button id="button1" onClick={() => handleBtn('First button')}>First button</button>
            <button id="button2" onClick={() => handleBtn('Second button')}>Second button</button>
            <br />

            <div>
                {showToolTipValue}
            </div>
        </div>
    )
}
