import React from 'react'

function DebitCard() {
  return (
    <div className='cardGroup'>
        <img src='/VisaLogo.png' alt='' className='card-logo'/>
        <img src='/chip.png' alt='' className='card-chip'/>
        <div className='card-number'>1234 567 8920 3200</div>
        <div className='card-name'>Viannie Abaine</div>
        <div className='card-from'>10/21</div>
        <div className='card-to'>10/25</div>
        <div className='card-ring'></div>
    </div>
  )
}

export default DebitCard