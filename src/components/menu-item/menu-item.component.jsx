import React from 'react';

// import { Link } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles';

// import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <MenuItemContainer className={`${size} menu-item`} to={'/shop/' + title}>
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
