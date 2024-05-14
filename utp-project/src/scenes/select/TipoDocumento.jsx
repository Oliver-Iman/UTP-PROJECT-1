import React, { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Axios from 'axios';

function SelectPais({ selectedPais, setSelectedPais }){
    const [dataPais, setDataPais] = useState([]); 

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await Axios.get(`http://4.236.145.80/pais/`, {
                headers: {
                    "Content-Type": "application/json",
                    "accept": "*/*",
                },
            });
    
            if (response.status === 200) {
                const responseData = response.data;
                setDataPais(responseData);
              } else {
                throw new Error('Error al obtener los datos de la API');
              }
            } catch (error) {
              console.error(error);
            }
          };
        fetchData();
      }, []);

      const handlePaisSelection = (id) => {
        setSelectedPais(id);
        console.log('ID del país seleccionado:', id); //Agrega esta línea para imprimir el ID en la consola
    };


    return(
        <div>
          <Box mb={2}>
            <FormControl fullWidth>
              <InputLabel>Pais</InputLabel>
              <Select
                value={selectedPais}
                onChange={(e) => handlePaisSelection(e.target.value)}
              >
                {dataPais.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.nomPais}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
    );

}
export default SelectPais;