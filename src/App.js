import React, { useState, useEffect, useCallback } from "react";
import arrayMove from "array-move";
import { Feed } from "./Feed";

function App() {
  const [contributors, setContributors] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.github.com/repos/rocketseat/unform/contributors?per_page=1000&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setContributors(data);
      });
  }, []);
  const handleSortEnd = useCallback(
    ({ oldIndex, newIndex }) => {
      setContributors(arrayMove(contributors, oldIndex, newIndex));
    },
    [contributors]
  );
  return (
    <Feed lockAxis="y" contributors={contributors} onSortEnd={handleSortEnd} />
  );
}

export default App;
