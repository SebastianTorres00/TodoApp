import React from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';
import {Checkbox} from 'native-base';
import useChangeStatusTodo from '../hooks/useChangeStatusTodo';
import TodoComponent from './TodoComponent';

const TodoComponentItem = ({item}) => {
    const { onPress} = useChangeStatusTodo()
    return (
        <TodoComponent
            item={item}
            onPress={onPress}
        />
    )};

export default TodoComponentItem;
