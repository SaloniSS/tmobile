import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

const VulnerabilitiesPage = () => {
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <h3>
          <small>Tabs with Icons on Card</small>
        </h3>
        <CustomTabs
          headerColor="primary"
          tabs={[
            {
              tabName: "Profile",
              tabContent: (
                <p>
                  I think that’s a responsibility that I have, to push
                  possibilities, to show people, this is the level that things
                  could be at. So when you get something that has the name Kanye
                  West on it, it’s supposed to be pushing the furthest
                  possibilities. I will be the leader of a company that ends up
                  being worth billions of dollars, because I got the answers. I
                  understand culture. I am the nucleus.
                </p>
              ),
            },
            {
              tabName: "Messages",
              tabContent: (
                <p>
                  I think that’s a responsibility that I have, to push
                  possibilities, to show people, this is the level that things
                  could be at. I will be the leader of a company that ends up
                  being worth billions of dollars, because I got the answers. I
                  understand culture. I am the nucleus. I think that’s a
                  responsibility that I have, to push possibilities, to show
                  people, this is the level that things could be at.
                </p>
              ),
            },
            {
              tabName: "Settings",
              tabContent: (
                <p>
                  think that’s a responsibility that I have, to push
                  possibilities, to show people, this is the level that things
                  could be at. So when you get something that has the name Kanye
                  West on it, it’s supposed to be pushing the furthest
                  possibilities. I will be the leader of a company that ends up
                  being worth billions of dollars, because I got the answers. I
                  understand culture. I am the nucleus.
                </p>
              ),
            },
          ]}
        />
      </GridItem>
    </GridContainer>
  );
};

export default VulnerabilitiesPage;
