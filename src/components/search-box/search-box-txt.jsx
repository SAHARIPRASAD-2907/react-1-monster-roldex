import React from "react";

import './search-box-style.css'

export const SearchBoxTxt = ({placeholder, handleChange})=>(
              <input
              className='search'
              type='search'
              placeholder={placeholder}
              onChange={handleChange}
             />

)

