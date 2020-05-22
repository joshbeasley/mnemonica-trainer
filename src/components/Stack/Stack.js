import React from "react";
import mappings from "./../mappings";

export default function Stack() {
  return Object.keys(mappings).map((key) => (
    <h1>
      {key} - {mappings[key].symbol}
    </h1>
  ));
}
