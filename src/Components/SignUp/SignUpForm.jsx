import './SignUpForm.css'
import { useState } from 'react'

function SignUpForm({Signup}) {

    console.log(Signup)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [playtest, setPlaytest] = useState(true)
    const [submitted, setSubmitted] = useState(false)

    const handleCheckChange = () => {
        setChecked(!checked);
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        const newSignup = {
            name: name,
            email: email,
            playtest: playtest
        }
        Signup(newSignup)
        //error handling


        setSubmitted(true)
    }

if (!submitted) return (
        <div className='signup-form-holder'><div className='signup-form'>
            <h1>This form is real.</h1>
            <p>Sign up to our newsletter to hear about updates, playtests, key dates, things of that nature. Not too much.</p>

            {submitted ? <h2>   Thanks for signing up!</h2> : 
            <form onSubmit={handleSubmit}> 
            <label>Name: </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label>E-mail: </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="checkbox" id="playtest" name="playtest" checked={playtest} onChange={handleCheckChange} />
            <label htmlFor="playtest">I would be interested in playtesting work in progress.</label>
            <br></br>
            <button type="submit">Submit</button>
            </form>}
        </div>
        </div>
    )
else return (
    <h1>Thanks for signing up! You'll be hearing from us soon! (non-threatening)</h1>
)
}

export default SignUpForm