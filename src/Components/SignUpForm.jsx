import { useState } from 'react'

function SignUpForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        //error handling goes here

        // fetch request goes here

        setSubmitted(true)
    }

    return (
        <div className='signup-form'>
            <h1>Sign Up</h1>
            {submitted ? <h2>   Thanks for signing up!</h2> : 
            <form onSubmit={handleSubmit}> 
            <label>Name: </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label>E-mail: </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br></br>
            <button type="submit">Submit</button>
            </form>}
        </div>
    )
}

export default SignUpForm