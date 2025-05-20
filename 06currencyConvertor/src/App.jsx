import { useState } from 'react'
import {InputBox} from './components/InputBox'
import {useCurrencyInfo} from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState("usd")
  const [toCurrency, setToCurrency] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(fromCurrency)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
      setConvertedAmount((amount * currencyInfo[toCurrency]))
  }
  return (
    <>
      <h1 className='text-3xl font-bold '>Currency Convertor</h1>
    </>
  )
}

export default App
