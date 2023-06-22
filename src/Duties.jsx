import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const Duties = ({duties }) => {

  // console.log(duties[0]);
  return (
    <div>
      {duties.map((duty, index) => {
        return <div key={index} className='job-desc'> 
          <FaAngleDoubleRight className='job' />
          <p>{duty}</p>
        </div>
      })}
    </div>
  )
}

export default Duties