import React from 'react'
import { ErrorMessage, Label } from './StyledComponents'


function FormRow({id, label, children, error}) {
  return (
    <div className='mb-3'>
        <Label for={id}>{label}</Label>
        {children}
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  )
}

export default FormRow