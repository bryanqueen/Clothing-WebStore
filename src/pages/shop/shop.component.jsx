import React from 'react';

import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';

import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview';

import CollectionPreview from '../../components/collection/collection.component';

/* A function that takes in two parameters, collections and category. It returns a div with a className
of shop-page. It then checks if the category is equal to all. If it is, it returns the
CollectionOverview component. If it is not, it returns the CollectionPreview component. */
const ShopPage = ({ collections, category }) => {
  return (
    <div className="shop-page">
      {category.toLowerCase() === 'all' ? (
        <CollectionOverview />
      ) : (
        <CollectionPreview
          title={category}
          items={collections.filter(
            (its) => its.category.toLowerCase() === category.toLowerCase()
          )}
        />
      )}  
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
