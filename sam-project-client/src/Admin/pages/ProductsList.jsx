import React, { Component } from "react";
import api from "../api/api";
import { useTable, useMemo } from "react-table";

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      columns: [],
      isLoaded: false
    };
  }
  componentDidMount = async () => {
    this.setState({ isLoaded: true });
    await api.getAllProducts().then(items => {
      this.setState({
        items: items.data.data,
        isLoaded: false
      });
    });
  };

  render() {
    const { isLoaded, items } = this.state;
    console.log("итемы:", items);

    // items.forEach(function(item, i, arr) {
    //   console.log(
    //     i + ": " + item._id + item.section + item.product.description
    //   );
    // });

    const columns = [
      {
        Header: "ID",
        accessor: "_id",
        filterable: true
      },
      {
        Header: "Section",
        accessor: "section",
        filterable: true
      },
      {
        Header: "Image",
        accessor: "imageS",
        filterable: true
      },
      {
        Header: "Desc",
        accessor: "product.name"
      }
    ];
    {
      return (
        <Table
          data={items}
          columns={columns}
          loading={isLoaded}
          defaultPageSize={10}
          showPageSizeOptions={true}
          minRows={0}
        />
      );
    }
  }
}

export default ProductsList;
