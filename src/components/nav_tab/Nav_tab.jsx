import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import "./nav_tab.css";
const Nav_tab = () => {
  const [key, setKey] = useState("Posts");
  return (
    <Tabs
      variant="underline"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 tab_container"
    >
      <Tab eventKey="Posts" title="Posts"></Tab>
      <Tab eventKey="About" title="About"></Tab>
      <Tab eventKey="Mentions" title="Mentions"></Tab>
      <Tab eventKey="Reviews" title="Reviews"></Tab>
      <Tab eventKey="Followers" title="Followers"></Tab>
      <Tab eventKey="Photos" title="Photos"></Tab>
      <Tab eventKey="More" title="More"></Tab>
    </Tabs>
  );
};

export default Nav_tab;
