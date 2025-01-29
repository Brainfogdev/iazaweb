import React from 'react'
import data from '@/data/oncology.json'

const OncologyComp = () => {
  return (
    <div className='grid grid-cols-3'>
        {
            data.map((item, index) => (
                <div key={index} className=''>
                    <h3 className='p-2 border'>{item.Product_Name}</h3>
                </div>
            ))
        }
    </div>
  )
}

export default OncologyComp