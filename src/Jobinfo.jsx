import React from 'react'

const Jobinfo = ({jobs}) => {

  const {company, dates, duties, title} = jobs[0];

  return (
    <article>
      <h1>{company}</h1>
    </article>
    
  )
}

export default Jobinfo