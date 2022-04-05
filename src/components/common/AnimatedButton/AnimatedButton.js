// import React, {Fragment, useCallback} from 'react';
// import {Animated, Easing, View, AnimatedTouchableOpacity} from 'react-native';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
// import styles from './styles.js';

// const AnimatedButton: React.FC = props => {
//   const {
//     extraPadding = true,
//     rounded = false,
//     isDebounce = false,
//     animate = true,
//     INTERVAL = 500,
//     onTapped,
//     children,
//     variant,
//     leftAccessory,
//     rightAccessory,
//     size,
//     disabled,
//     isIconButton,
//     animationConfig = {startSize: 1, endSize: 0.95},
//   } = props;

//   const scaleInAnimated = new Animated.Value(0);
//   // This value is used for inputRange
//   // Initial value set to 0, which maps to scale 1 in the following buttonScale
//   // that means the initially the button is not scaled.
//   const animatedValue = new Animated.Value(0);

//   // This will be used for scale transform style in Animated.View
//   // 0, 0.5 and 1 are animatedValue over a period of time specificed by duration.
//   // 1, 1.25 and 1.5 are the scale value for the component at each inputRange values.
//   // 0 mapes to 1, 0.5 maps to 1.25, and 1 maps to 1.5
//   const buttonScale = animatedValue.interpolate({
//     inputRange: [0, 0.5, 1],
//     outputRange: [1, 1.25, 1.5],
//   });

//   // When button is pressed in, animate the animatedValue
//   // to 1 in 250 milliseconds.
//   const onPressIn = () => {
//     Animated.timing(animatedValue, {
//       toValue: 1,
//       duration: 250,
//       easing: Easing.linear,
//       useNativeDriver: true,
//     }).start();
//   };

//   // When button is pressed out, animate the animatedValue
//   // to 0 in 100 milliseconds.
//   const onPressOut = () => {
//     Animated.timing(animatedValue, {
//       toValue: 0,
//       duration: 100,
//       easing: Easing.linear,
//       useNativeDriver: true,
//     }).start();
//   };

//   // The animated style for scaling the button within the Animated.View
//   const animatedScaleStyle = {
//     transform: [{scale: buttonScale}],
//   };

//   return (
//     // <TouchableWithoutFeedback
//     <AnimatedTouchableOpacity
//       activeOpacity={0.95}
//       onPressIn={onPressIn}
//       onPressOut={onPressOut}
//       extraPadding={extraPadding}
//       isIconButton={isIconButton}
//       disabled={disabled}
//       rounded={rounded}
//       size={size}
//       variant={variant}
//       rightAccessory={leftAccessory}
//       leftAccessory={rightAccessory}>
//       {/* <Animated.View style={[styles.iconContainer, animatedScaleStyle]}> */}
//       <Fragment>
//         {props.leftAccessory && (
//           <View style={{paddingRight: 10}}>{leftAccessory}</View>
//         )}
//       </Fragment>

//       <View>{children}</View>

//       <Fragment>
//         {props.rightAccessory && (
//           <View style={{paddingLeft: 10}}>{rightAccessory}</View>
//         )}
//       </Fragment>
//       {/* </Animated.View> */}
//     </AnimatedTouchableOpacity>
//     // </TouchableWithoutFeedback>
//   );
// };

// export default AnimatedButton;

import React, {Fragment, useCallback} from 'react';
import {
  Animated,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {debounce} from 'lodash';
import styles from './styles.js';

const {width} = Dimensions.get('window');

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const scaleAnimation = {
  getScaleTransformationStyle(
    animated: Animated.Value,
    startSize = 1,
    endSize = 0.95,
  ): Animated.WithAnimatedObject<ViewStyle> {
    const interpolation = animated.interpolate({
      inputRange: [0, 1],
      outputRange: [startSize, endSize],
    });

    return {
      transform: [{scale: interpolation}],
    };
  },

  pressInAnimation(animated: Animated.Value, duration = 50) {
    animated.setValue(0);
    Animated.timing(animated, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  },

  pressOutAnimation(animated: Animated.Value, duration = 50) {
    animated.setValue(1);
    Animated.timing(animated, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  },
};

const AnimatedButton = props => {
  const {
    isDebounce = false,
    animate = true,
    INTERVAL = 500,
    onTapped,
    children,
    borderWidth,
    backgroundColor,
    borderRadius,
    paddingHorizontal,
    paddingVertical,
    animationConfig = {startSize: 1, endSize: 0.95},
  } = props;
  const scaleInAnimated = new Animated.Value(0);

  const handlePress = useCallback(() => onTapped && onTapped(), [onTapped]);
  const debouncedClick = debounce(() => handlePress(), INTERVAL, {
    leading: true,
    trailing: false,
    maxWait: INTERVAL,
  });
  const handleDebouncePress = () =>
    isDebounce ? debouncedClick() : handlePress();

  const onPressIn = () =>
    animate && scaleAnimation.pressInAnimation(scaleInAnimated);

  const onPressOut = () =>
    animate && scaleAnimation.pressOutAnimation(scaleInAnimated);

  return (
    <AnimatedTouchable
      activeOpacity={0.95}
      onPress={handleDebouncePress}
      onPressIn={onPressIn}
      style={scaleAnimation.getScaleTransformationStyle(
        scaleInAnimated,
        animationConfig.startSize,
        animationConfig.endSize,
      )}
      onPressOut={onPressOut}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: backgroundColor ? backgroundColor : 'gray',
            borderWidth: borderWidth ? borderWidth : 0,
            borderRadius: borderRadius ? borderRadius : 10,
            paddingHorizontal: paddingHorizontal ? paddingHorizontal : 10,
            paddingVertical: paddingVertical ? paddingVertical : 10,
          },
        ]}>
        <View>{children}</View>
      </View>
    </AnimatedTouchable>
  );
};

export {AnimatedButton};
