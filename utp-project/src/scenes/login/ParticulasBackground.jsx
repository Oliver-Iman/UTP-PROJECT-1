import React, { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import particulasConfig from './config/Particulas-config';

const ParticulasBackground = () => {
    const particlesInit = useCallback((engine) =>{
        loadFull(engine)
    }, [])

    return (
        <div>
            <Particles
            id="tsparticles"
            options={particulasConfig}
            init={particlesInit}/>
        </div>
    );
};

export default ParticulasBackground;
