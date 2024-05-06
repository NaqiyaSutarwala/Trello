import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

// {
//     userId: '1',
//     userName: '',
//       boards: [
//         {
//           boardId: 1,
//           lists: [
//             {
//                 listId: 1
//                 listTitle: '',
//                 card: [
//                     {
//                          cardId: 1
//                          cardTitle: ''
//                     }
//                 ]
//             }
//         ],
//         }
//       ]
   
//     isLoggedIn: '',
// }

const dataListSlice = createSlice({
  name: "dataList",
  initialState,
  reducers: {
    try(state, action) {
        
    },
  },
});

export const {} = dataListSlice.actions;
export default dataListSlice.reducer;
