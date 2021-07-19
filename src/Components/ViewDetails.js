import MaterialTable from "material-table";
import React, { useState } from "react";
import swal from "@sweetalert/with-react";
import { useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import VisibilityIcon from "@material-ui/icons/Visibility";
import useStudentsDetails from "../Hooks/useStudentsDetails";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Toolbar,
  Typography,
  AppBar,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

function createData(name, data) {
  return { name, data };
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  table: {
    minWidth: 550,
  },
}));
const ViewDetails = () => {
  const classes = useStyles();
  const history = useHistory();
  const { studenDetails } = useStudentsDetails();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const handleExit = () => {
    swal({
      title: "Are you sure?",
      text: "Are You Sure Want To Go Home Page!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("You Have SuccessFully Back Home !", {
          icon: "success",
        });
        history.push(`/`);
      } else {
        swal("Stay Here!");
      }
    });
  };

  const handleClose = () => setOpen(false);
  const rows = [
    createData(
      "Profile Image",
      data && data?.imgUrl ? (
        <Avatar style={{ backgroundColor: "#1ab394" }}>
          {
            <img
              src={
                data?.imgUrl ||
                "https://dummyimage.com/600x400/000/fff&text=upload"
              }
              alt={data?.imgUrl}
              height={"100%"}
              width={"100%"}
            />
          }
        </Avatar>
      ) : data && data?.studentName ? (
        <Avatar style={{ backgroundColor: "#1ab394" }}>
          {data?.studentName[0]}
        </Avatar>
      ) : (
        "Not Available"
      )
    ),
    createData("Student Name", data?.studentName),
    createData("Registration", data?.registration),
    createData("Student Email", data?.studentEmail),
    createData("Student Age", data?.studentAge),
    createData("Student Birth Date", data?.studentBirthDate),
    createData("College Name", data?.collegeName),
    createData("Branch Name", data?.branchName),
  ];
  return (
    <div>
      <MaterialTable
        title="All Students Details"
        options={{
          actionsColumnIndex: -1,
          exportButton: true,
          search: true,
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
          },
        }}
        columns={[
          { title: "Sl No.", field: "slno" },
          { title: "Registration", field: "registration" },
          {
            title: <strong>{"User Name"}</strong>,
            field: "studentName",
            render: (row) => (
              <Grid container spacing={5} alignItems="center">
                <Grid item lg={4} md={4} sm={5}>
                  <Avatar style={{ backgroundColor: "green" }}>
                    {row.studentName[0]}
                  </Avatar>
                </Grid>
                <Grid item lg={4} md={4} sm={5}>
                  {row.studentName}
                </Grid>
              </Grid>
            ),
          },
          // { title: "Name", field: "studentName" },
          { title: "Email", field: "studentEmail" },
          { title: "Birth Date", field: "studentBirthDate" },
          { title: "college Name", field: "collegeName" },

          {
            title: "Profile Image",
            field: "imgUrl",
            render: (row) => (
              <Grid container>
                <Grid item lg={1} md={1} sm={2}>
                  {row && row?.imgUrl ? (
                    <Avatar style={{ backgroundColor: "#1ab394" }}>
                      {
                        <img
                          src={
                            row?.imgUrl ||
                            "https://dummyimage.com/600x400/000/fff&text=upload"
                          }
                          alt={row?.imgUrl}
                          style={{
                            height: "100%",
                            width: "100%",
                            imageRendering: "auto",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        />
                      }
                    </Avatar>
                  ) : (
                    <Avatar style={{ backgroundColor: "#1ab394" }}>
                      {row?.studentName[0]}
                    </Avatar>
                  )}
                </Grid>
              </Grid>
            ),
          },
        ]}
        data={studenDetails}
        actions={[
          {
            icon: () => <ExitToAppIcon style={{ color: "#78838d" }} />,
            tooltip: "Exit Page",
            isFreeAction: true,
            onClick: (event) => {
              handleExit();
            },
          },
          {
            icon: () => <VisibilityIcon style={{ color: "#78838d" }} />,
            tooltip: "View Details",
            onClick: async (evt, data) => {
              setOpen(true);
              setData(data);
              console.log(data);
            },
          },
        ]}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve();
              }, 1000);
            }),
        }}
      />

      <div>
        <Dialog fullScreen open={open} onClose={handleClose}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Student Details
              </Typography>

              <IconButton
                edge="end"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <Close />
              </IconButton>
            </Toolbar>
          </AppBar>

          <DialogContent>
            <TableContainer component={Paper}>
              <Table className={classes.table}>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.data}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
          {/* <DialogActions>
            <Button variant="outlined" onClick={handleClose} color="inherit">
              Close
            </Button>
          </DialogActions> */}
        </Dialog>
      </div>
    </div>
  );
};

export default ViewDetails;
