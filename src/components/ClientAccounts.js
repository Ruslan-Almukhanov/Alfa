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
          stye={{ background: "#ccc" }}
          aria-label="sticky table"
        >
          <TableBody>
            {data.map((client, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{client.accountNumber}</TableCell>
                  <TableCell>{client.sum}</TableCell>
                  <TableCell>{client.currency}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ClientAccounts;
