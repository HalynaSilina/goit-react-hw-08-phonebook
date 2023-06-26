import styled from '@emotion/styled';

export const Container = styled.main`
  background-color: #c9f7ff;
  background-image: url(./images/start-mobile.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #321c01;
  @media screen and (min-width: 425px) {
    background-image: url(./images/start-tablet.jpg);
  }
  @media screen and (min-width: 1024px) {
    background-image: url(./images/start.jpg);
    background-position: right bottom;
  }
  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(./images/start2x.jpg);
  }
`;
