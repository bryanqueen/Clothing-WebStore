import React from 'react';

import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';

import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview';

import CollectionPreview from '../../components/collection/collection.component';

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
