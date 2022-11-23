import { Fab, Icon } from "native-base";
import React from "react";
import { View, FlatList, Text } from "react-native";
import TodoComponent from "../component/TodoComponent";
import TodoComponentItem from "../component/TodoComponentItem";
import todoListDummy from "../dummyData/dummyDataTodos";
import useChangeStatusTodo from "../hooks/useChangeStatusTodo";
import styles from "../styles";
import {Checkbox} from 'native-base';

const TodoList = () => {
    const {onPress} = useChangeStatusTodo()

    const renderItem = ({item}) => (
        <View style={styles.containerViewCheckBox}>
          <Checkbox
            value={item.title}
            accessibilityLabel={item.title}
            onPress={onPress}>
            <Text style={styles.title}>{item.title}</Text>
          </Checkbox>
        </View>
      );

    return(
    <View style={styles.container}>
        <FlatList
          data={todoListDummy}
          renderItem={renderItem}
          keyExtractor={todoListDummy => todoListDummy.id}
          extraData={todoListDummy}
        />
  
        {/* <Fab
          renderInPortal={false}
          shadow={2}
          size="sm"
          icon={<Icon color="white" name="plus" size="sm" />}
        /> */}
    </View>
    )
}
export default TodoList
