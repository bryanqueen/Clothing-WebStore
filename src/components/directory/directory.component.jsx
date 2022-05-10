import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

/* A function that takes in the state and returns an object. */
const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

/* A function that takes in the state and returns an object. */
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

/* Connecting the `mapStateToProps` function to the `Directory` component. */
export default connect(mapStateToProps)(Directory);
