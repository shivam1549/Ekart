import React from 'react'

const Reviews = () => {
  return (
    <div className="col-md-12 main-column">
    <div className="row align-items-center">
      <div className="username col-md-2">
        <p>John doe</p>
      </div>
      <div className="mesagetext col-md-10">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus perferendis ut nostrum, minus sequi quibusdam culpa illo et laborum illum neque dicta repellendus id, officiis alias fugiat nihil pariatur porro!</p>
        <div className="stars">
        <i className='ti ti-star'></i>
        <i className='ti ti-star'></i>
        <i className='ti ti-star'></i>
        <i className='ti ti-star'></i>
        </div>
      </div>
    </div>
</div>
  )
}

export default Reviews