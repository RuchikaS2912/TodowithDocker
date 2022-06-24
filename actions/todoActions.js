import axios from 'axios';

export const getAllTodos = () => async (dispatch) => {
  dispatch({ type: 'FETCHING_TODOS' });
  try {
    const result = axios.get('http://localhost:3002/api/todos/gettodos');
    console.log(result);
    dispatch({ type: 'FETCHING_TODOS_SUCCESS', payload: result.data });
  } catch (error) {
    dispatch({ type: 'FETCHING_TODOS_FAILED', payload: error.message });
  }
};

export const postTodo = () => async (dispatch) => {
  dispatch({ type: 'TODO_POST_REQUEST' });
  try {
    const result = axios.post('http://localhost:3002/api/todos/posttodos');
    console.log(result);
    dispatch({ type: 'TODO_POST_SUCCESS', payload: result.data });
  } catch (error) {
    dispatch({ type: 'TODO_POST_FAILURE', payload: error.message });
  }
};
