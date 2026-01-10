import React from 'react'
import { useFormStatus } from 'react'

function Submit() {
const status = useFormStatus();
 return <button disabled={status.pending}>Submit</button>

}

export default function Form_Status() {


    async function handleSubmit(){
        await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <Submit />
        </form>
        </>
    )
}