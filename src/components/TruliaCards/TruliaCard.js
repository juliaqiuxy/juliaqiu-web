import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  display: block;
`;

const Container = styled.div`
  flex-shrink: none;
  width: 288px;
  border: 1px solid var(--juliadev-accents-1);
  border-radius: var(--juliadev-accents-radius-2);
`;

const HeroContainer = styled.div`
  width: 100%;
  height: 158px;
  padding: 4px;
  padding-bottom: 0;
  position: relative;
  box-sizing: border-box;
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--juliadev-accents-radius-1);
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`;

const HeroOverlay = styled.div`
  position: absolute;
  left: 4px;
  top: 4px;
  width: cacl(100% - 4px);
  height: cacl(100% - 4px);
  border-radius: var(--juliadev-accents-radius-1);
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(255,255,255,0) 100%);
  transparent: 0.2;
  border: 0;
`;

const ContentContainer = styled.div`
  color: var(--juliadev-fg);
  margin: .5pc;
  text-decoration: none;
`;

const ContentPropertyDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContentPropertyPrice = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const ContentPropertyFeatures = styled.span`
  font-size: 12px;
  display: flex;
`;

const ContentPropertyAddress = styled.div`
  margin-top: 6px;
  font-size: 12px;

  @media only screen and (min-width: 768px) {
    font-weight: 100;
  }
`;

const ContentPropertyFeature = styled.div`
  margin-left: 6px;

  &:first-of-type {
    margin-left: 0;
  }
`;

const TruliaCard = ({ home, ...otherProps }) => {
  if (!home) {
    return null;
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link href={`https://www.trulia.com${home.url}`} target="_blank" rel="noreferrer noopener" {...otherProps}>
      <Container>
        <HeroContainer>
          <HeroImg loading="lazy" src={home.media?.heroImage?.webpUrl.medium} alt="" />
          <HeroOverlay />
        </HeroContainer>
        <ContentContainer>
          <ContentPropertyDetails>
            <ContentPropertyPrice>
              {home.price?.formattedPrice}
            </ContentPropertyPrice>
            <ContentPropertyFeatures>
              <ContentPropertyFeature>
                {home.bedrooms?.formattedValue ?? '-bd'}
              </ContentPropertyFeature>
              <ContentPropertyFeature>
                {home.bathrooms?.formattedValue ?? '-ba'}
              </ContentPropertyFeature>
              <ContentPropertyFeature>
                {home.floorSpace?.formattedDimension ?? '-sqft'}
              </ContentPropertyFeature>
            </ContentPropertyFeatures>
          </ContentPropertyDetails>
          <ContentPropertyAddress>
            {home.location?.formattedLocation}
          </ContentPropertyAddress>
        </ContentContainer>
      </Container>
    </Link>
  );
};

export default TruliaCard;
