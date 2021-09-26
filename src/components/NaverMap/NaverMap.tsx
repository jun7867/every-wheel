import React, { useEffect } from 'react';
import styled from 'styled-components';

const MapFrame = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 80vh;
`;

const NaverMap = () => {
  useEffect(() => {
    const initMap = () => {
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.511337, 127.012084),
        zoom: 13,
      });
      map.setOptions({
        //모든 지도 컨트롤 보이기
        scaleControl: true,
        logoControl: true,
        mapDataControl: true,
        zoomControl: true,
        mapTypeControl: true,
      });
    };
    initMap();
  }, []);

  return (
    <React.Fragment>
      <MapFrame id="map" />
    </React.Fragment>
  );
};

export default NaverMap;
