import { Field, ErrorMessage } from 'formik'
import React from 'react'

interface InputProps {
  disabled?: boolean
  footnote?: string
  label?: string
  name: string
  type?: string
}

const Input = (props: InputProps): JSX.Element => {
  const { disabled = false, footnote, label, name, type = 'text' } = props

  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        className="form-control"
        disabled={disabled}
        type={type}
        name={name}
      />
      <small className="form-text text-muted">{footnote}</small>
      <ErrorMessage name={name} className="invalid-feedback" component="div" />
    </div>
  )
}

export default Input
