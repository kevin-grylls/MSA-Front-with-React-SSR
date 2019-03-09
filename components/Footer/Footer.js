/* eslint-disable max-len */

import React from "react";
import { Container, Segment } from "semantic-ui-react";

export default () => (
  <footer>
    <Segment inverted tertiary>
      <Container>
        <p>
          {"(주)영신브이에스씨 "}
          {" | "}
          {" 경기도 광주시 진토길 45-1(목동) "}
          {" | "}
          {" 대표이사: 유영길 "}
          {" | "}
          {" 사업자 등록번호: 126-86-00291 "}
          <br />
          {" 대표전화: 031-797-7648 "}
          {" | "}
          {" FA 사업부: 031-768-3027 "}
          {" | "}
          {" FAX: 031-767-7649 "}
          {" | "}
          {" E-MAIL: youngshinvsc@hanmail.net "}
          <br />
          {"COPYRIGHT ⓒ YOUNGSHIN VSC COMPANY ALL RIGHT RESERVED."}
        </p>
      </Container>
    </Segment>
  </footer>
);
