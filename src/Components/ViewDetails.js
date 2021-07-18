import MaterialTable from "material-table";
import React from "react";
import swal from "@sweetalert/with-react";
import { useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import VisibilityIcon from "@material-ui/icons/Visibility";
const ViewDetails = () => {
  const history = useHistory();
  const handleOpen = () => {
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
          { title: "Name", field: "name" },
          { title: "Surname", field: "surname" },
          { title: "Birth Year", field: "birthYear", type: "numeric" },
          {
            title: "Birth Place",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
          },
        ]}
        data={[
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
          {
            name: "Zerya Betül",
            surname: "Baran",
            birthYear: 2017,
            birthCity: 34,
          },
        ]}
        actions={[
          {
            icon: () => <ExitToAppIcon style={{ color: "#78838d" }} />,
            tooltip: "Exit Page",
            isFreeAction: true,
            onClick: (event) => {
              handleOpen();
            },
          },
          {
            icon: () => <VisibilityIcon style={{ color: "#78838d" }} />,
            tooltip: "View Details",
            onClick: async (evt, data) => {
              // previewCatalog([data?.id]);
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
    </div>
  );
};

export default ViewDetails;
