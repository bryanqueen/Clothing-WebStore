import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection.styles.scss';

/* A function that takes in a title and items and returns a div with a title and a preview. */
const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        //  .filter((item, idx) => idx < 10)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
