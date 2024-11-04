import { View, Text } from 'react-native'
import React from 'react'
import { Datepicker } from '@ui-kitten/components'

const CustomDatePicker = (props) => {

    const {onSelectDate} = props;
  return (
    <View>
      <Datepicker {...props} onSelect={nextDate=> onSelectDate(nextDate)}/>
    </View>
  )
}

export default CustomDatePicker