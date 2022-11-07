interface ReducerState {
   filterTech: Array<string>
}
interface ReducerAction {
   type: string
   payload: string
}

const techReducer = (state: ReducerState, action: ReducerAction) => {
   const { type, payload } = action
   switch (type) {
      case 'toggleFilter':
         if (state.filterTech.includes(payload)) {
            const removedToggle = state.filterTech.filter(
               (tech: string) => tech !== payload
            )
            return {
               filterTech: removedToggle,
            }
         } else {
            return {
               filterTech: [...state.filterTech, payload],
            }
         }
      default: {
         return state
      }
   }
}
export default techReducer