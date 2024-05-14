// Consulta.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography, Box } from '@mui/material';

const Consulta = ({ data, loading, error }) => {
    return (
        <div>
            <Box mb={2} spacing={1} style={{ margin: '1px' }}>
                <br />
                <Typography variant="h3" gutterBottom>
                    Detalles:
                </Typography>
                {error && (
                    <Typography variant="h6" color="error">
                        {error}
                    </Typography>
                )}
                {loading ? (
                    <Typography variant="h6">Cargando...</Typography>
                ) : (
                    data ? (
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Estudiante</TableCell>
                                        <TableCell>{data.datosPersonales?.primerNombre}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Carrera</TableCell>
                                        <TableCell>{data.datosPersonales?.detallesAcademicos?.carrera}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Campus</TableCell>
                                        <TableCell>
                                            {data.datosPersonales?.detallesAcademicos?.sede} 
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Modalidad de estudios</TableCell>
                                        <TableCell>{data.datosPersonales?.detallesAcademicos?.modalidad || "Presencial"}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Monto a Pagar</TableCell>
                                        <TableCell>
                                            {data.datosPersonales?.detallesAcademicos?.deudas 
                                                ? data.datosPersonales?.detallesAcademicos?.deudas.map((deuda, index) => (
                                                    <div key={index}>S/. {deuda.iteM_AMT}</div>
                                                ))
                                                : "No hay deudas"}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : (
                        <Typography variant="h6">No hay datos disponibles</Typography>
                    )
                )}
            </Box>
        </div>
    );
};

export default Consulta;
