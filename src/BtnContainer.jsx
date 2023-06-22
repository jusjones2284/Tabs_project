import React from 'react'

const BtnContainer = ({ jobs }) => {

  // console.log(jobs.duties);

  return (
    <div className='btn-container'>
      {jobs.map((item)=>{
        return <button key={item.id}
        // onClick={()=>}
        > {item.company}

        </button>
      })}

    </div>
  )
}

export default BtnContainer