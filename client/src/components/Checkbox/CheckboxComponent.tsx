import React from 'react'
import { FieldProps } from 'formik'

const Checkbox = ({ field: { name, value, onChange, onBlur } }: FieldProps) => (
  <input
    checked={value}
    className="form-control"
    name={name}
    onChange={onChange}
    onBlur={onBlur}
    type="checkbox"
    value={value}
  />
)

export default Checkbox
