import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const err = useRouteError();

  return (
    <>
      <div style={{ textAlign: "center", margin: "15%" }}>
        <h1>Opps...Something went wrong.....!!!</h1>
        <br></br>
        <span style={{ fontSize: "22px", fontWeight: 600, color: "red" }}>
          {err.status} : {err.statusText}
        </span>
      </div>
    </>
  );
};
export default ErrorComponent;
