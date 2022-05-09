import React from 'react'
import "./signStyles.css"

const Account = () => {
  const data = JSON.parse(localStorage.getItem("accountData")) || {}
  // console.log(data)
  return (
    <div>
        <h1>Account</h1>
        <div className='accountHistory'>
          <h3>My Account</h3> <br />
          <h3>Order History</h3>
          <p>You haven't placed any orders yet.</p>
        </div>
        <div className='accountDetails'>
          <h3>Account Details</h3>
          <hr />
          <p><b>Name </b><span style={{paddingLeft:"105px"}}>{data.firstName+" "+data.lastName}</span></p>
          <hr/>
          <p><b>Email</b><span style={{paddingLeft:"110px"}}>{data.email}</span></p>
          <hr />
          <p><b>Country</b><span style={{paddingLeft:"90px"}}>India</span></p>
          <hr />
        </div>
    </div>
  )
}

export default Account