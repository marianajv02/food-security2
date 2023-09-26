import React from "react";
import StaticFilterOptions from "./StaticFilterOptions";
import partnerImage from "../assets/partner.svg";

const staticPartner = [
    "AfDB",
    "Austria - OEZA",
    "Belgium - Enable",
    "BID",
    "Canada - Global Affairs",
    "Danemark – DANIDA",
    "FCDO",
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
    "UNICEF",
    "USAID-USA"
    // ... other partner options

];

const SearchBoxPartner = ({ selectedPartner, setSelectedPartner }) => {
  return (
    <StaticFilterOptions
      title={<img src={partnerImage} alt="partner" />}
      options={staticPartner}
      selectedOptions={selectedPartner}
      setSelectedOptions={setSelectedPartner}
    />
  );
};

export default SearchBoxPartner;
