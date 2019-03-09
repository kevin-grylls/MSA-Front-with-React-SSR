import gql from "graphql-tag";

export const QUERY_SAMPLE = gql`
  {
    sample {
      id
      image
      header
      meta
      description
    }
  }
`;

export const login = () =>
  new Promise((resolve, reject) => resolve("Login Succeed"));

export const logout = () =>
  new Promise((resolve, reject) => resolve("Logout Succeed"));
