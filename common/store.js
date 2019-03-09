import { observable, action } from "mobx";

class Store {
  @observable loginStatus = false;

  @action.bound
  logout() {
    this.loginStatus = false;
    console.log("Login: True");
  }

  @action.bound
  login() {
    this.loginStatus = true;
    console.log("Login: False");
  }
}

export default new Store();
