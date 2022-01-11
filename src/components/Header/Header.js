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
              <span data-hover="Sale">Sale</span>
            </NavContent>
          </NavLink>
          <NavLink href="/new">
            <NavContent>
              <span data-hover="New&nbsp;Releases">New&nbsp;Releases</span>
            </NavContent>
          </NavLink>
          <NavLink href="/men">
            <NavContent>
              <span data-hover="Men">Men</span>
            </NavContent>
          </NavLink>
          <NavLink href="/women">
           <NavContent>
              <span data-hover="Women">Women</span>
            </NavContent>
          </NavLink>
          <NavLink href="/kids">
            <NavContent>
              <span data-hover="Kids">Kids</span>
            </NavContent>
            </NavLink>
          <NavLink href="/collections">
            <NavContent>
              <span data-hover="Collections">Collections</span>
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


const NavLink = styled.a`
  --timing-in: 250ms;
  --timing-out: calc(2 * var(--timing-in));
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const NavContent = styled.div`
  perspective: 1000px;
  text-align: center;

    & > span {
    position: relative;
    line-height: 32px;
     display: block;
     padding-inline: 16px;
    color: var(--color-white);
    background: #2195de;
    transition: transform 500ms ease-out;
    /* so the boxes rotate in the correct location */
    transform-origin: center top;
    transform-style: preserve-3d;
  }

  & > span::before {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0965a0;
    content: attr(data-hover);
    transition: background 300ms;
    font-weight: ${WEIGHTS.bold};
    transform: rotateX(-90deg);
    /* so the boxes rotate in the correct location */
    transform-origin: center top;
  }



  &:hover span {
    transform: rotateX(90deg) translateY(-22px);
    transition: 300ms;
  }

  &:hover span::before {
    background: #28a2ee;
  }


  `;

export default Header;
