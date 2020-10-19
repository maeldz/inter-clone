import React from "react";

import { Container, Content } from "./styles";

const Wrapper: React.FC = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default Wrapper;
