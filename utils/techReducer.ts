const techReducer = (state: any, action: any) => {
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