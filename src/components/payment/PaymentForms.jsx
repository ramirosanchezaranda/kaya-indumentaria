import React, { useState } from 'react'
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs'

const PaymentForms = () => {
    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    })

    const { 
        wrapperProps, 
        getCardNumberProps, 
        getExpiryDateProps, 
        getCVCProps 
    } = usePaymentInputs()

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const processPayment = () => {
        console.log("Payment details:", state)
    }

    return (
        <div className="card bg-black brutalist-border shadow-md p-6">
            <div className="card-body space-y-4 w-full">
                <PaymentInputsWrapper 
                    {...wrapperProps} 
                    className="space-y-4 "
                >
                    <div className="flex space-y-4">
                        <input 
                            {...getCardNumberProps()}
                            name="number"
                            value={state.number}
                            onChange={handleInputChange}
                            placeholder="Card Number"
                            className="w-full border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-kaya-accent"
                        />
                    </div>
                    <div className="flex space-x-4 pl-4">
                        <input 
                            {...getExpiryDateProps()}
                            name="expiry"
                            value={state.expiry}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            className="w-1/2 px-4 py-2 border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-kaya-accent"
                        />
                        <input 
                            {...getCVCProps()}
                            name="cvc"
                            value={state.cvc}
                            onChange={handleInputChange}
                            placeholder="CVC"
                            className="w-1/2 px-4 py-2 border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-kaya-accent"
                        />
                    </div>
                </PaymentInputsWrapper>

                <div className="form-group">
                    <label 
                        htmlFor="name" 
                        className="block text-sm font-medium text-gray-500 mb-2"
                    >
                        Nombre del Titular
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        maxLength="30"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-kaya-accent"
                        value={state.name}
                        onChange={handleInputChange}
                        placeholder="Nombre como aparece en la tarjeta"
                    />
                </div>

                <button 
                    onClick={processPayment} 
                    type="button" 
                    className="w-full bg-kaya-accent text-white py-3 brutalist-border hover:bg-red-700 transition-colors duration-300"
                >
                    Pagar
                </button>
            </div>
        </div>
    )
}

export default PaymentForms