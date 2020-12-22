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
    latitude: -8.0632377,
    longitude: -34.8782602,
    width: '70vw',
    height: '60vh',
    zoom: 10
  })

  const [viewmarker, setViewmarker] = useState({
    latitude: -8.0632377000000,
    longitude: -34.878260200000
  })

  return(
    <StyledDiv>
      <ReactMapGL
        {...viewport}
          mapboxApiAccessToken="pk.eyJ1Ijoic29uZXJvIiwiYSI6ImNraXl3dzd5ZDJrM2MycnA0bHQ3ZHQ2eXEifQ.SoB4ILfJ1RROcsYNqu1d2g"
          onViewportChange={(newviewpport) => {setViewport(newviewpport)}}

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