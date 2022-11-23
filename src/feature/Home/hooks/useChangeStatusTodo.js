import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addTodo from '../actions';
import todoListDummy from '../dummyData/dummyDataTodos';

const useChangeStatusTodo = () => {
  const dispatch = useDispatch();
  const [todoList, setTodoList] = useState([]);
  const stateAsk = useSelector(state => state)
  useEffect(() => {
    setTodoList([...todoList, todoListDummy]);
  }, []);
  useEffect(() => {
    console.log('----> stateAsk', stateAsk);
  }, [stateAsk]);
  const onPressTodoList = item => {
    console.log("**onPress**");
    dispatch(addTodo(item))
  };

  return {todoList, onPress: onPressTodoList};
};
export default useChangeStatusTodo;
