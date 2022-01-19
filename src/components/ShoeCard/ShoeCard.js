import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
      <Link className="container" href={`/shoe/${slug}`}>
        <Wrapper className='card'>
          <ImageWrapper className='sneaker'>
            <Image alt="" src={imageSrc} />
          </ImageWrapper>
          {variant === 'on-sale' && <SaleFlag className='info'>Sale</SaleFlag>}
          {variant === 'new-release' && (
            <NewFlag className='info'>Just released!</NewFlag>
          )}
          <Spacer size={12} />
          <Row className='description'>
            <Name>{name}</Name>
            <Price
              style={{
                '--color':
                  variant === 'on-sale'
                    ? 'var(--color-gray-700)'
                    : undefined,
                '--text-decoration':
                  variant === 'on-sale' ? 'line-through' : undefined,
              }}
            >
              {formatPrice(price)}
            </Price>
          </Row>
          <Row>
            <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
            {variant === 'on-sale' ? (
              <SalePrice>{formatPrice(salePrice)}</SalePrice>
            ) : undefined}
          </Row>
        </Wrapper>
      </Link>
  );
};


const Link = styled.a`
  --trans-timing-in: 250ms;
  --trans-timing-out: calc(3 * var(--trans-timing-in));
  text-decoration: none;
  color: inherit;
  perspective: 800px;
  transform-style: preserve-3d;
  display: inline-block;
  padding: 16px;
  isolation: isolate;
`;

const Wrapper = styled.article`
  position: relative;
   transform-style: inherit;
`;

const ImageWrapper = styled.div`
  border-radius: 16px 16px 4px 4px;
  transform-style: preserve-3d;
  /* To keep image contained during scale */
  // overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  display: block;

  @media (prefers-reduced-motion: no-preference) {
   will-change: transform, filter;
   transition: transform filter;
   transition-duration:  var(--trans-timing-out);
   clip-path: none;

   ${Link}:hover &,
   ${Link}:focus & {
    transform: translateZ(150px) rotateZ(15deg);
    filter: brightness(110%);
    clip-path: polygon(5% 30%, 92% 30%, 92% 90%, 5% 90%);
    transition-duration: var(--trans-timing-in);
   }
  }
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  transform-style: inherit;
  @media (prefers-reduced-motion: no-preference) {
    ${Link}:hover &,
    ${Link}:focus & {
     justify-content: center;
    }
  }
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: var(--color-gray-900);
  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    transform: translateZ(0px);
    transition: transform var(--trans-timing-out);
    ${Link}:hover &,
    ${Link}:focus & {
      transform: translateZ(160px);
      transition-duration: var(--trans-timing-in);
    }
  }
`;

const Price = styled.span`
  color: var(--color);
  text-decoration: var(--text-decoration);
   @media (prefers-reduced-motion: no-preference) {
     opacity: 1;
     transition: opacity var(--trans-timing-out);
    ${Link}:hover &,
    ${Link}:focus & {
      opacity: 0;
     transition-duration: var(--trans-timing-in);
   }
`;

const ColorInfo = styled.p`
  color: var(--color-gray-700);
   @media (prefers-reduced-motion: no-preference) {
     opacity: 1;
     transition: opacity var(--trans-timing-out);
    ${Link}:hover &,
    ${Link}:focus & {
      opacity: 0;
      transition-duration: var(--trans-timing-in);
   }
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: var(--color-primary);
   @media (prefers-reduced-motion: no-preference) {
     opacity: 1;
     transition: opacity var(--trans-timing-out);
    ${Link}:hover &,
    ${Link}:focus & {
      opacity: 0;
      transition-duration: var(--trans-timing-in);
   }
`;

const Flag = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  background: red;
  height: 32px;
  line-height: 32px;
  padding: 0 10px;
  font-size: ${14 / 18}rem;
  font-weight: ${WEIGHTS.bold};
  color: var(--color-white);
  border-radius: 2px;
  transition: transform var(--trans-timing-out);

  ${Link}:hover &,
  ${Link}:focus & {
    transform: translateZ(151px) translateX(-25px);
    transition-duration: var(--trans-timing-in);
  }
`;

const SaleFlag = styled(Flag)`
  background-color: var(--color-primary);
`;
const NewFlag = styled(Flag)`
  background-color: var(--color-secondary);
`;



export default ShoeCard;
