import React from 'react'
import TableRow from "@material-ui/core/TableRow";
import Visibility from "@material-ui/icons/Visibility";
import TableCell from "@material-ui/core/TableCell";
import styles from "./TablesRow.module.css";

const TablesRow = ({ client, visibleHandler}) => {
	return (
		<TableRow key={client.id}>
			<TableCell>
				<Visibility
					className={styles.visible}
					onClick={() => visibleHandler(client.id)}
				/>
				{client.isVisible === true
					? client.accountNumber
					: client.maskedValue}
			</TableCell>
			<TableCell>{client.sum}</TableCell>
			<TableCell>
				{client.currency}
			</TableCell>
		</TableRow>
	)
}

export default TablesRow
