import { render, fireEvent } from '@testing-library/react'
import NameForm from './FormCoding'


const inputElement = (isian) => {
  const util = render(<NameForm />)
  // expect(util.findAllByLabelText())
  const input = util.container.querySelector(`input[name="${isian}"]`)
  return input
}

describe("testing FormCoding.jsx",() =>{
  test('input nama', () => {
    const value = 'rioo'
    const input = inputElement("nama")
    
    expect(input).toBeInTheDocument()
    fireEvent.change(input, {target: {value}})
    expect(input.value).toBe(value)
  })
  
  test('input noHandphone', () => {
    const value = '085243782019'
    const input = inputElement("noHandphone")
    
    expect(input).toBeInTheDocument()
    fireEvent.change(input, {target: {value}})
    expect(input.value).toBe(value)
  })

  test('input email', () => {
    const value = 'test@gmail.com'
    const input = inputElement("email")
    
    expect(input).toBeInTheDocument()
    fireEvent.change(input, {target: {value}})
    expect(input.value).toBe(value)
  })
})