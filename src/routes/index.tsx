import { Switch, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Home from "@Modules/home";
import Route from "./Route";

const Main = () => {
  const location = useLocation();

  const transition = useTransition(location, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });

  return transition((props, item) => {
    return (
      <animated.div style={{ ...props }}>
        <Switch location={item}>
          <Route path="/" component={Home} />
        </Switch>
      </animated.div>
    );
  });
};

export default Main;
