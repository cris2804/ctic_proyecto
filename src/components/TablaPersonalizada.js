import React,{useState} from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import "./css/Table.css";


export default function TablaPersonalizada({rows,cols,cantidad,changePage,changePerPage}) {
    const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log(newPage);
    changePage(newPage)
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    console.log(+event.target.value);
    changePerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className='container-table'>
      <div className='container-content-table'>
      <TableContainer style={{maxHeight:'100%'}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {cols.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              {cols.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  
                >
                    <input type='text' placeholder={column.label}/>
                  
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {cols.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      <div className='wrapper-pagination'>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={cantidad}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  )
}
