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

const ContentDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContentTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ContentNotes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContentViewDetails = styled.div`
  margin-top: 6px;
  font-size: 12px;

  @media only screen and (min-width: 768px) {
    font-weight: 100;
  }
`;

const RedStrikeContainer = styled.div`
  display: flex;
  margin-right: 4px;
`;

const RedStrike = styled.div`
  background-color: rgba(229,9,20,1);
  transform: translateX(0) translateY(0) rotate(0) skewX(-6deg) skewY(0) scaleX(1) scaleY(1);
  width: 5px;
  height: 14px;
  margin-right: 1px;
`;

const ContentRankDetails = styled.div`
  margin-top: 6px;
  font-size: 12px;
  display: flex;
`;

const numberFormatter = new Intl.NumberFormat('en-US');

const NetflixCard = ({ show, ...otherProps }) => {
  if (!show) {
    return null;
  }

  const formattedWatchedHours = numberFormatter.format(show.hours);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link href={`https://www.netflix.com/title/${show.showId}`} target="_blank" rel="noreferrer noopener" {...otherProps}>
      <Container>
        <HeroContainer>
          <HeroImg loading="lazy" src={show.boxartUrls?.horizontalSmallWebP} alt="" />
          <HeroOverlay />
        </HeroContainer>
        <ContentContainer>
          <ContentDetails>
            <ContentTitle>
              {show.name}
            </ContentTitle>
          </ContentDetails>
          <ContentNotes>
            <ContentViewDetails>
              Viewed
              {' '}
              {formattedWatchedHours}
              {' '}
              hours
            </ContentViewDetails>
            <ContentRankDetails>
              <RedStrikeContainer>
                {
                  new Array(show.weeksInTopTen).fill('').map((_, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <RedStrike key={index} />
                  ))
                }
              </RedStrikeContainer>
              Weeks in top 10
            </ContentRankDetails>
          </ContentNotes>
        </ContentContainer>
      </Container>
    </Link>
  );
};

export default NetflixCard;
