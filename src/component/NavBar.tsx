import React from "react";
import { Menu } from "@fluentui/react-northstar";

class NavBar extends React.Component {
  render() {
    return (
      <Menu
        items={[
          "Profile",
          "My account",
          {
            content: "Messages",
            key: "messages",
            menu: ["Drafts", "Archive"],
          },
          "Logout",
        ]}
      />
    );
  }
}

export default NavBar;
