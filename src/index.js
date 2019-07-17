import { Animated, Easing, Platform } from "react-native";

export function fromLeft(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: ({ layout, position, scene, scenes }) => {
      let opacity;
      const { index } = scene;
      const { initWidth } = layout;
      const lastSceneIndex = scenes[scenes.length - 1].index;
      // Test whether we're skipping back more than one screen
      if (lastSceneIndex - index > 1) {
        // Do not transoform the screen being navigated to
        if (scene.index === index) {
          opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1]
          });
        }
        // Hide all screens in between
        if (scene.index !== lastSceneIndex) {
          opacity = 0;
        }
      }
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [-initWidth, 0, 0]
      });

      return { opacity: opacity, transform: [{ translateX }] };
    }
  };
}

export function fromTop(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: ({ layout, position, scene }) => {
      const { index } = scene;
      const { initHeight } = layout;

      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [-initHeight, 0, 0]
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1]
      });

      return { opacity, transform: [{ translateY }] };
    }
  };
}

export function fromRight(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: ({ layout, position, scene, scenes }) => {
      let opacity;
      const { index } = scene;
      const { initWidth } = layout;
      const lastSceneIndex = scenes[scenes.length - 1].index;
      // Test whether we're skipping back more than one screen
      if (lastSceneIndex - index > 1) {
        // Do not transoform the screen being navigated to
        if (scene.index === index) {
          opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1]
          });
        }
        // Hide all screens in between
        if (scene.index !== lastSceneIndex) {
          opacity = 0;
        }
      }
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [initWidth, 0, 0]
      });

      return { opacity: opacity, transform: [{ translateX }] };
    }
  };
}
export function fromBottom(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: ({ layout, position, scene }) => {
      const { index } = scene;
      const { initHeight } = layout;

      const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [initHeight, 0, 0]
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1]
      });

      return { opacity, transform: [{ translateY }] };
    }
  };
}

export function fadeIn(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: ({ position, scene }) => {
      const { index } = scene;

      const opacity = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [0, 1]
      });

      return { opacity };
    }
  };
}

export function fadeOut(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: ({ position, scene }) => {
      const { index } = scene;

      const opacity = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [0, 1, 0]
      });

      return { opacity };
    }
  };
}

export function zoomIn(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: ({ position, scene }) => {
      const { index } = scene;
      let start = 0;

      if (Platform.OS !== "ios") {
        start = 0.005;
      }

      const scale = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [start, 1]
      });

      return { transform: [{ scale }] };
    }
  };
}

export function zoomOut(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: ({ position, scene }) => {
      const { index } = scene;

      const scale = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [10, 1]
      });

      return { transform: [{ scale }] };
    }
  };
}

export function flipY(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: ({ position, scene }) => {
      const { index } = scene;

      const rotateY = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: ["180deg", "0deg"]
      });

      return { transform: [{ rotateY }], backfaceVisibility: "hidden" };
    }
  };
}

export function flipX(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: ({ position, scene }) => {
      const { index } = scene;

      const rotateX = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: ["180deg", "0deg"]
      });

      return { transform: [{ rotateX }], backfaceVisibility: "hidden" };
    }
  };
}
