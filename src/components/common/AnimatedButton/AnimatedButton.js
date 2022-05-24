import React, { useCallback } from 'react';
import {
    Animated,
    View,
    ViewStyle,
    TouchableOpacity,
} from 'react-native';
import { debounce } from 'lodash';
import styles from './styles.js';

// Create touchable animated component
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

// Define the animation scale
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
            transform: [{ scale: interpolation }],
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
        animationConfig = { startSize: 1, endSize: 0.95 },
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

export { AnimatedButton };
