import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error ocurred</h1>
        <p>There was an unexpected error</p>
      </main>
    </>
  );
};

export default ErrorPage;
