import React, { FC, useReducer } from 'react'
import techReducer from '../utils/techReducer'

const ReducerTest: FC = () => {
   const initialState = {
      filterTech: [],
   }

   const handleClick = () => {
      dispatch({ type: 'toggleFilter', payload: 'javascript' })
   }

   const [state, dispatch] = useReducer(techReducer, initialState)

   return (
      <div>
         <h1> Filter Tech </h1>
         <button onClick={handleClick}> Add </button>

         <div>
            {state.filterTech.map((techName, index) => (
               <h1 key={index}> {techName} </h1>
            ))}
         </div>
      </div>
   )
}
export default ReducerTest
