import { Link } from 'react-router-dom';
import { CardContainer } from '@common/components/card/card.styles';
import { Typography } from '@common/components/typography/typography.component';
import { styledWithProps } from '@common/utils/styled-components/styled-components.util';
import styled from 'styled-components';

export const SectionContainer = styled.section`
  &:not(:last-child) {
    margin: 4rem 0;
  }
`;

export const Title = styledWithProps(Typography, {
  as: 'h2',
  size: 'h2',
  weight: 'semiBold',
})`
  @media (max-width: 35.5em) {
    text-align: center;
  }
`;

export const SubTitle = styledWithProps(Typography, {
  as: 'h3',
  size: 'h3',
  weight: 'medium',
})`
  @media (max-width: 35.5em) {
    text-align: center;
  }
`;

export const GridContainer = styled.div`
  display: flex;

  flex-wrap: wrap;

  justify-content: space-between;

  gap: ${({ theme: { spacing } }) => spacing[5]};

  flex: 0 0 23rem;

  @media (max-width: 51.5em) {
    justify-content: center;
  }

  @media (max-width: 37em) {
    align-items: center;

    ${CardContainer} {
      flex-basis: 30rem;
    }
  }
`;

export const LinkWrapper = styled(Link)`
  &:link,
  &:visited {
    text-decoration: none;
    color: #555;
    cursor: pointer;

    transition: all 0.3s;
  }
`;
