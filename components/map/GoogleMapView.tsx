"use client"

import { GoogleMap, LoadScript } from '@react-google-maps/api'

const GoogleMapView = () => {
  return (
    <div>
        <LoadScript            
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ""}
>

        </LoadScript>
    </div>
  )
}

export default GoogleMapView