import { styled } from '@mui/material';
import Link from 'next/link';

export const HeaderContainer = styled('header')`
  position: fixed;
  height: 68px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #000;
`;

export const InnerHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 60px;
`;

export const DocTitle = styled('h1')``;

export const StyledLink = styled(Link)`
  color: #fff;
  font-weight: 700;
  text-decoration: none;
`;

export const DocGnb = styled('nav')``;

export const UnOrderList = styled('ul')`
  display: flex;
  justify-content: space-between;
`;

export const MenuList = styled('li')`
  position: relative;
  padding: 0px 20px;
`;

export const HeadUtils = styled('div')``;

export const SubMenus = styled('div')`
  position: absolute;
  top: 30px;
  background-color: #eee;
  border-radius: 16px;
  ul {
    width: 100px;
    padding: 20px 20px;
    li {
      padding: 10px 0;
    }
  }
`;
