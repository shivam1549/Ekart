import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className="row align-items-center">
            <div className="col-md-6">
                <div className='d-flex messages align-items-center'>
                    <span><i className='ti ti-comment'></i></span>
                    <div className='mx-2'>
                        <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                        <p>Get Latest News, Offers And Discounts.</p>
                    </div>

                </div>

            </div>
            <div className="col-md-6">
                <div className="input-group mb-3 messagess">
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <span className="input-group-text" id="basic-addon2"> <i className='ti-arrow-right'></i> </span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe