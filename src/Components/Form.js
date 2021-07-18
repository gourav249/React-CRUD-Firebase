import React, { useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import { Send, Visibility } from "@material-ui/icons";
import Alert from "@material-ui/lab/Alert";
import { DropzoneArea } from "material-ui-dropzone";
import { Autocomplete } from "@material-ui/lab";
import useCollegeName from "../Hooks/useCollegeName";
import useCourse from "../Hooks/useCourse";
import useDepartement from "../Hooks/useDepartement";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import { auth, database, storage } from "../config";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  underline: {
    textTransform: "capitalize",
    textDecoration: "underline",
    textDecorationThickness: "5px",
    textUnderlinePosition: "under",
    textDecorationColor: "#53adf0",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Form = () => {
  const classes = useStyles();
  const history = useHistory();
  const { collegeNameList } = useCollegeName();
  const { courseNameList } = useCourse();
  const { DepartementNameList } = useDepartement();
  const [openBackDrop, setOpenBackDrop] = useState(false);
  const [showAlert, setShowAlert] = useState({
    msg: "",
    isOpen: false,
    color: "",
  });

  const [registration, setRegistration] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentBirthDate, setStudentBirthDate] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [picFile, setPicFile] = useState({});

  const handleSubmit = async (e) => {
    try {
      setOpenBackDrop(true);
      e.preventDefault();
      const storageRef = `StudentDetails/ProfilePic`;
      const res = await storage.ref(storageRef).put(picFile);
      const imgUrl = await res.ref.getDownloadURL();

      await database.ref(`StudentDetails`).push({
        registration,
        studentName,
        studentEmail,
        studentBirthDate,
        collegeName,
        studentAge,
        branchName,
        degreeName,
        imgUrl,
        timestamp: new Date().toLocaleString(),
      });
      swal({
        title: "Thanks",
        text: "You have succesfully Submited!",
        icon: "success",
      });
    } catch (error) {
      swal({
        title: error.message,
        text: "Your Data Have Not Submited succesfully!",
        icon: "error",
      });
    } finally {
      setRegistration("");
      setStudentName("");
      setStudentEmail("");
      setStudentBirthDate("");
      setCollegeName("");
      setStudentAge("");
      setDegreeName("");
      setBranchName("");
      setPicFile({});
      setOpenBackDrop(false);
    }
  };

  const handleRouteViewDetails = () => {
    swal({
      title: "Welcome To Studets Details Page",
      text: "You have succesfully Come Students Details Page!",
      icon: "success",
    });
    history.push(`/Details`);
  };
  return (
    <div>
      <Card>
        <Backdrop open={openBackDrop} style={{ zIndex: 99999, color: "#fff" }}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Snackbar
          open={showAlert.isOpen}
          autoHideDuration={6000}
          onClose={() => setShowAlert({ msg: "", isOpen: false, color: "" })}
        >
          <Alert
            onClose={() => setShowAlert({ msg: "", isOpen: false, color: "" })}
            severity={showAlert.color}
          >
            {showAlert.msg}
          </Alert>
        </Snackbar>
        <CardContent>
          <Typography component="div">
            <Box
              textAlign="center"
              m={1}
              fontWeight="fontWeightBold"
              letterSpacing={6}
              fontFamily="Monospace"
              fontSize={28}
              className={classes.underline}
            >
              Students Form Details
            </Box>
          </Typography>
          <Container
            component="main"
            maxWidth="md"
            style={{ border: "4px solid grey", borderRadius: "1rem" }}
          >
            <Grid container spacing={3}>
              <Grid item md={10} sm={10} xs={10}>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item md={6} sm={12} xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        label="Student Registration No."
                        helperText="Enter Your Student Registration No."
                        type="number"
                        value={registration}
                        onChange={(e) => setRegistration(e.target.value)}
                      />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        label="Student Name"
                        helperText="Enter Your Student Name."
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                      />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        label="Student Email"
                        helperText="Enter Your Student Email."
                        type="text"
                        value={studentEmail}
                        onChange={(e) => setStudentEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                      <TextField
                        variant="outlined"
                        placeholder="Student D.O.B"
                        helperText="Select Your Student D.O.B"
                        fullWidth
                        required
                        type="date"
                        value={studentBirthDate}
                        onChange={(e) => setStudentBirthDate(e.target.value)}
                      />
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                      <Autocomplete
                        options={collegeNameList}
                        getOptionLabel={(option) => option?.college}
                        onChange={(event, value) => setCollegeName(value)}
                        value={collegeName}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            helperText="Select Your Student College Name."
                            placeholder="College Name"
                            margin="normal"
                            variant="outlined"
                          />
                        )}
                      />
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                      <FormControl
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        className={classes.formControl}
                      >
                        <InputLabel>Age</InputLabel>
                        <Select
                          value={studentAge}
                          onChange={(e) => setStudentAge(e.target.value)}
                          label="Age"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>10</MenuItem>
                          <MenuItem value={15}>15</MenuItem>
                          <MenuItem value={20}>20</MenuItem>
                          <MenuItem value={25}>25</MenuItem>
                          <MenuItem value={30}>30</MenuItem>
                          <MenuItem value={35}>35</MenuItem>
                        </Select>
                        <FormHelperText>Select Your Age.</FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                      <Autocomplete
                        options={courseNameList}
                        getOptionLabel={(option) => option?.course}
                        onChange={(event, value) => setDegreeName(value)}
                        value={degreeName}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            helperText="Select Your Current Degree."
                            label="Select Degree"
                            margin="normal"
                            variant="outlined"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                      <Autocomplete
                        options={DepartementNameList}
                        getOptionLabel={(option) => option?.departement}
                        onChange={(event, value) => setBranchName(value)}
                        value={branchName}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            helperText="Select Your Current Branch."
                            label="Select Branch"
                            margin="normal"
                            variant="outlined"
                          />
                        )}
                      />
                    </Grid>

                    <Grid item md={12} sm={12} xs={12}>
                      <DropzoneArea
                        filesLimit={1}
                        dropzoneText={`Upload Student Image`}
                        onChange={(flie) => setPicFile(flie[0])}
                      />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "50%",
                          margin: "0 auto",
                        }}
                      >
                        <Button
                          endIcon={<Send />}
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                        >
                          Save
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item md={2} sm={2} xs={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  color="inherit"
                  className={classes.submit}
                  startIcon={<Visibility />}
                  onClick={handleRouteViewDetails}
                >
                  View
                </Button>
              </Grid>
            </Grid>
          </Container>
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
