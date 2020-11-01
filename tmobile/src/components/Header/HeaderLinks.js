/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="#pablo"
          className={classes.navLink}
          // classes.navLink + " " + classes.navLinkActive
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          <Link to="/rugged" className={classes.dropdownLink}>
            Learn
          </Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#pablo"
          className={classes.navLink}
          onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          <Link to="/ctf" className={classes.dropdownLink}>
            CTF
          </Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="#pablo" className={classes.navLink} color="transparent">
          <Link to="/test" className={classes.dropdownLink}>
            Pen Testing
          </Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="#pablo" className={classes.navLink} color="transparent">
          <Link to="/vulnerabilities" className={classes.dropdownLink}>
            Vulnerabilities
          </Link>
        </Button>
      </ListItem>
    </List>
  );
}
