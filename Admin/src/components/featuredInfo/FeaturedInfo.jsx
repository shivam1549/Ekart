import React, { useEffect, useState } from 'react'
import { userRequest } from '../../requestMethod'
const FeaturedInfo = () => {
    const [income,setIncome] = useState([])
    const [perc,setPerc] = useState(0)
    useEffect(()=>{
        const getIncome = async () =>{
            try{
                const res = await userRequest.get("orders/income")
                setIncome(res.data)
                setPerc((res.data[1].total*100 / res.data[0].total) - 100)
            }catch{}
        }
        getIncome()
    },[])
    console.log(income);
    console.log(perc);
  return (
    <div className="card card-tale">
    <div className="card-body">
      <p className="mb-4">Revenue</p>
      {/* <p className="fs-30 mb-2">${income[1].total}</p> */}
      <p>
        % {Math.floor(perc)}{" "}
        {
            perc < 0 ? (
                <span>Negative</span>
            ):(
                <span>Positive</span> 
            )
        }
      </p>
    </div>
  </div>
  )
}

export default FeaturedInfo