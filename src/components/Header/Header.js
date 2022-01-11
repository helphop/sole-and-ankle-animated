import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <NavContent>
              Sale
              <span>Sale</span>
            </NavContent>
          </NavLink>
          <NavLink href="/new">
            <NavContent>
              New&nbsp;Releases
              <span>New&nbsp;Releases</span>
            </NavContent>
          </NavLink>
          <NavLink href="/men">
            <NavContent>
              Men
              <span>Men</span>
            </NavContent>
          </NavLink>
          <NavLink href="/women">
           <NavContent>
              Women
              <span>Women</span>
            </NavContent>
          </NavLink>
          <NavLink href="/kids">
            <NavContent>
              Kids
              <span>Kids</span>
            </NavContent>
            </NavLink>
          <NavLink href="/collections">
            <NavContent>
              Collections
              <span>Collections</span>
            </NavContent>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavWrapper = styled.div`

`;


const NavLink = styled.a`
  --timing-in: 250ms;
  --timing-out: calc(2 * var(--timing-in));
  font-size: 1.125rem;
  display: block;
  height: 25px;
  overflow: hidden;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  &:hover > :first-child {
    transform: translateY(-50%);
    transition: var(--timing-in);
  }
  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const NavContent = styled.div`
  transform: translateY(0%);
  transition: transform var(--timing-out);
  & > span {
    display: block;
    font-weight: ${WEIGHTS.bold};
  }
  `;

export default Header;
