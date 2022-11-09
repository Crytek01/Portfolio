import { FunctionComponent, useState } from 'react';

import { useMediaQuery } from '../../hooks/media-query/use-media-query.hook';
import { SnackButton } from '../snack-button/snack-button.component';

import {
  CvIcon,
  ExternalLink,
  GithubIcon,
  Item,
  LinkedinIcon,
  List,
  NavContainer,
  PorfolioName,
  RouterLink,
  WorksIcon,
} from './nav-bar.styled';

export const NavBar: FunctionComponent = () => {
  const isMobile = useMediaQuery('screen and (max-width:44em)');

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <NavContainer>
      <RouterLink to="/">
        <PorfolioName>Erick Badilla Portfolio</PorfolioName>
      </RouterLink>

      {!isMobile && (
        <List>
          <Item>
            <RouterLink to="/works">
              <WorksIcon />
              <span>Works</span>
            </RouterLink>
          </Item>

          <Item>
            <RouterLink to="/cv">
              <CvIcon />
              <span>CV</span>
            </RouterLink>
          </Item>

          <Item>
            <ExternalLink
              target="_blank"
              href="https://github.com/Crytek01?tab=repositories&q=&type=public&language=&sort="
            >
              <GithubIcon />
              <span>Github</span>
            </ExternalLink>
          </Item>

          <Item>
            <ExternalLink
              target="_blank"
              href="https://www.linkedin.com/in/erick-badilla-70b787210/"
            >
              <LinkedinIcon />
              <span>Linkedin</span>
            </ExternalLink>
          </Item>
        </List>
      )}

      {isMobile && (
        <SnackButton
          isMenuOpen={isMenuOpen}
          onSnackClick={() => {
            setIsMenuOpen((isOpen) => !isOpen);
          }}
          onMenuItemClick={() => {
            setIsMenuOpen(false);
          }}
          onClickOutside={() => {
            setIsMenuOpen(false);
          }}
          menuOptions={[
            { name: 'Home', route: '/' },
            { name: 'Works', route: '/works' },
            {
              name: 'CV',
              route: '/cv',
            },
            {
              isExternal: true,
              name: 'Github',
              route:
                'https://github.com/Crytek01?tab=repositories&q=&type=public&language=&sort=',
            },
            {
              isExternal: true,
              name: 'Linkedin',
              route: 'https://www.linkedin.com/in/erick-badilla-70b787210/',
            },
          ]}
        />
      )}
    </NavContainer>
  );
};
