import marker from '../marker.png'
import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Icon } from 'leaflet'
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import 'leaflet/dist/leaflet.css';
import './CSS Styles/DealersMap.css'
import 'swiper/css';
import { oswald } from '@/app/ui/fonts'

export type Marker={
  
  Name?: string, 
  address?: string,
  phone?: string,
  instagramm?: string,
  website?:  string,
  coordinates: [number,number],
  email?: string
}

export type Googlemapprops={
  zoom: number,
  markers: Marker[],
  coordinates: [number,number]
}

export default function GoogleMap(props: Googlemapprops) {

  
  const myIcon = new Icon({
    iconUrl: marker.src,
    iconSize: [64, 64],
  })

  return <>
    
      <div className="dealers-map-block">
        <MapContainer id="dealers" className="dealers-map-block" center={props.coordinates} zoom={props.zoom} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {props.markers.map((item,itemid) =>
            < Marker key={itemid} position={item.coordinates} icon={myIcon}>
              
              <Popup className='custom-popup'>
                <div className="point-block">
                  <div className="point-block-img"></div>
                  <div className="point-block-content">
                    <div className={`${oswald.className} title`}>{item.Name}</div>
                    <div className="address">{item.address}</div>
                    <div className="contact-information">
                      <div className="title">Контактная информация:</div>
                      <div className="contact-information-item">
                        <div className="left">Телефон:</div>
                        <div className="right">
                          <a href={item.phone}>{item.phone}</a>
                        </div>
                      </div>
                      <div className="contact-information-item">
                        <div className="left">Instagram:</div>
                        <div className="right">
                          <a href={item.instagramm}>{item.instagramm}</a>
                        </div>
                      </div>
                      <div className="contact-information-item">
                        <div className="left">Веб-сайт:</div>
                        <div className="right">
                          <a href={item.website}>{item.website}</a>
                        </div>
                      </div>
                      <div className="contact-information-item">
                        <div className="left">E-mail:</div>
                        <div className="right">
                          <a href={item.email}>{item.email}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          )}

        </MapContainer>
      </div >
  </>

}
