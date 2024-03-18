import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomTheme from '../constants/CustomTheme';

const CustomTopics = ({topicImage, topicName, progress, onPress}) => {
  const {darkmodeColor, darkBorderColor, darkBackgroundColor} = CustomTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: darkBackgroundColor,
            borderColor: darkBorderColor,
          },
        ]}>
        <View>
          <Image
            resizeMode="cover"
            source={topicImage}
            style={[
              styles.topicImageStyle,
              {
                borderRadius: moderateScale(10),
              },
            ]}
          />
        </View>
        <View style={styles.topicDetails}>
          <Text
            style={[
              styles.topicNameTextStyle,
              {textTransform: 'capitalize', color: darkmodeColor},
            ]}>
            {topicName}
          </Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, {width: `${progress * 100}%`}]} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.4,
    marginVertical: moderateVerticalScale(8),
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateVerticalScale(8),
    justifyContent: 'space-evenly',
    width: moderateScale(350),
  },
  topicDetails: {
    marginLeft: moderateScale(8),
  },

  topicImageStyle: {
    height: moderateScale(78),
    width: moderateVerticalScale(78),
  },
  progressBarContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: moderateScale(8),
    marginTop: moderateVerticalScale(8),
    width: moderateScale(200),
  },
  progressBar: {
    height: moderateVerticalScale(8),
    backgroundColor: '#2196f3',
    borderRadius: moderateScale(8),
  },
  topicNameTextStyle: {
    fontSize: scale(16),
    fontWeight: '500',
    fontFamily: 'Rubik-Regular',
  },
});

export default CustomTopics;
