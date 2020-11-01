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
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const axios = require("axios").default;

const useStyles = makeStyles(styles);

export default function ACM() {
  const [result, setResult] = useState(false);
  const [website, setWebsite] = useState("");
  const [flags, setFlags] = useState(0);

  const classes = useStyles();

  async function getResults() {
    console.log("Testing website", website);
    const tempWebsite = "http://acmutd.co/";
    console.log(tempWebsite.substring(tempWebsite.indexOf("//") + 2));
    const changedWebsite = tempWebsite.substring(
      tempWebsite.indexOf("//") + 2,
      tempWebsite.length - 1
    );
    console.log(changedWebsite);
    //const result = await axios(`http://localhost:5000/${changedWebsite}`);
    const result = await axios(
      `https://tmobile20.ue.r.appspot.com/${changedWebsite}`
    );
    console.log(result);
    setFlags(result.data);
    setResult(true);
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            id="regular"
            inputProps={{
              placeholder: "Website Link",
            }}
            formControlProps={{
              fullWidth: true,
            }}
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />
          <Button onClick={() => getResults()} color="primary">
            Test
          </Button>
          {result && (
            <>
              <h4 className={classes.title}>Result</h4>
              <h5 className={classes.description}>
                Your website raised {flags} flags
              </h5>{" "}
            </>
          )}
        </GridItem>
      </GridContainer>
    </div>
  );
}
