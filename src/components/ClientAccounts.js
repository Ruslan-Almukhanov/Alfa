import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { data } from "../data";
import ImportExportIcon from "@material-ui/icons/ImportExport";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 440
  },
  formControl: {
    width: 100,
    margin: "1rem"
  }
});

const ClientAccounts = () => {
  const [clients, setClients] = useState(data);

  const classes = useStyles();

  const handleChange = (e, index, value) => {
    const target = e.target.value;

    setClients(() => {
      if (target != "all") {
        return data.filter(client => client.currency == e.target.value);
      }

      return data.filter(client => client.currency !== e.target.value);
    });
  };
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <ImportExportIcon onClick={sortHandler} />
              </TableCell>
              <TableCell>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Валюта
                  </InputLabel>
                  <Select
                    onChange={handleChange}
                    native
                    label="Валюта"
                    value={clients.currency}
                  >
                    <option aria-label="None" value="" />
                    <option value={"₤"}>₤</option>
                    <option value={"₸"}>₸</option>
                    <option value={"all"}>Все</option>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
            {clients.map((client, index) => {
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
