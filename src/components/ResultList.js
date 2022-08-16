import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './ResultList.css';
import ReservationForm from './ReservationForm';


const ResultList = (props) => {

    const [openDialog, setOpenDialog] = React.useState(false);
    const [dialogData, setDialogData] = React.useState({});
    const popReservationDialog = (data) => {
        setOpenDialog(true);
        setDialogData(data);
    }
    const resultlistCallback = (openDialog) => {
        setOpenDialog(openDialog);
    }
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, maxWidth:1200 }} className="result-table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Phone</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Note</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className='content-table'>
                        {props.data.map((record, i) => (
                        <TableRow
                            key={i}
                        >
                            <TableCell component="th" scope="row" onClick={()=>popReservationDialog(record)}>
                                {record.firstName} {record.lastName}
                            </TableCell>
                            <TableCell align="left" onClick={()=>popReservationDialog(record)}>{record.email}</TableCell>
                            <TableCell align="left" onClick={()=>popReservationDialog(record)}>{record.phone}</TableCell>
                            <TableCell align="left" onClick={()=>popReservationDialog(record)}>{record.note}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            { openDialog ? (<ReservationForm resultlistCallback={resultlistCallback} openDialog={openDialog}  data={dialogData}/>) : null }
        </div>
        // <div>
        //     <div>
        //         {props.data.map((record, i) => (
        //         <p key={i}>{record.firstName} {record.lastName}</p>
        //         ))}
        //     </div>
        // </div>
    )
}

export default ResultList