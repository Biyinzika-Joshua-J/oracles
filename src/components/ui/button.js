import './button.css'


export const Button = ({text, event}) =>{

    return (
        <button className='button' onClick={event}>
            {text}
        </button>
    )
}