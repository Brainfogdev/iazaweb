import React from 'react'
import data from '@/data/medicine.json'

const MedicineComp = () => {
  const medicine = data.products
  
  return (
    <div className='grid grid-cols-3'>
      {
        medicine.map((item,index)=>{
          return <div className='border p-2' key={index}>
            {item}
          </div>
        })
      }
    </div>
  )
}

export default MedicineComp