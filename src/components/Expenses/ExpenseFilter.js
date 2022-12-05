import React from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = () => {
    const onFilterChange = () => {

    }

   return (
       <div className="expenses-filter">
           <div className="expenses-filter__control">
               <label className="expenses-filter__label">Filter by year</label>
               <div>
                   <select className="expenses-filter__select"
                            onChange={onFilterChange}>
                       <option value="2022">2022</option>
                       <option value="2021">2021</option>
                       <option value="2020">2020</option>
                       <option value="2019">2019</option>
                   </select>
               </div>
           </div>
       </div>
   )
}

export default ExpenseFilter;