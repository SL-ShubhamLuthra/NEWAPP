import {
  makeStyles,
  Tabs,
  Tab,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  IconButton,
} from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { Delete } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles({
  main_div: {
    backgroundColor: "#D3D3D3",
    height: "900px",
    marginLeft: "245px",
    marginTop: "75px",
  },
  main1_div: {
    display: "flex",
    justifyContent: "space-between",
  },
  img: {
    height: "50px",
    width: "50px",
    borderRadius: "25px",
  },

  patient_detail: {
    display: "flex",
    flexWrap: "wrap",
  },
  patient_detail2: { background: "white", height: "750px" },
  tab: {
    marginLeft: "40px",
    marginTop: "25px",
    background: "white",
    height: "64px",
    width: "1090px",
    borderTop: "1px inset",
    borderLeft: "1px inset",
    borderRight: "1px  inset",
  },
  tab1: {
    borderRight: "2px lightgrey inset",
  },
  tab2: {
    borderRight: "2px lightgrey inset",
    borderBottom: "2px  lightgrey solid",
  },
  patient_container: { marginLeft: "45px" },
  btn: {
    marginTop: "45px",
    marginLeft: "45px",
  },
  patientContainer_table: { width: "500px", marginTop: "20px" },
  patientContainer_table4: { width: "1200px" },
  head_table: {
    backgroundColor: "#cfebfd",
  },
  body_table: {
    backgroundColor: "#D3D3D3",
  },
});

function Main() {
  const classes = useStyles();
  return (
    <div className={classes.main_div}>
      <div className={classes.main1_div}>
        <h4>Patient Information</h4>
        <h5>Last updated 02:05Pm, Today</h5>
      </div>
      <div className={classes.patient_detail}>
        <img
          alt="patient_image"
          src="https://www.citypng.com/public/uploads/preview/black-round-female-user-profile-icon-transparent-png-11639961100dq0cerzqqm.png"
          className={classes.img}
        />
        <table>
          <tr>
            <th>Sara Smith</th>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>7404123456</td>
            <br />
            <td>Surgery Type:</td>
            <td>Rotator cutoff Repair</td>
            <br />
            <td>Anthesiologist:</td>
            <td>Dr.Christina Hardaway</td>
            <br />
            <td>
              <img
                alt="patient_image"
                src="https://thumbs.dreamstime.com/z/green-yes-button-10058887.jpg"
                className={classes.img}
              />
            </td>
          </tr>

          <tr>
            <td>Email:</td>
            <td>sarasmith@gmail.com</td>
            <br />
            <td>Surgery Date:</td>
            <td>15 Aug 2020</td>
            <br />
            <td>Anthesiologist Phone:</td>
            <td>301-896-8745</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>Female</td>
            <br />
            <td>Height(cm)</td>
            <td>163</td>
            <br />
            <td>Anthesiologist Email:</td>
            <td>christina@h3a.com</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>45</td>
            <br />
            <td>Weight(lb)</td>
            <td>110</td>
            <br />
            <td>BMI:</td>
            <td>19</td>
          </tr>
        </table>
        <div>
          <Tabs className={classes.tab}>
            <Tab label="List of Prior Surgeries" className={classes.tab1} />
            <Tab label="List of Medical Diagnosis" className={classes.tab2} />
            <Tab label="List of Medications" className={classes.tab2} />
            <Tab label="Airway Evaluation" className={classes.tab2} />
            <Tab
              label="Anethesia Clerance and Recommendation"
              className={classes.tab2}
            />
          </Tabs>
        </div>
      </div>
      <div className={classes.patient_detail2}>
        <TableContainer className={classes.patient_container}>
          <Table className={classes.patientContainer_table}>
            <TableHead className={classes.head_table}>
              <TableRow>
                <TableCell>First Time Surgery</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.body_table}>
              <TableRow>
                <TableCell>No</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <br></br>
          <Table className={classes.patientContainer_table}>
            <TableHead className={classes.head_table}>
              <TableRow>
                <TableCell>Family History of Surgical Complications?</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.body_table}>
              <TableRow>
                <TableCell>Yes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <br></br>
          <Table className={classes.patientContainer_table}>
            <TableHead className={classes.head_table}>
              <TableRow>
                <TableCell>If Yes, please provide more details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.body_table}>
              <TableRow>
                <TableCell>
                  Proident magna aliqua do pariatur culpa dolor Lorem
                  consectetur ex voluptate velit. Mollit dolore ea sunt
                  incididunt fugiat consectetur cupidatat nostrud nulla sint
                  cillum. Voluptate exercitation Lorem laboris tempor. Ut velit
                  cupidatat do nisi. Sint do exercitation velit ipsum ullamco
                  laborum cupidatat proident.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <br></br>
          <h5>Previous Surgeries</h5>
          <Table className={classes.patientContainer_table4}>
            <TableHead className={classes.head_table}>
              <TableRow>
                <TableCell>Surgery Type</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Anesthesia Type</TableCell>
                <TableCell>Surgical Complications</TableCell>
                <TableCell>
                  Anesthesic Complications(nausea, vomitting, difficult
                  intubation)
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.body_table}>
              <TableRow>
                <TableCell>Shoulder reconstruction</TableCell>
                <TableCell>General"Breathing Tube"</TableCell>
                <TableCell>January,2008</TableCell>
                <TableCell>No</TableCell>
                <TableCell>No</TableCell>
                <TableCell>
                  <IconButton>
                    <Delete />
                  </IconButton>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Button color="primary" variant="contained" className={classes.btn}>
          <AddIcon />
          Add Surgery
        </Button>
      </div>
    </div>
  );
}

export default Main;
