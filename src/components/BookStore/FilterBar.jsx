import React, { useState } from "react";

const FilterBar = ({ sortCriteria, handleSort }) => {

  return (
    <>
      <div class="flex items-stretch space-x-3">
        {/* <!-- Sort --> */}
        <select
          class="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-600"
          name="sortBy"
          id="sortBy"
          value={sortCriteria}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="A-Z">Name (A-Z)</option>
          <option value="Z-A">Name (Z-A)</option>
          <option value="Oldest">Publication Year (Oldest)</option>
          <option value="Newest">Publication Year (Newest)</option>
        </select>
      </div>
    </>
  );
};

export default FilterBar;
