import React from "react";
import { Drawer } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { InputBase } from "@material-ui/core/";
import { Card, CardHeader } from "@material-ui/core/";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  drawer: {
    width: "240px",
    backgroundColor: "#cfebfd",
    height: "100px",
  },
  h4: {
    marginTop: "70px",
  },
  search_div: {
    display: "flex",
    border: "2px white inset  ",
    marginTop: "0px",
    marginLeft: "3.5px",
    marginRight: "3.5px",
    backgroundColor: "white",
  },
  search_icon: {
    marginTop: "5px",
  },
  paper: {
    width: 240,
    background: "#cfebfd",
  },
  card: {
    marginTop: "15px",
    "&:hover": { backgroundColor: "grey" },
  },
  imageLogo: {
    width: "30px",
    height: "30px",
    marginLeft: "20px",
  },
});
function Sidebar() {
  const [data, setData] = useState("");
  const handleClick = (event) => {
    setData("");
  };

  const classes = useStyles();
  const usersDetail = [
    {
      name: "Sara Smith",
      date: "04/01/2022",
      card: "card1",
      userImage:
        "https://www.citypng.com/public/uploads/preview/black-round-female-user-profile-icon-transparent-png-11639961100dq0cerzqqm.png",
    },
    {
      name: "James Jhonson",
      date: "05/02/2022",
      card: "card2",
      userImage:
        "https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg",
    },
    {
      name: "Patrice Page",
      date: "06/02/2022",
      card: "card3",
      userImage: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
  ];
  return (
    <Drawer
      anchor="left"
      variant="permanent"
      className={classes.drawer}
      classes={{ paper: classes.paper }}
    >
      <h4 className={classes.h4}>Patients</h4>
      <div className={classes.search_div}>
        <InputBase placeholder="Search Patient" className={classes.search} />
        <SearchIcon className={classes.search_icon} />
      </div>
      {usersDetail.map((item) => {
        return (
          <Card
            className={classes.card}
            sx={{ maxWidth: 345 }}
            onClick={handleClick}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: blue[500] }}
                  alt="image"
                  src={item.userImage}
                />
              }
              action={<FiberManualRecordIcon color="secondary" />}
              title={item.name}
              subheader={item.date}
            />
          </Card>
        );
      })}
    </Drawer>
  );
}

export default Sidebar;
