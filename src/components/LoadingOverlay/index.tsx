import { useLoading } from "@Hooks/useLoading";
import LoadingComponent from "react-loading-overlay";
import { Flex, Spinner } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

interface ILoadingProps {
  isLoading: boolean;
}

const LoadingOverlay = ({ children }: Props) => {
  const { isLoading }: ILoadingProps = useLoading();

  return (
    <LoadingComponent
      active={isLoading}
      spinner={
        <Flex flex="1" alignItems="center" justifyContent="center">
          <Spinner />
        </Flex>
      }
      styles={{
        overlay: (base) => ({
          ...base,
          zIndex: 9999999999999,
          height: "100vh",
          position: "fixed",
        }),
      }}
      text="Loading..."
    >
      {children}
    </LoadingComponent>
  );
};

export default LoadingOverlay;
