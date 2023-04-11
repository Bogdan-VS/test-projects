import React, { useCallback, useRef } from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api'

import { API_KEY, location, mapOptions, containerStyle } from './constants'
import { TitleH3Styled } from '@/theme/styled'

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  })

  const mapRef = useRef<google.maps.Map | null>(null)

  const onLoad = React.useCallback((map: google.maps.Map) => {
    mapRef.current = map
  }, [])

  const onUnmount = useCallback(() => {
    mapRef.current = null
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location.center}
      zoom={7}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={mapOptions}
    >
      <MarkerF
        position={location.london}
        icon='http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
      />
      <MarkerF
        position={location.brussels}
        icon='http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
      />
      <MarkerF
        position={location.amsterdam}
        icon='http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
      />
    </GoogleMap>
  ) : (
    <TitleH3Styled>Loading...</TitleH3Styled>
  )
}

export default React.memo(Map)
