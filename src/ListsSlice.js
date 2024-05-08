import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const uniqueId = uuid();
const id = uniqueId.slice(0, 8);
const listId = uuid().slice(0, 8);
console.log("in");

const initialState = {
  data: [],
  currentUser: {},
  currentState: "",
};

// {
//     userId: '1',
//     userName: '',
//     password: '',
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
    logIn(state, action) {
      state.data.push({
        userId: id,
        userName: action.payload.username,
        password: action.payload.password,
        boards: [],
        isLoggedIn: true,
      });
      state.currentUser = {
        userId: id,
        userName: action.payload.username,
        boards: [],
      };
    },
    addWorkSpace(state, action) {
      const boardId = uuid().slice(0, 8);

      const currentIndex = state.data.findIndex((data) => {
        return data.userId === state.currentUser.userId;
      });
      state.data[currentIndex] = {
        ...state.data[currentIndex],
        boards: [
          ...state.data[currentIndex].boards,
          {
            boardId: boardId,
            boardTitle: action.payload,
            lists: [],
          },
        ],
      };
      state.currentUser = {
        ...state.currentUser,
        boards: [
          ...state.currentUser.boards,
          {
            boardId: boardId,
            boardTitle: action.payload,
            lists: [],
          },
        ],
      };
    },
    currentWorkspace(state, action) {
      const currentIndex = state.data.findIndex((data) => {
        return data.userId === state.currentUser.userId;
      });
      state.data[currentIndex] = {
        ...state.data[currentIndex],
        currentWorkspace: action.payload,
      };
      state.currentUser = {
        ...state.currentUser,
        currentWorkspace: action.payload,
      };
    },
    addList(state, action) {
      const currentIndex = state.data.findIndex((data) => {
        return data.userId === state.currentUser.userId;
      });
      const currentWorkspaceIndex = state.data[currentIndex].boards.findIndex(
        (board) => {
          return state.currentUser.currentWorkspace === board.boardId;
        }
      );

      state.data[currentIndex] = {
        ...state.data[currentIndex],
        boards: state.data[currentIndex].boards.map((board, index) => {
          if (index === currentWorkspaceIndex) {
            return {
              ...board,
              lists: [
                ...board.lists,
                {
                  listId,
                  listTitle: action.payload,
                },
              ],
            };
          } else {
            return board;
          }
        }),
      };
      state.currentUser = {
        ...state.currentUser,
        boards: state.currentUser.boards.map((board, index) => {
          if (index === currentWorkspaceIndex) {
            return {
              ...board,
              lists: [
                ...board.lists,
                {
                  listId,
                  listTitle: action.payload,
                },
              ],
            };
          } else {
            return board;
          }
        }),
      };
    },
    addCard(state, action) {},
  },
});

export const { logIn, addWorkSpace, addList, currentWorkspace } =
  dataListSlice.actions;
export default dataListSlice.reducer;
