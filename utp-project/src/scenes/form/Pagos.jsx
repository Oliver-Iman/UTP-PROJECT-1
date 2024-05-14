import React, { useState } from 'react';
import { Card, Grid, CardMedia, Box, Typography } from '@mui/material';
import Consulta from '../TablaConsulta/consulta';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Header from '../../components/Header';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import axios from 'axios';
import { DateField } from '@mui/x-date-pickers/DateField';
import ReCAPTCHA from 'react-google-recaptcha';

const Pagos = () => {
    const [selectedImage] = useState(null);
    const [tipoDoc, setTipoDoc] = useState('');
    const [numeroDocumento, setNumeroDocumento] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState(null);
    const [consultaData, setConsultaData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [camposHabilitados, setCamposHabilitados] = useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState('');

    const handleCarga = (event) => {
        const value = event.target.value;
        setTipoDoc(value);
        setCamposHabilitados(!!value);
    };

    const handleNumeroDocumentoChange = (event) => {
        const value = event.target.value;
        setNumeroDocumento(value);
    };

    const handleFechaNacimientoChange = (date) => {
        setFechaNacimiento(date);
    };
   
    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    const handleConsultar = async () => {
        if (!numeroDocumento.trim() || !fechaNacimiento) {
            setError('Por favor, completa todos los campos');
            return;
        }

        setLoading(true);
        setError(null);
    
        try {
            const formattedFechaNacimiento = fechaNacimiento.format('YYYY-MM-DD');
            const url =`https://localhost:7235/api/Student/ESTUDIANTE/PAGO?dni=${numeroDocumento}&FechaNacimiento=${formattedFechaNacimiento}`;
            const response = await axios.post(url);
            
            if (response.status === 200 && response.data) {
                setConsultaData(response.data);
                setLoading(false);
                setError(null);
            } else {
                setError('Error fetching data');
            }
        } catch (error) {
            setError('Error fetching data');
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <Box m="20px">
            <Grid container spacing={1} style={{ margin: '-5px' }}>
                <Grid item xs={12} sm={6} style={{ margin: '1px' }}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="Imagen Principal"
                            height="600"
                            image={selectedImage || 'https://files-pagos.utpxpedition.com/web-prod/2021-01/imgbanner-01.png'}
                        />
                    </Card>
                </Grid>

                <Grid item xs={12} sm={5} style={{ margin: '1px' }}>
                    <Box>
                        <Header title="PAGO EN LINEA" subtitle="Ingresa tu documento de identidad y fecha de nacimiento con los que te registraste para realizar el pago en línea." />
                    </Box>
                    
                    <FormControl fullWidth sm={4} md={4}>
                        <InputLabel id="demo-simple-select-label">Tipo de documento</InputLabel>
                        <Select 
                            required
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={tipoDoc}
                            label="Tipo de documento"
                            onChange={handleCarga}
                        >
                            <MenuItem value="" disabled > <em>Elige tu tipo de documento</em> </MenuItem>
                            <MenuItem value={1}>D.N.I</MenuItem>
                            <MenuItem value={2}>Pasaporte</MenuItem>
                            <MenuItem value={3}>C.E</MenuItem>
                        </Select>

                        <Box  mb={1}><br />
                            <Grid container spacing={2} alignItems="center" direction="row">
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Numero de Documento" 
                                        variant="outlined"
                                        fullWidth
                                        size="medium" 
                                        value={numeroDocumento}
                                        onChange={handleNumeroDocumentoChange}
                                        disabled={!camposHabilitados}/>
                                </Grid>
                            
                                <Grid item xs={12} sm={6} md={6}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        
                                            <DateField  
                                                label="Fecha de Nacimiento" 
                                                value={fechaNacimiento} 
                                                onChange={handleFechaNacimientoChange}
                                                disabled={!camposHabilitados}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                    </LocalizationProvider>   
                                </Grid>
                            </Grid>
                        </Box>   
                    </FormControl>
                    
                    <Stack direction="row">
                        <Button
                            variant="outlined"
                            startIcon={<DoubleArrowIcon />}
                            size="medium" 
                            color="secondary"
                            onClick={handleConsultar}
                            disabled={loading}>
                            CONSULTAR
                        </Button>
                    </Stack>
                    
                    {error && <Typography color="error">{error}</Typography>}
                    
                    <Box mb={2} spacing={1} style={{ margin: '1px' }}>
                        <br /> 
                        <Consulta data={consultaData} loading={loading} error={error}/>
                    </Box> 
                </Grid>
            </Grid> 
        </Box>
    );
}

export default Pagos;
