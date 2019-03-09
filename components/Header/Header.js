import React, { Component } from "react";

import Link from "next/link";
import Head from "next/head";
import Router from "next/router";

import MOCK from "../../config/mock.json";
import ENV from "../../common/store";

import { observer } from "mobx-react";
import { Image, Menu, Dropdown, Container, Segment } from "semantic-ui-react";
import "../../common/variables.scss";
import { login, logout } from "../../api";

class Header extends Component {
  logout() {
    logout()
      .then(response => {
        ENV.logout();
        alert("로그아웃 하였습니다.");
        Router.push("/index");
      })
      .catch(err => {
        ENV.logout();
        alert("로그아웃 하였습니다.");
        Router.push("/index");
      });
  }

  login() {
    login()
      .then(response => {
        ENV.login();
        alert("로그인 하였습니다.");
      })
      .catch(err => {
        ENV.logout();
        alert("로그인이 실패하였습니다.");
      });
  }

  render() {
    const menuItem = MOCK.HEADER.navbar.map(item => {
      return (
        <Menu.Item name={item.value} key={item.value + new Date()}>
          <Link prefetch scroll={false} href={"/" + item.path} key={item.path}>
            <a>{item.value}</a>
          </Link>
        </Menu.Item>
      );
    });

    return (
      <header>
        <Head>
          <title>{"영신 VSC"}</title>
        </Head>
        <Segment inverted>
          <Menu
            borderless
            fixed={"top"}
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"
            }}
          >
            <Container>
              <Menu.Item>
                <Link href={"/index"}>
                  <Image size="tiny" src={"/static/assets/ci/color.png"} />
                </Link>
              </Menu.Item>
              {menuItem}

              <Menu.Item>
                <Dropdown text="마이페이지" pointing className="link item">
                  <Dropdown.Menu>
                    {ENV.loginStatus == true && (
                      <React.Fragment>
                        <Dropdown.Item onClick={this.logout}>
                          {"로그아웃"}
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link href={"/mypage"}>
                            <a>{"계정정보"}</a>
                          </Link>
                        </Dropdown.Item>
                      </React.Fragment>
                    )}
                    {ENV.loginStatus == false && (
                      <React.Fragment>
                        <Dropdown.Item onClick={this.login}>
                          <a>{"로그인"}</a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link href={"/signup"}>
                            <a>{"회원가입"}</a>
                          </Link>
                        </Dropdown.Item>
                      </React.Fragment>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>

              <Menu.Item position="right">
                <Dropdown
                  button
                  className="icon"
                  floating
                  labeled
                  icon="world"
                  options={[
                    {
                      key: "Korean",
                      text: "한국어",
                      value: "Korean"
                    }
                  ]}
                  search
                  text={"언어"}
                />
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </header>
    );
  }
}

export default observer(Header);
