import gql from "graphql-tag";

export const QUERY_LIST = gql`
  {
    list {
      title
      content
      category
      created_at
      views
      author {
        name
        id
      }
      reply {
        comment
      }
    }
  }
`;

export const login = () =>
  new Promise((resolve, reject) => resolve("Login Succeed"));

export const logout = () =>
  new Promise((resolve, reject) => resolve("Logout Succeed"));
