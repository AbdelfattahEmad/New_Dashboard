import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import Loader from "./Loader";

const GlobalLoader = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const showLoader = isFetching > 0 || isMutating > 0;

  const isLoading = isFetching || isMutating;

  return isLoading ? <Loader /> : null;
};

export default GlobalLoader;
