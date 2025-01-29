import React from 'react'

const data = [
    {
        "productname":"Rab"
    },
    {
        "productname":"Rab"
    }
]

const Abc = () => {
  return (
    <div>
        {
            data.map((item,index)=>{
                return <div key={index}>
                    {item.productname}
                </div>
            })
        }
    </div>
  )
}

export default Abc