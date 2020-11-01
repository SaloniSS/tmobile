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

const useStyles = makeStyles(styles);
const dashboardRoutes = [];

const RuggedPage = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Rugged"
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
              <h1 className={classes.title}>About Rugged</h1>
              <h4>
                Creating software that is available, survivable, defensible,
                secure, and resilient
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container} style={{ padding: "20px" }}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "What is Rugged?",
                    tabContent: (
                      <p>
                        Rugged is about a mindset of creating available,
                        survivable, defensible, secure, and resilient software.
                        Through competition, cooperation, and experimenting,
                        Rugged organizations learn and improve from their
                        mistakes. They take initiative to find threats and
                        create defenses before they are an issue. Rugged
                        applications are protected against attackss, as well as
                        analyze themselves, report on their security status,
                        detect attacks, and respond to them.
                        <a href="https://ruggedsoftware.org/">
                          https://ruggedsoftware.org/
                        </a>{" "}
                      </p>
                    ),
                  },
                  {
                    tabName: "Why Rugged?",
                    tabContent: (
                      <p>
                        Most approaches to security are about finding
                        Vulnerabilitiesand then fixing them. However, Rugged
                        believes that defending against threats is the answer,
                        not fixing holes. Others cover their issues and move on,
                        not learning from their mistakes, running into the same
                        issues again and again, while Rugged learns and evolves.
                      </p>
                    ),
                  },
                  {
                    tabName: "Starting with Rugged",
                    tabContent: (
                      <p>
                        You can start by getting your security story.
                        Communicate with others in your organization and find
                        what is most important them. What outcomes need to be
                        avoided? What possible threats are there? Prioritize
                        posssible threats by their severity.
                      </p>
                    ),
                  },
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "CTF",
                    tabContent: (
                      <p>
                        Get some mock experience in solving challenges to help
                        you become a better cyber-security professional here! We
                        take you through 2 CTFs to learn necessary skills to
                        learn how to make your code more safe.
                      </p>
                    ),
                  },
                  {
                    tabName: "Pen Testing",
                    tabContent: (
                      <p>
                        Most approaches to security are about finding
                        Vulnerabilitiesand then fixing them. However, Rugged
                        believes that defending against threats is the answer,
                        not fixing holes. Others cover their issues and move on,
                        not learning from their mistakes, running into the same
                        issues again and again, while Rugged learns and evolves.
                      </p>
                    ),
                  },
                  {
                    tabName: "Vulnerabilities",
                    tabContent: (
                      <p>
                        Here is a list of all the Common Vulnerabilities and
                        Exposures. It pulls from the CVE database RSS feed to
                        get the latest ones. You can search for keywords and
                        based on severity.
                      </p>
                    ),
                  },
                ]}
              />
            </GridItem>
            )
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RuggedPage;
