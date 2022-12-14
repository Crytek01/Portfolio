import { FunctionComponent } from 'react';
import { ICustomLinkOptions } from '@common/components/custom-link/custom-link.component';

import {
  MenuItem,
  PopLink,
  PopLinkName,
  PopMenuContainer,
} from './pop-menu.styles';

export interface IMenuOptions {
  name: string;
  route: string;
  isExternal?: boolean;
  target?: ICustomLinkOptions['target'];
}

interface IPopMenu {
  isMenuOpen: boolean;
  onItemClick: () => void;
  menuColor?: string;
  menuFontColor?: string;
  options: readonly IMenuOptions[];
}

export const PopMenu: FunctionComponent<IPopMenu> = ({
  isMenuOpen,
  onItemClick,
  menuColor,
  options,
}) => (
  <PopMenuContainer
    backgroundColor={menuColor}
    onClick={(e) => e.stopPropagation()}
    isVisible={isMenuOpen}
  >
    {options.map(({ route, name, isExternal, target = '_self' }) => (
      <MenuItem key={route}>
        <PopLink
          to={route}
          onClick={onItemClick}
          isExternal={isExternal}
          options={{ target }}
        >
          <PopLinkName>{name}</PopLinkName>
        </PopLink>
      </MenuItem> 
    ))}
  </PopMenuContainer>
);
