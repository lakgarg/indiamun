import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {

  const searchQuery = useSearchParams()[0]
  const referenceNum = searchQuery.get("reference")
  console.log(referenceNum)

  return (
    <div>
      <div className="">ORDER SUCCESSFUL</div>
      <div className="">Reference No: {referenceNum}</div>
    </div>
  )
}

export default PaymentSuccess