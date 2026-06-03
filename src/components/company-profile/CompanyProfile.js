import React from "react";
import CompanyInfo from "./CompanyInfo";
import CompanyOverview from "./companyOverview";
import CompanyCulture from "./CompanyCulture";
import CompanyLocation from "./CompanyLocation";

const CompanyProfileDetails = () => {
  return (
    <div>
      <CompanyInfo />
      <CompanyOverview />
      <CompanyCulture />
      <CompanyLocation />
    </div>
  );
};

export default CompanyProfileDetails;
