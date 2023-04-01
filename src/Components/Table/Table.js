import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  }}))
  

function createData(
  Crop,
  Area,
  GeneralCultivation,
  RainFall,
  GeneralSell
  
) {
  return { Crop,Area, GeneralCultivation,RainFall,GeneralSell};
}

const rows = [
  createData("carrot" ,"NuwaraEliya","20000kg","2550 m^3","14500kg"),
  createData('beans', "Walimada", "50000kg", "2435.98 m^3","32000kg"),
  createData('pineapple', "Nawala", "19870kg", "1875m^3","13600kg"),
  createData('Tomato',"Jaffna", "43000kg", "1200m^3","40000kg"),
  createData('red-row-rice', "Polonnaruwa", "54000kg","1398.08m^3","52000kg" ),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">cultivating Crop Name</StyledTableCell>
            <StyledTableCell align="right">Cultivating Area</StyledTableCell>
            <StyledTableCell align="right">GeneralCultivation(per year in kilogram)</StyledTableCell>
            <StyledTableCell align="right">RainFall(per day)</StyledTableCell>
            <StyledTableCell align="right">GeneralSell(per year in kilogram)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.Crop}</StyledTableCell>
              <StyledTableCell align="left">{row.Area}</StyledTableCell>
              <StyledTableCell align="left">{row.GeneralCultivation}</StyledTableCell>
              <StyledTableCell align="left">{row.RainFall}</StyledTableCell>
              <StyledTableCell align="left">{row.GeneralSell}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
