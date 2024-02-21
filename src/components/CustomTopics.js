import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const CustomTopics = ({topicImage, topicName, progress}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          resizeMethod="auto"
          resizeMode="contain"
          source={topicImage}
          style={styles.topicImageStyle}
        />
      </View>
      <View style={styles.topicDetails}>
        <Text style={styles.topicNameTextStyle}>{topicName}</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, {width: `${progress * 100}%`}]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginVertical: moderateVerticalScale(8),
    borderRadius: moderateScale(8),
  },
  topicDetails: {
    marginLeft: moderateScale(8),
  },

  topicImageStyle: {
    height: moderateScale(72),
    width: moderateVerticalScale(78),
  },
  progressBarContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: moderateScale(8),
    marginTop: moderateVerticalScale(8),
    width: moderateScale(240),
  },
  progressBar: {
    height: moderateVerticalScale(8),
    backgroundColor: '#2196f3',
    borderRadius: moderateScale(8),
  },
  topicNameTextStyle: {
    fontSize: scale(18),
    fontWeight: '700',
    fontFamily: 'Rubik-Regular',
  },
});

export default CustomTopics;
