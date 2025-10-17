import { useNavigation } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function RouteLoader({ children }) {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Loader />}
      {children}
    </>
  );
}
