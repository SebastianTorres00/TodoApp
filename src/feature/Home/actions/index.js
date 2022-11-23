// const addTodo = (payload) => ({
//     type: "IS_HOME",
//     payload:  {payload},
// })
const addTodo = (payload) => (dispatch) => {
    console.log("---> text", payload);
    const action = {
      type: "IS_HOME",
      payload:  {payload},
    }
    dispatch(action)
  }
  
export default addTodo