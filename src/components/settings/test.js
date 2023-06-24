import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProfileTab from "./profileTab";
import PasswordTab from "./password";

function TestTab() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="nav nav-tabs generic-tab pb-30px"
    >
      <Tab eventKey="profile" title="Profile" className="nav-link">
        <ProfileTab />
      </Tab>
      <Tab eventKey="password" title="Password">
        <PasswordTab />
      </Tab>
    </Tabs>
  );
}

export default TestTab;
