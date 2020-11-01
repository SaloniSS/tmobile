import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

import cve from "./cve.json";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const VulnerabilitiesPage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Vulnerabilities"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>CVE Vulnerabilities</h1>
              <h4>
                CVE® is a list of entries—each containing an identification
                number, a description, and at least one public reference—for
                publicly known cybersecurity vulnerabilities. CVE Entries are
                used in numerous cybersecurity products and services from around
                the world, including the U.S. National Vulnerability Database
                (NVD). This page provides you with some of the newest ones and
                some information about them.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container} style={{ padding: "20px" }}>
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
                          <strong>{vun.cve.CVE_data_meta.ID}</strong>
                          <br />
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
                                <div>
                                  <a href={res.link} target="_blank">
                                    {res.name}
                                  </a>
                                  <br />
                                  <br />
                                </div>
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
                          Exploitability Score:
                          {vun.impact.baseMetricV3
                            ? vun.impact.baseMetricV3.exploitabilityScore
                            : "hi"}
                          <br />
                          Published: {vun.publishedDate}
                        </p>
                      ),
                    },
                  ]}
                />
              </GridItem>
            ))}
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VulnerabilitiesPage;
