import React, { useState, useEffect } from "react";
import "./styles.css";

export default function Items() {
  const spaceId = "nwfql4or7e4t";
  const environmentId = "master";
  const accessToken = "0pDLA2U5KT8-1qQ6UhSmHrMj0485QJm_nIf-u8N7FRM";

  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&order=-fields.order&content_type=menuItem`;

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const items = data.items.map((item) => {
          const imageId = item.fields.image.sys.id;
          const asset = data.includes.Asset.find(
            (asset) => asset.sys.id === imageId
          );
          const imageUrl = asset.fields.file.url;
          return {
            ...item.fields,
            imageUrl
          };
        });
        setItems(items);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, [url]);

  return (
    <div className="grid">
      {items.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.imageUrl} alt={item.title} />
          <div className="title">
            <h2>{item.title}</h2>
            <p>{item.price}</p>
          </div>
          <p className="ingredients">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
