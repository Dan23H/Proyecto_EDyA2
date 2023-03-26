import { useState } from "react"

export const ComponenteInput = ({tipo}, {valor}) => {

    const [variable, setVariable] = useState('')

    const tomarDato = (evt) => {
        setVariable(evt.target.value)
    }

    const labelValue = {valor} + ": "
    const inputValue = "Enter " + {valor}

    return (
        <>
            <div>
                <label>{valor}</label>
                <input type={tipo} placeholder={inputValue} onChange={(evt) => tomarDato(evt)} value={variable} />
            </div>
        </>
    )
}