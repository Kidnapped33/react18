import MySearch from "./MySearch";

let searchList: any = [];

const MyButton = function () {
  return <button>I'm a button</button>;
};

const Home: React.FC = () => {
  return (
    <>
      <MySearch searchList={searchList} />
      button
      <MyButton></MyButton>
    </>
  );
};

export default Home;
