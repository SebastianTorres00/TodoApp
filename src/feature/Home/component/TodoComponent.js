import React from 'react';
import {Text, View} from 'react-native';
// import styles from '../styles';
import {Checkbox} from 'native-base';
import styles from '../styles';

const TodoComponent = ({item, onPress}) => (
  <View style={styles.containerViewCheckBox}>
    <Checkbox
      value={item.title}
      accessibilityLabel={item.title}
      onPress={onPress}>
      <Text style={styles.title}>{item.title}</Text>
    </Checkbox>
  </View>
);

export default TodoComponent;
