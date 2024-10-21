import React from "react";
import AgeGraph from "./AgeGraph";
import GenderGraph from "./GenderGraph";
import GenderAgeGraph from "./GenderAgeGraph";

function GraphIndex({ item }) {
  return (
   <>
    <div className="ds_flex stat_first_cards">
      <AgeGraph data={item?.ages || []} />
      <GenderGraph data={item?.genders || []} />
    </div>
    <GenderAgeGraph data={item?.membersGendersAges?.data || []} />
    </>
  );
}

export default GraphIndex;
