import React from 'react'
import 'typeface-roboto'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'


const CityInfo = ({city, country}) => {
    return (
        <>
          <Typography variant="h1" color="initial">{city}</Typography>  
          <Typography variant="h1" color="initial">{country}</Typography>  
        </>
    )
}

CityInfo.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired

}

export default CityInfo
