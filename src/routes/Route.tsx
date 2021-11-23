import React from "react";

import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from "react-router-dom";
import LoadingOverlay from "@Components/LoadingOverlay";
import MainContainer from "@Components/MainContainer";

interface Props extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  roles?: string[];
  code?: string;
}

const Route = ({
  isPrivate = false,
  component: Component,
  roles,
  ...rest
}: Props) => {
  // const { user, loading } = useSelector((state) => state.auth);
  // const history = useHistory();

  // if (history.location.pathname === "/logout" && user) {
  //   return (
  //     <ReactDOMRoute
  //       {...rest}
  //       render={() => {
  //         return <Component />;
  //       }}
  //     />
  //   );
  // }

  // if (loading) {
  //   return <div></div>;
  // }

  // if (user) {
  //   <Redirect
  //     to={{
  //       pathname: "/dashboard",
  //     }}
  //   />;
  // }

  // if (user && isPrivate && roles) {
  //   if (roles.includes(user.role.type)) {
  //     return (
  //       <ReactDOMRoute
  //         {...rest}
  //         render={() => {
  //           return (
  //             <MainContainer>
  //               <Component />
  //             </MainContainer>
  //           );
  //         }}
  //       />
  //     );
  //   }
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: "/dashboard",
  //       }}
  //     />
  //   );
  // }

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return (
          <LoadingOverlay>
            <MainContainer>
              <Component />
            </MainContainer>
          </LoadingOverlay>
        );
      }}
    />
  );

  //TODO: NOT IMPLEMENTED YET

  // return (
  //   <ReactDOMRoute
  //     {...rest}
  //     render={({ location }) => {
  //       /* isPrivate/user (is signed)
  //         true/true --> OK
  //         true/false --> Redirect to Logon
  //         false/true --> Redirect to Dashboard
  //         false/false --> OK
  //       */

  //       return isPrivate === !!user ? (
  //         isPrivate ? (
  //           <MainContainer>
  //             <Component />
  //           </MainContainer>
  //         ) : (
  //           <LoadingOverlay>
  //             <Component />
  //           </LoadingOverlay>
  //         )
  //       ) : (
  //         <Redirect
  //           to={{
  //             pathname: isPrivate ? "/" : "/home",
  //             state: { from: location },
  //           }}
  //         />
  //       );
  //     }}
  //   />
  // );
};

export default Route;
