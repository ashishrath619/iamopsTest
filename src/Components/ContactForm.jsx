import React, { useState } from 'react'


export default function ContactForm() {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [showEmail, setShowEmail] = useState(false)

    const handleAgeChange = (e) => {
        var ageValue = e.target.value
        setAge(ageValue)

        if (ageValue >= 14) {
            setShowEmail(true)
        }
        else {
            setShowEmail(false)
        }


    }

    return (
        <div>
            <div >
                <input type='text' name='FirstName' placeholder='FirstName' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='text' name='age' placeholder='age' value={age} onChange={handleAgeChange} />
                {showEmail ? <input type='email' name='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} /> : <></>}


            </div>
        </div>
    )
}
