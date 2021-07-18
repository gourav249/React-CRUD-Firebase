import MaterialTable from "material-table";
import React from "react";

const ViewDetails = () => {
  return (
    <div>
      <MaterialTable
        title="Editable Preview"
        // columns={columns}
        // data={data}
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
