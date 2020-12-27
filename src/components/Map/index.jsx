import React, {useState} from 'react';
import ReactMapGL, { Marker } from 'react-map-gl'
import styled from 'styled-components'
import loc_img from '../../assets/loc.svg'

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  display:flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 15px;
`;

function MyMap({local}) {

  const [viewport, setViewport] = useState({
    latitude: -12.47008216554,
    longitude: -50.2430936564,
    width: '70vw',
    height: '55vh',
    zoom: 2
  })

  const [viewmarker, setViewmarker] = useState({
    latitude: -12.47008216554,
    longitude: -50.2430936564
  })

  return(
    <StyledDiv>
      <ReactMapGL
        {...viewport}
          mapboxApiAccessToken="pk.eyJ1Ijoic29uZXJvIiwiYSI6ImNraXl3c3F1NjFveG4yc3BmMW9xcG1nZjIifQ.XS3gy89M6uPHYNI8TslaOw"
          onViewportChange={setViewport}
          mapStyle="mapbox://styles/sonero/ckj1lyxwt0y5019p8bmgn205w"
          onClick={(click) => {
            setViewmarker({
              latitude: click.lngLat[1],
              longitude: click.lngLat[0],
            })

            local(click.lngLat[1], click.lngLat[0]); //salvando o local
          }
        }
        >

        <Marker
          latitude={viewmarker.latitude}
          longitude={viewmarker.longitude} 
        >
        <img src={loc_img} alt="." height="15px"/>
        </Marker>
      </ReactMapGL>
    </StyledDiv>
  )
}

export default MyMap;