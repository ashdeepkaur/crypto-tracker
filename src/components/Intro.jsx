import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';

const Intro = ({ handleShowCoinsTable }) => {
  return (
    <Grid
      container
      style={{ height: '100vh', padding: 50, flexWrap: 'nowrap' }}
      direction='column'
    >
      <Grid item>
        <Typography variant='h5'>
          Cryptocurrency is a type of digital or virtual currency that uses
          cryptography for security. Unlike traditional currencies issued by
          governments and central banks, cryptocurrencies operate on
          decentralized networks based on blockchain technology. Bitcoin,
          created in 2009, was the first decentralized cryptocurrency, and since
          then, numerous others have emerged. These digital assets enable
          secure, peer-to-peer transactions and have gained popularity for their
          potential to offer financial inclusion, transparency, and autonomy
          from traditional banking systems.
        </Typography>
      </Grid>

      <Grid item style={{ marginTop: 50 }}>
        <Grid
          container
          justifyContent='space-around'
          spacing={20}
          width={'100%'}
        >
          <Grid item>
            <img alt='image1' src='img1.jpeg' height={400} width={400}></img>
          </Grid>
          <Grid item style={{ alignSelf: 'end' }}>
            <img alt='image2' src='img2.jpeg' height={400} width={400}></img>
          </Grid>
          <Grid item>
            <img alt='image3' src='img3.jpeg' height={400} width={400}></img>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ textAlign: 'center', marginTop: 50 }}>
        <Button
          style={{ backgroundColor: '#ADD8E6' }}
          onClick={handleShowCoinsTable}
        >
          <Typography style={{ fontSize: '20px' }}>Next</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Intro;
