import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss"

const max_preview_item = 4;
const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter((item, idx)=>idx < max_preview_item)
                .map(({id, ...otherProps}) => (
                    <CollectionItem key={id} {...otherProps}  />
                ))
            }

        </div>
    </div>
)

export default CollectionPreview;