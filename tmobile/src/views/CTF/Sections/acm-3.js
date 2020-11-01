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

export default function ACM() {
  
  const [code, setCode] = useState(false);
  const [secret, setSecret] = useState(false);
  const [hint, setHint] = useState(false);
  const [hint2, setHint2] = useState(false);

  const classes = useStyles();


  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>CTF 1</h2>
          <h5 className={classes.description}>
            Find the Secret Code! This challenge requires having a firm understanding of basic browser mechanics. 
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        {/* <GridItem xs={12} sm={12} md={4}>
          <h4 className={classes.title}>Secret Activator</h4>
          <Button onClick={() => setSecret(true)} color="primary">View Code</Button>
        </GridItem> */}
        <GridItem xs={12} sm={12} md={6}>
          <h4 className={classes.title}>Secret Code</h4>
          {/* {secret ? <iframe src="http://acm-dev-challenge.surge.sh/chal3.html" title="Challenge"></iframe> : <h5 className={classes.description}>
            flag is hidden
          </h5>} */}
          <iframe src="http://acm-dev-challenge.surge.sh/chal3.html" title="Challenge"></iframe>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <h4 className={classes.title}>Hint</h4>
          {hint ? <h5 className={classes.description}>
            Clicking a button triggers a javascript function to execute as defined by the onClick attribute for that button. Sometimes this javascript can have unexpected effects or be written to carry out other instructions on the side (like redirecting the page in this example). What can you do to avoid this?
          </h5> : <Button onClick={() => setHint(true)} color="primary">View Hint 1</Button>}
          <br />
          {hint2 ? <h5 className={classes.description}>
            Try disabling javascript from executing on the page. This will ensure that you are able to access the secret since the redirection will no longer happen.
          </h5> : <Button onClick={() => setHint2(true)} color="primary">View Hint 2</Button>}
        </GridItem>
      </GridContainer>
    </div>
  );
}
