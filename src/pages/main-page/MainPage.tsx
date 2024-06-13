import { Counter } from "../../Component/Counter";
import * as classes from "./MainPage.module.scss"

const MainPage = () => {
  return (
    <div className={classes.container}>
      Main Page
      <Counter />
    </div>
  );
};

export default MainPage;
