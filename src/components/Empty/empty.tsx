import "./empty.css";

import React from "react";

export interface Props {
  title: string;
  description?: string;
}

const Empty = ({ title, description }: Props) => (
  <div className="empty">
    <h3 className="empty-header">{title}</h3>
    {description && <p className="empty-description">{description}</p>}
  </div>
);

export default Empty;
