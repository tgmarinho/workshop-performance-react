import React, { useCallback } from "react";
import { Contributor } from "./Contributor";
import { SortableContainer } from "react-sortable-hoc";
import { FixedSizeList as List } from "react-window";

export const Feed = SortableContainer(({ contributors }) => {
  const renderRow = useCallback(
    ({ index, style }) => {
      const contributor = contributors[index];
      return (
        <li key={contributor.id} style={style}>
          <Contributor
            index={index}
            contributor={contributor}
            imgStyle={{ maxHeight: 200 }}
          />
        </li>
      );
    },
    [contributors]
  );
  return (
    <ul>
      <List
        itemCount={contributors.length}
        itemSize={300}
        width={window.innerWidth}
        height={window.innerHeight}
        overscanCount={3}
      >
        {renderRow}
      </List>
    </ul>
  );
});
