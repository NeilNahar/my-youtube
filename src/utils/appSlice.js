import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState : {sideBarShow:true},
  reducers: {
    sideBarToggle: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.sideBarShow = !state.sideBarShow
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.sideBarShow = !state.sideBarShow
    // },
  },
})

// Action creators are generated for each case reducer function
export const { sideBarToggle } = appSlice.actions

export default appSlice.reducer