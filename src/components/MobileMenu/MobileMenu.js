/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss} >
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <SubLink href="/terms">Terms and Conditions</SubLink>
          <SubLink href="/privacy">Privacy Policy</SubLink>
          <SubLink href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};


const Overlay = styled(DialogOverlay)`
  --timing-in-fast: 300ms;
  --timing-in-slow: 550ms;
  --timing-delay: 150ms;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
  animation: fadeIn var(--timing-in-fast);
`;


const Content = styled(DialogContent)`
  --text-animation: fadeIn var(--timing-in-slow) calc(3 * var(--timing-delay)) ease-out backwards;
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  animation: slideIn var(--timing-in-fast) var(--timing-delay) cubic-bezier(.27,.16,.54,1.4) backwards;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  // animation: var(--text-animation);
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;
  &:first-of-type {
    color: var(--color-secondary);
  }
  animation: fadeIn 900ms calc( 3 * var(--timing-delay)) backwards;

  &:nth-child(2) {
    animation-delay: calc(3.5 * var(--timing-delay));
  }
  &:nth-child(3) {
    animation-delay: calc(4 * var(--timing-delay));
  }
  &:nth-child(4) {
    animation-delay: calc(4.5 * var(--timing-delay));
  }
  &:nth-child(5) {
    animation-delay: calc(5 * var(--timing-delay));
  }
  &:nth-child(6) {
    animation-delay: calc(5.5 * var(--timing-delay));
  }
`;

const Filler = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
  animation: fadeIn var(--timing-in-slow) calc(7 * var(--timing-delay)) ease-out backwards;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
