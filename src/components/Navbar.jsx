import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: fit-content;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
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
 
`;

const Image = styled.img`
	${mobile({ display: "none" })}
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

const Navbar = () => {
  const linkStyle = {textDecoration: 'none',color:'inherit'};
  const quantity = useSelector(state => state.cart.quantity)
  return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder='Search' />
						<Search style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Link style={linkStyle} to='/'>
						<Logo>
							<Image
								src='https://pps.whatsapp.net/v/t61.24694-24/292196186_164264006110830_6725763650638479743_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVzwuQqiyhWkxxl-H6G9OUB3noIBhSYl-BRSwCAaTaMUGw&oe=63003607'
								alt=''
							/>
						</Logo>
					</Link>
				</Center>
				<Right>
					<Link to='/register'>
						<MenuItem>REGISTER</MenuItem>
					</Link>
					<Link to='/login'>
						<MenuItem>SIGN IN</MenuItem>
					</Link>
					<MenuItem>
						<Link style={linkStyle} to='/cart'>
							<Badge badgeContent={quantity} color='primary'>
								<ShoppingCartOutlined />
							</Badge>
						</Link>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
