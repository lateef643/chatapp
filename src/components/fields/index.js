import React from 'react';



const Fields = ({ formData }) => {
  return formData.map(item => (
        <input type={item.type} id={item.id} className={item.className} name={item.name} placeholder={item.label} />
    ))
}

export default Fields;