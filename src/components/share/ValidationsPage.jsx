import { Data404 } from "./Data404";
import { Error403 } from "./Error403";
import { ErrorGeneric } from "./ErrorGeneric";
import { Loading } from "./Loading";

export function ValidationsPage({loading, errors, children, data}) {
  return (
    <>
    hola
      {loading && <Loading />}
      {errors === "404" && <Data404 />}
      {errors == "403" && <Error403 />}
      {errors && errors !== "403" && errors !== "404" && <ErrorGeneric />}
      {(!loading && !errors && data) && <>{children}</>}
    </>
  );
}
