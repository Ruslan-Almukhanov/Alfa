import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { data } from "../../data";
import { maskValue } from "../../helper";
import TablesRow from "../formElements/tableRow";
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
  const [clients, setClients] = useState([]);
  const [sort, setSort] = useState(false);

  let changedArray = [];

  const currencies = [...new Set(data.map(item => item.currency))];

  useEffect(() => {
    data.map(item => {
      changedArray.push({
        ...item,
        isVisible: true,
        maskedValue: maskValue(item.accountNumber)
      });
    });
    setClients(changedArray);
  }, []);

  changedArray = [];
  const classes = useStyles();

  const handleChange = e => {
    const target = e.target.value;

    setClients(() => {
      if (target != "all") {
        return data.filter(client => client.currency == e.target.value);
      }

      return data.filter(client => client.currency !== e.target.value);
    });
  };

  const sortHandler = e => {
    const target = e.target.value;
    let sortedClients = [];
    if (target === "max") {
      sortedClients = clients.sort((a, b) => a.sum - b.sum);
    } else if (target === "min") {
      sortedClients = clients.sort((a, b) => a.sum - b.sum).reverse();
    } else {
      sortedClients = clients;
    }

    setClients(sortedClients);
    setSort(!sort);
  };

  const visibleHandler = id => {
    let account = clients.find(client => client.id === id);
    const visible = account.isVisible;
    const newClient = clients.map(client =>
      client.id === id ? { ...client, isVisible: !visible } : client
    );
    setClients(newClient);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Фильтр
                  </InputLabel>
                  <Select
                    onChange={sortHandler}
                    native
                    label="Фильтр"
                    value={clients.currency}
                  >
                    <option aria-label="None" value="" />
                    <option value={"max"}>По Возрастанию</option>
                    <option value={"min"}>По Убыванию</option>
                    <option value={"def"}>По умолчанию</option>
                  </Select>
                </FormControl>
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
                    {currencies.map((item, i) => {
                      return (
                        <option key={i} value={item}>
                          {item}
                        </option>
                      );
                    })}
                    <option value={"all"}>Все</option>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
            {clients.map(client => {
              return (
                <TablesRow
                  key={client.id}
                  client={client}
                  visibleHandler={visibleHandler}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ClientAccounts;
