import './SignUpForm.css'
import { useState } from 'react'
import { addSignup } from '../../firebase-config'

function SignUpForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [playtest, setPlaytest] = useState(true)
    // 'idle' | 'submitting' | 'submitted' | 'error'
    const [status, setStatus] = useState('idle')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('submitting')
        try {
            await addSignup({ name, email, playtest })
            setStatus('submitted')
        } catch (error) {
            console.error(error)
            setStatus('error')
        }
    }

    return (
        <div className='signup-form-holder'><div className='signup-form container'>
            {status === 'submitted' ? (
                <h1>Thanks for signing up! You’ll be hearing from us soon! (non-threatening)</h1>
            ) : (
                <>
                <h1>This form is real.</h1>
                <p>Sign up to our newsletter to hear about updates, playtests, key dates, things of that nature. Not too much.</p>

                <form onSubmit={handleSubmit}>
                <label htmlFor="signup-name">Name: </label>
                <input type="text" id="signup-name" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="signup-email">E-mail: </label>
                <input type="email" id="signup-email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="checkbox" id="playtest" name="playtest" checked={playtest} onChange={() => setPlaytest(p => !p)} />
                <label htmlFor="playtest">I would be interested in playtesting work in progress.</label>
                <br></br>
                {status === 'error' && <p role="alert">Something went wrong and we couldn’t save your signup. Please try again.</p>}
                <button className="btn" type="submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Submitting…' : 'Submit'}
                </button>
                </form>
                </>
            )}
        </div>
        </div>
    )
}

export default SignUpForm
