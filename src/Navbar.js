import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  appbar: {
    zIndex: theme.zIndex.drawer + 1,
    display: "flex",
    flexWrap: "wrap",
  },
  appbar_link: {
    margin: "5px",
    padding: "5px",
    marginLeft: "60px",
  },
  notificationIcon: {
    marginLeft: "770px",
  },
  imageLogo: {
    marginRight: "30px",
    width: "30px,",
    height: "30px",
  },
  logo: {
    width: "30px",
    height: "40px",
    marginRight: "10px",
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="default" className={classes.appbar}>
      <Toolbar varient="secondary">
        <img
          src="https://www.seekpng.com/png/full/62-623840_doctor-symbol-clipart-community-medicine-hospital.png"
          className={classes.logo}
          alt="logo"
        />
        <Link
          href="#"
          variant="body1"
          color="primary"
          className={classes.appbar_link}
        >
          PATIENTS
        </Link>
        <Link
          href="#"
          variant="body1"
          color="inherit"
          className={classes.appbar_link}
        >
          CALENDAR
        </Link>
        <Link
          href="#"
          variant="body1"
          color="inherit"
          className={classes.appbar_link}
        >
          USERS
        </Link>
        <Link
          href="#"
          variant="body1"
          color="inherit"
          className={classes.appbar_link}
        >
          BILLING
        </Link>
        <IconButton edge="start" className={classes.notificationIcon}>
          <NotificationsIcon />
        </IconButton>
        <img
          src="https://www.citypng.com/public/uploads/preview/black-round-female-user-profile-icon-transparent-png-11639961100dq0cerzqqm.png"
          className={classes.imageLogo}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
