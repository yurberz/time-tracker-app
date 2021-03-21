import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 60px 5px 5px 5px;

  width: 100%;

  overflow: hidden;

  @media screen and (min-width: 560px) {
    padding-left: 10px;
    padding-right: 10px;

    width: 560px;
  }
`;

const Layout = ({ children }) => {
  return <Div>{children}</Div>;
};

export default Layout;
