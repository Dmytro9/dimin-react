import React, { Component } from "react";
import CollapsMenuBtn from "../components/top-line/collapse-menu-btn";
import Logo from "../components/top-line/logo";
import Search from "../components/top-line/search";

class TopPage extends Component {
  render() {
    return (
      <div className="page-top clearfix">
        <Logo />
        <CollapsMenuBtn />
        <Search />
        <div className="user-profile clearfix">
          <div className="al-user-profile dropdown ">
            <a className="profile-toggle-link dropdown-toggle">
              <img src="http://placehold.it/25x25" alt="user-img" />
            </a>
            {/* <ul class="top-dropdown-menu profile-dropdown dropdown-menu">
                <li>
                  <i class="dropdown-arr" />
                </li>
                <li>
                  <a href="/">
                    <i class="fa fa-user" />
                    <span>Profile</span>
                  </a>
                </li>
                <li>
                  <a href="/'">
                    <i class="fa fa-cog" />
                    <span>Settings</span>
                  </a>
                </li>
                <li>
                  <a href="/table-demo" class="signout">
                    <i class="fa fa-power-off" />
                    <span>Sign out</span>
                  </a>
                </li>
              </ul> */}
          </div>
        </div>
      </div>
    );
  }
}

export default TopPage;
