import React from 'react';
import { useNavigate } from 'react-router-dom';

// import { Link } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles';

// import './menu-item.styles.scss';

/**
 * It's a function that returns a div with a background image and a title.
 * @returns A MenuItem component that is a styled div with a background image and a title and subtitle.
 */
const MenuItem = ({ title, imageUrl, size }) => {
  const navigate = useNavigate();
  return (
    <MenuItemContainer
      className={`${size} menu-item`}
      onClick={()=>navigate('/shop/' + title)}
    >
      <BackgroundImageContainer
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <ContentContainer className="content">
        <ContentTitle className="title">{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle className="subtitle">SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
