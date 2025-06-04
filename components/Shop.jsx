// ✅ Shop.jsx
import React from "react";
import ProductsSection from "./ProductsSection.jsx";

export default function Shop(props) {
  return (
    <>
      <ProductsSection searchQuery={props.searchQuery} />
    </>
  );
}
