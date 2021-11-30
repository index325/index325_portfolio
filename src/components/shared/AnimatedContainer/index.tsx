import VisibilitySensor from "react-visibility-sensor";
import { Spring, animated } from "react-spring";
import { useState } from "react";

interface IAnimatedContainerProps {
  children: React.ReactNode;
  appearFrom?: "top" | "bottom" | "left" | "right";
  appearDelay?: number;
  topOffset?: number;
  enableFade?: boolean;
  enableTranslate?: boolean;
}

const AnimatedContainer = ({
  children,
  appearFrom = "right",
  topOffset = 0,
  appearDelay = 300,
  enableFade = true,
  enableTranslate = true,
  ...props
}: IAnimatedContainerProps) => {
  const [isListenerEnabled, setListenerEnabled] = useState(true);

  const getFrom = () => {
    switch (appearFrom) {
      case "bottom":
        return "translateY(0px)";
      case "top":
        return "translateY(0px)";
      case "left":
        return "translateX(0px)";
    }

    return "translateX(0px)";
  };

  const getTo = () => {
    switch (appearFrom) {
      case "bottom":
        return "translateY(200px)";
      case "top":
        return "translateY(-40px)";
      case "left":
        return "translateX(-40px)";
    }

    return "translateX(200px)";
  };

  const animateOnce = (isVisible: boolean) => {
    if (isVisible) {
      setListenerEnabled(false);
    }
  };

  return (
    <VisibilitySensor
      partialVisibility
      offset={{ top: topOffset }}
      active={isListenerEnabled}
      onChange={(isVisible) => animateOnce(isVisible)}
    >
      {({ isVisible }) => (
        <Spring
          delay={300}
          to={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? getFrom() : getTo(),
          }}
        >
          {(styles) => <animated.div style={styles}>{children}</animated.div>}
        </Spring>
      )}
    </VisibilitySensor>
  );
};

export default AnimatedContainer;
