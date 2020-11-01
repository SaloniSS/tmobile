import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function CTF2() {
  const classes = useStyles();
  const [apiCall, setApiCall] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const [result, setResult] = useState("");
  const [hint, setHint] = useState(false);
  const [hint2, setHint2] = useState(false);

  const callApi = async () => {
    setApiCall(true);
    fetch(
      "https://us-central1-htf-development.cloudfunctions.net/api/first-last"
    )
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
        setIsResult(true);
      });
      console.log("hello");
  }

  // useEffect(() => {
  //   fetch(
  //     "https://us-central1-htf-development.cloudfunctions.net/api/first-last"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setResult(data);
  //       setIsResult(true);
  //     });
  //     console.log("hello");
  // });

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>CTF 2</h2>
          <h5 className={classes.description}>
            Imagine a leaderboard system existing for a hackathon where a website needs to make API calls to fetch the number of points that a user might have gained by participating in hackathon events. However, as a cyber-security expert you believe that the developer may be reading back more information about the participants than just their points. Figure out how!
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <h4 className={classes.title}>API Trigger</h4>
          <Button onClick={() => callApi()} color="primary">
            Make API Call
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <h4 className={classes.title}>API Call Response</h4>
          {apiCall ? (
            isResult ? (
              <h5 className={classes.description}>Points: {JSON.stringify(result.result.points)}</h5>
            ) : (
              <h5 className={classes.description}>loading</h5>
            )
          ) : (
            <h5 className={classes.description}>Waiting ...</h5>
          )}
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <h4 className={classes.title}>Hint</h4>
          {hint ? <h5 className={classes.description}>
            Making an API call involves using the network to send https requests to read back information. How can you view all the network requests that an application is making?
          </h5> : <Button onClick={() => setHint(true)} color="primary">View Hint 1</Button>}
          <br />
          {hint2 ? <h5 className={classes.description}>
            Try clicking inspect element and finding the tab called Network. Toggle the XHR requests pane to view the list of all the api calls that are being made.
          </h5> : <Button onClick={() => setHint2(true)} color="primary">View Hint 2</Button>}
        </GridItem>
      </GridContainer>
    </div>
  );
}
