import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: value => value.toLocaleString("en-US")
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: value => value.toLocaleString("en-US")
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: value => value.toFixed(2)
  }
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767)
];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  }
});

const ClientAccounts = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const data = [
    {
      accountNumber: "8D7891AD-E9FD-AA4A-05E4-A2E1C82C96B2",
      sum: 9129,
      currency: "₤"
    },
    {
      accountNumber: "13C9A73A-FD71-B443-DFF6-3AA5575ED5A7",
      sum: 2850,
      currency: "₤"
    },
    {
      accountNumber: "2CCADAA1-A9B3-B581-923B-156D82D21922",
      sum: 5752,
      currency: "₸"
    },
    {
      accountNumber: "EA29056F-1031-A907-4B46-A08C1A3B7B80",
      sum: 7541,
      currency: "₤"
    },
    {
      accountNumber: "4866DE7B-551E-D214-E834-843B569A3DFA",
      sum: 1381,
      currency: "₤"
    }
  ];
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table
          stye={{ width: "1000px" }}
          stickyHeader
          aria-label="sticky table"
        >
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            
                return (
                  <TableRow>
                    {data.map((client, index) => {
                      return (
                        <TableCell key={index}>
                          {client.accountNumber}
                        </TableCell>
                      );
                    })}
                  </TableRow>
               
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ClientAccounts;
