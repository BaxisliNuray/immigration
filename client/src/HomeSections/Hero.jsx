import { Container } from '@mui/system'
import React from 'react'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

function Hero() {
    return (

        <Grid container spacing={2} style={{ height: '100vh', backgroundColor: '#f6214b' }}>
            <Grid style={{ display: 'flex', height: '100%', alignItems: 'center', width: '100%', justifyContent: 'center' }} item lg={6}>
                <div>
                    <p style={{ color: 'white', }}>PROCESS VISA WITHOUT WITHINM HOURS</p>
                    <h1 style={{ fontSize: '60px', color: 'white', fontFamily: 'sans-serif', paddingTop: '10px' }}>Immigrations & <br />
                        Visa Consultation</h1>
                    <Button style={{ textDecoration: 'none', border: '1px solid white', color: 'white', padding: '5px 20px', marginTop: '20px' }}>Home Consultancy </Button>
                </div>

            </Grid>
            <Grid item lg={6} height={'100%'} style={{ display: 'flex', alignItems: 'end', justifyContent: 'end' }}>
                <img style={{ width: '90%' }} src="https://preview.colorlib.com/theme/immigration/img/header-img.png" alt="img" />
            </Grid>

        </Grid>


    )
}
export default Hero
