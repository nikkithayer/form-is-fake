import './SignUpForm.css'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { addSignup } from '../../firebase-config'
import { angleStyle } from '../../utils/angle'

function SignUpForm({title, intro, thanks}) {

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
        <section className='signup-form-holder angled' id='signup' style={angleStyle('signup')}><div className='signup-form container'>
            {status === 'submitted' ? (
                <h2 className="title">{thanks}</h2>
            ) : (
                <>
                <h2 className="title">{title}</h2>
                <p>{intro}</p>

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
        </section>
    )
}

SignUpForm.propTypes = {
    title: PropTypes.string.isRequired,
    intro: PropTypes.string.isRequired,
    thanks: PropTypes.string.isRequired,
}

export default SignUpForm
