import React, { useState } from 'react'

export default function Btnclick() {
    const [textValue, settextValue] = useState();


    function containNumberOnly(e) {
        var value = e
        var regex = /^[0-9]+$/;
        if (regex.test(value)) {
            settextValue(value * 2)
        }
        else {
            settextValue(1)
        }
    }
    const handleBtnDouble = () => {


        containNumberOnly(textValue)
    }

    return (
        <div><form>
            <input type='text' value={textValue} onChange={(e) => settextValue(e.target.value)} />
            <input id="double" type="button" value="Double" onClick={handleBtnDouble} />
        </form>`;</div>
    )
}
