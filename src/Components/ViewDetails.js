import MaterialTable from "material-table";
import React, { useEffect, useRef, useState } from "react";
import swal from "@sweetalert/with-react";
import { useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import VisibilityIcon from "@material-ui/icons/Visibility";
import useStudentsDetails from "../Hooks/useStudentsDetails";
import {
  Avatar,
  Button,
  Dialog,
  Backdrop,
  CircularProgress,
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
import { database, storage } from "../config";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

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
    // minWidth: 550,
    boxShadow: "5px 10px #888888",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ViewDetails = () => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const { collegeNameList } = useCollegeName();
  const { studenDetails, deleteStudentdetails, updateStudentdetails } =
    useStudentsDetails();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const fileRef = useRef(null);
  const [selectedRowId, setSelectedRowId] = useState("");
  const [openBackDrop, setOpenBackDrop] = useState(false);

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

  const uploadImage = async (row) => {
    try {
      fileRef.current?.click();
      setSelectedRowId(row);
    } catch (error) {}
  };

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
      <input
        type="file"
        hidden
        ref={fileRef}
        onChange={async (e) => {
          const targetFile = e.target.files[0];
          const uploadRef = `StudentDetails/${selectedRowId}/imgUrl`;
          setOpenBackDrop(true);
          const res = await storage.ref(uploadRef).put(targetFile);
          const url = await res.ref.getDownloadURL();
          await database.ref(uploadRef).set(url);
          setOpenBackDrop(false);
          swal("Image Uploaded SucessFull !");
        }}
      />
      <Backdrop open={openBackDrop} style={{ zIndex: 99999, color: "#fff" }}>
        <CircularProgress color="inherit" />
      </Backdrop>

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
            headerStyle: {
              fontSize: 15,
              textAlign: "center",
            },
            cellStyle: { textAlign: "center" },
          },
          {
            title: <strong>{"Registration"}</strong>,
            field: "registration",
            headerStyle: {
              fontSize: 15,
              textAlign: "center",
            },
            cellStyle: { textAlign: "center" },
          },
          {
            title: <strong>{"User Name"}</strong>,
            field: "studentName",
            headerStyle: {
              fontSize: 15,
              textAlign: "center",
            },

            render: (row) => (
              <Grid
                container
                spacing={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid
                  item
                  md={2}
                  sm={2}
                  xs={6}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar style={{ backgroundColor: "green" }}>
                    {row.studentName[0]}
                  </Avatar>
                </Grid>
                <Grid item md={10} sm={10} xs={6}>
                  {row.studentName}
                </Grid>
              </Grid>
            ),
          },

          {
            title: <strong>{"Email"}</strong>,
            field: "studentEmail",
            headerStyle: { fontSize: 15, textAlign: "center" },
            cellStyle: { alignItems: "center" },
          },
          {
            title: <strong>{"Birth Date"}</strong>,
            field: "studentBirthDate",
            headerStyle: { fontSize: 15, textAlign: "center" },
          },
          {
            title: <strong>{"college Name"}</strong>,
            field: "college",
            headerStyle: { fontSize: 15, textAlign: "center" },
          },

          {
            title: <strong>{"Profile Image"}</strong>,
            field: "imgUrl",
            headerStyle: {
              fontSize: 15,
              textAlign: "center",
              margin: "0 auto",
            },

            render: (row) => (
              <Grid container>
                <Grid item lg={1} md={1} sm={2}>
                  {row && row?.imgUrl ? (
                    <Avatar
                      style={{
                        backgroundColor: "#1ab394",
                        height: "50px",
                        width: "50px",
                      }}
                    >
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
                            objectFit: "fill",
                          }}
                          onClick={() => uploadImage(row?.id)}
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
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
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
        </Dialog>
      </div>
    </div>
  );
};

export default ViewDetails;
