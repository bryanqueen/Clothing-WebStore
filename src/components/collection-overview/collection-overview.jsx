import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';
import { CATEGORIES } from '../../redux/shop/shop.utils';

import CollectionPreview from '../collection/collection.component';


import './collection-overview.styles.scss';

const CollectionsOverView = ({ collections }) => {
  return (
    <div className="collections-overview">
      {CATEGORIES.map(cat => (

      <CollectionPreview
        title={cat}
        items={collections.filter((x) => x.category === cat)}
      />
      ))}

      
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverView);
