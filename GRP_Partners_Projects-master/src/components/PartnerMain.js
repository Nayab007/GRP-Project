import React from "react";
import Partners from "./Partners";
import Partnerlogin from "./Partnerlogin";

const PartnerMain = () => (
  <div>
    <Partnerlogin />
    <div className="container mt-4 mb-4">
      <h2>GRP Partners</h2>
      <p>
        Partners are organisations active in resilience who share GRP’s vision
        and objective and who have joined the Partnership.
      </p>
    </div>
    <Partners />
  </div>
);

export default PartnerMain;
