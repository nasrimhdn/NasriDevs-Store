import styled from "styled-components";

// creating styled components
const Container = styled.div`
  background-color: teal;
  height: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      SUPER DEALS .. FREE SHIPPING ON ORDERS OVER 500 NOW !!
    </Container>
  );
};

export default Announcement;
