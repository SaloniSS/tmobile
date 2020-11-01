import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import cve from "./cve.json";

const VulnerabilitiesPage = () => {
  return (
    <GridContainer>
      {cve.CVE_Items.map((vun) => (
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            headerColor="primary"
            tabs={[
              {
                tabName: "Basic Details",
                tabContent: (
                  <p>
                    {vun.cve.CVE_data_meta.ID}
                    {vun.cve.description.description_data[0].value}
                  </p>
                ),
              },
              {
                tabName: "Resources",
                tabContent: (
                  <p>
                    {
                      <ul>
                        {vun.cve.references.reference_data.map((res) => (
                          <a href={res.link}>{res.name}</a>
                        ))}
                      </ul>
                    }
                  </p>
                ),
              },
              {
                tabName: "Misc.",
                tabContent: (
                  <p>
                    Exploitability Score :
                    {vun.impact.baseMetricV3
                      ? vun.impact.baseMetricV3.exploitabilityScore
                      : "hi"}
                    Published: {vun.publishedDate}
                  </p>
                ),
              },
            ]}
          />
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default VulnerabilitiesPage;
