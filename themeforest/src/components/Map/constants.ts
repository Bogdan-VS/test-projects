import { defaultTheme } from './mapTheme'

export const API_KEY = process.env.REACT_APP_API_KEY

export const containerStyle = {
  width: '100%',
  height: '460px',
}

export const location = {
  london: { lat: 51.509865, lng: -0.118092 },
  brussels: { lat: 50.8505, lng: 4.3488 },
  amsterdam: { lat: 52.377956, lng: 4.89707 },
  center: { lat: 51.5, lng: 3 },
}

export const mapOptions = {
  disableDefaultUI: true,
  overviewMapControl: false,
  panControl: true,
  zoomControl: true,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  styles: defaultTheme,
}
