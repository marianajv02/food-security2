import React from "react";
import StaticFilterOptions from "./StaticFilterOptions";

const staticPartners = [
    "AfDB",
    "Austria - OEZA",
    "Belgium - Enable",
    "BID",
    "Canada - Global Affairs",
    "Danemark – DANIDA",
    "DfiD",
    "Espagne – AECID",
    "EU",
    "Fonds africain de développement",
    "France",
    "Germany - BMZ",
    "HCR",
    "Italy",
    "Luxembourg",
    "Netherlands (The) - MINBUZA",
    "OEZA",
    "SNV",
    "Switzerland - SDC",
    "The World Bank",
    "UNICEF"
  // ... other partner options
];

const SearchBoxPartner = ({ selectedPartners, setSelectedPartners }) => {
  return (
    <StaticFilterOptions
      title="Partners"
      options={staticPartners}
      selectedOptions={selectedPartners}
      setSelectedOptions={setSelectedPartners}
    />
  );
};

export default SearchBoxPartner;
