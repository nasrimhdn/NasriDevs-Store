import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

//MUI IMPORTS
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// creating styled components
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  fonst-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 10px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  color: #383838;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
// ===end of creating styled components===

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);
  ////////////////////////////////////////////////////////////////////////
  // const cart = useSelector((state) => state.cart);
  // console.log("navvvvvvcart isssszzzz");
  // console.log(cart);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to={`/`} style={{ color: "black", textDecoration: "none" }}>
            <Logo>NASRIDEVS.STORE</Logo>
          </Link>
        </Center>
        <Right>
          <Link
            to={`/register`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link
            to={`/login`}
            style={{ color: "black", textDecoration: "none" }}
          >
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to={`/cart`} style={{ color: "black", textDecoration: "none" }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
