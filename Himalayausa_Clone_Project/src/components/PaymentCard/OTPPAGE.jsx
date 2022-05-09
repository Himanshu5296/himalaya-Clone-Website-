import React from 'react'
import "./otp.css"
import { useNavigate } from 'react-router-dom'

const OTPPAGE = () => {
    const navigate=useNavigate()

  return (
    <div className='holepage'>
        <form onSubmit={()=>navigate('/Success')}>
      <div id="containerotp">
        <div className='moblie'>Mobile phone verification</div>
        <div>
          <div className='mobile2'>Enter the code we just send on your mobile phone</div>
          <div></div>
        </div>
        <div>
          <input
            type="text"
            id="fir"
            maxLength="1"
            
          />
          <input
            type="number"
            id="sec"
            pattern="[0-9]{1}"
          />
          <input
            type="number"
            id="thi"
            pattern="[0-9]{1}"

          />
          <input type="number" id="for" pattern="[0-9]{1}" />
        </div>
        <input type="Submit" />
        <div>Don't receive the code?</div>
        <div>Resend</div>
      </div>
    </form>
    </div>
  )
}

export default OTPPAGE