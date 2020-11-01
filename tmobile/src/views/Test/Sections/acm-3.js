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

const useStyles = makeStyles(styles);

export default function ACM() {
  const [result, setResult] = useState(false);
  const [website, setWebsite] = useState("");
  const [flags, setFlags] = useState(0);

  const classes = useStyles();

  const getResults = async () => {
    console.log("Testing website", website);
    setResult(true);
  }

  const log = (event) => {
    console.log(log);
  }

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <CustomInput
            id="regular"
            inputProps={{
              onChange: getResults,
              type: "text",
              name: "regular",
              placeholder: "test"
            }}
            formControlProps={{
              fullWidth: true,
            }}
            value={website}
            onChange={(events) => log(events.target.value)}
          />
          <Button onClick={() => getResults()} color="primary">
            Test
          </Button>
          <h4 className={classes.description}>{website} hi</h4>
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
