import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';

import { CATEGORIES } from '../../redux/shop/shop.utils';

import CollectionPreview from '../collection/collection.component';

import './collection-overview.styles.scss';

/* A function that takes in a prop called collections and returns a div with a class name of
collections-overview. It then maps over the categories array and returns a CollectionPreview
component. */
const CollectionsOverView = ({ collections }) => {
  return (
    <div className="collections-overview">
      {CATEGORIES.map((cat,index) => (
        <CollectionPreview 
          key={index}
          title={cat}
          items={collections.filter((x) => x.category === cat)}
        />
      ))}
    </div>
  );
};

/* A function that takes in a state and returns an object. */
const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

/* Connecting the component to the redux store. */
export default connect(mapStateToProps)(CollectionsOverView);
