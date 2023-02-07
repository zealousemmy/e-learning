import { HomePage } from "./components/sidebar";
import SideBar from "./components/sidebar/sidebar";

// import SidebarComp from "components/sidebar/SidebarComp";

function App() {
  return (
    <div className="">
      <HomePage />
      <SideBar />
      <div class="dashboard-content-wrap">
        <h1>hello</h1>
      </div>
    </div>
  );
}

export default App;
