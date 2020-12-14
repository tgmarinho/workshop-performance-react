import React from "react";
import { SortableElement } from "react-sortable-hoc";

const areEqual = (prevProps, nextProps) => {
  return prevProps.contributor.id === nextProps.contributor.id;
};

export const Contributor = SortableElement(
  React.memo(({ contributor, imgStyle }) => {
    return (
      <div className="post">
        {contributor.id === 2 && <div>Album 2</div>}
        <img
          src={contributor.avatar_url}
          alt={contributor.login}
          style={imgStyle}
        />
        <a
          href={contributor.html_url}
          target="_blank"
          alt={contributor.login}
          onClick
        >
          <h3>{contributor.login}</h3>
        </a>
        <p>Contribuições: {contributor.contributions}</p>
      </div>
    );
  }, areEqual)
);
