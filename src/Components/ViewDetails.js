import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
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
  withStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Toolbar,
  Typography,
  AppBar,
  Slide,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import useCollegeName from "../Hooks/useCollegeName";

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#bfbebe",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#e8e0d9",
    },
  },
}))(TableRow);
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
    boxShadow: "5px 10px #888888",
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ViewDetails = () => {
  const classes = useStyles();
  const history = useHistory();
  const { collegeNameList } = useCollegeName();
  const { studenDetails, deleteStudentdetails, updateStudentdetails } =
    useStudentsDetails();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  // const [collegeList, setCollegeList] = useState({});

  // console.log(collegeList);

  // useEffect(() => {
  //   const collegeName = {};
  //   collegeNameList.map((item, index) => {
  //     collegeName[index] = item.college;
  //     setCollegeList(collegeName);
  //   });
  // }, [collegeNameList]);

  const [showAlert, setShowAlert] = useState({
    msg: "",
    isOpen: false,
    color: "",
  });
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
    createData("College Name", data?.college),
    createData("Branch Name", data?.departement),
    createData("Branch Name", data?.course),
  ];
  return (
    <div>
      <MaterialTable
        title="All Students Details"
        options={{
          actionsColumnIndex: -1,
          exportButton: true,
          search: true,
          tableLayout: "auto",
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
          },
        }}
        columns={[
          {
            title: <strong>{"Sl No."}</strong>,
            field: "slno",
          },
          { title: <strong>{"Registration"}</strong>, field: "registration" },
          {
            title: <strong>{"User Name"}</strong>,
            field: "studentName",
            render: (row) => (
              <Grid container spacing={5} alignItems="center">
                <Grid item lg={3} md={3} sm={5}>
                  <Avatar style={{ backgroundColor: "green" }}>
                    {row.studentName[0]}
                  </Avatar>
                </Grid>
                <Grid item lg={2} md={2} sm={5}>
                  {row.studentName}
                </Grid>
              </Grid>
            ),
          },

          {
            title: <strong>{"Email"}</strong>,
            field: "studentEmail",
          },
          { title: <strong>{"Birth Date"}</strong>, field: "studentBirthDate" },
          {
            title: <strong>{"college Name"}</strong>,
            field: "college",
            // lookup: { collegeNameList: collegeList },
          },

          {
            title: <strong>{"Profile Image"}</strong>,
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
                updateStudentdetails(newData);
                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                deleteStudentdetails(oldData?.id);
                resolve();
              }, 1000);
            }),
        }}
      />

      <div>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          keepMounted
        >
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
                    <StyledTableRow key={row.name}>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.data}</TableCell>
                    </StyledTableRow>
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
