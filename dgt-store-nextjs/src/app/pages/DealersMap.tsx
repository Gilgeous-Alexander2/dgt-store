import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';
import marker from '../marker.png';
import { Icon } from 'leaflet'
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import 'leaflet/dist/leaflet.css';
import '../CSS Styles/DealersMap.css'


export default function GoogleMap() {

  const Markers = [{
    Name: 'FAMILY WORKS Барнаул', address: 'Шевченко 135, Барнаул', phone: "+7 (923)641-11-44",
    instagramm: 'https://www.instagram.com/fworks_tuning/',
    website: 'https://vk.com/fworks_tuning', coordinates: [53.340076, 83.75845], email: ''
  },

  {
    Name: '8 Mile', address: 'Казахстан, Алматы, ул. Диваева дом 33',
    phone: "8 (778) 888-88-08", instagramm: 'https://www.instagram.com/8milya_autoimperiya/?igshid=1bsiyyrorsfxx',
    website: 'http://8milya.kz/', coordinates: [43.243015, 76.97652], email: '8milya.info@mail.ru'
  },

  {
    Name: 'MORENDI Красноярск', address: 'Красноярск .проспект Котельникова 21Б',
    phone: "+7 (391) 2545-000", instagramm: 'https://www.instagram.com/morendi_krasnoyarsk/?hl=ru',
    website: '', coordinates: [56.047258, 92.839133], email: ''
  },

  {
    Name: 'Morendi Ural', address: 'Екатеринбург, Улица 8 Марта, 14',
    phone: "8 953 822-53-68", instagramm: 'https://instagram.com/morendi_ural?igshid=19o87lj0xqwxl',
    website: '', coordinates: [56.832895, 60.5999], email: ''
  },

  {
    Name: 'Custom Unlimited', address: 'Самара, Кабельная 4к7',
    phone: "+7 846 205-54-54", instagramm: 'https://instagram.com/customunlimited?igshid=1wzd8yrbmfh0c',
    website: '', coordinates: [53.195355, 50.267963], email: ''
  },

  {
    Name: 'Morendi N.Novgorod', address: 'Нижний Новгород, Московское шоссе 105к5',
    phone: "+7 831 235-66-01", instagramm: 'https://instagram.com/morendi.nn?igshid=1kgifz66uhmrm',
    website: '', coordinates: [56.319669, 43.907423], email: ''
  },

  {
    Name: 'MORENDI Центральный офис', address: 'Москва, 2-я Звенигородская ул., 13 строение 18Б',
    phone: "+7 (495) 796-00-96", instagramm: 'https://www.instagram.com/morendi/',
    website: 'https://www.morendi.ru/', coordinates: [55.762728, 37.552301], email: 'support@morendi.ru'
  },

  {
    Name: 'TopArtTuning', address: 'Тверь, Пр-д Стеклопластиков, 5',
    phone: "8-920-152-44-22", instagramm: 'https://instagram.com/toparttuning?igshid=lvvp4t3bpnwi',
    website: '', coordinates: [56.859561, 35.911851], email: 'Topcardetailing@yandex.ru'
  },

  {
    Name: 'bgt.spb', address: 'Санкт-Петербург, ул. Седова, 12',
    phone: "+7 (931) 390-89-98", instagramm: 'https://www.instagram.com/bgt.spb/?hl=ru',
    website: 'https://bgt.spb.ru/', coordinates: [59.902975, 30.39828], email: 'info@bgt.spb.ru'
  },

  {
    Name: 'RE-MARK Studio', address: 'г. Воронеж ул. Солнечная, 23',
    phone: "+7(473)228-54-64", instagramm: 'https://www.instagram.com/remarkstudio/',
    website: 'https://remark-studio.ru/', coordinates: [51.683491, 39.165262], email: ''
  },

  {
    Name: 'TopLevelMotorsport', address: 'Украина, г. Киев, ул. Ракетная, 24 А',
    phone: "+380 67 440 3685", instagramm: 'https://instagram.com/toplevelmotorsport?igshid=1ler5mtglnalx',
    website: 'https://top-level.ua/', coordinates: [50.383344, 30.544256], email: ''
  },

  {
    Name: 'ProTuningCompany ', address: 'Светлая ул., Знаменский',
    phone: "+7 861 298 26 85", instagramm: 'https://www.instagram.com/protuningcompany/',
    website: '', coordinates: [45.059058, 39.144906], email: 'nfo@protuning-company.ru'
  }

  ]

  // const myIcon = new Icon({
  //   iconUrl: marker,
  //   iconSize: [32, 32]
  // })

  return <>
    <div id="dealers" className="dealers aos-init aos-animate">
      <h3 >Наши официальные представители и дилеры</h3>
      <div className="dealers-map-block">
        <MapContainer id="dealers" className="dealers-map-block" center={[55.505, 60.09]} zoom={4} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {Markers.map((item: any) =>
            < Marker position={item.coordinates} /*icon={myIcon}*/>
              <Popup >
                <div className="point-block">
                  <div className="point-block-img"></div>
                  <div className="point-block-content">
                    <div className="title">{item.Name}</div>
                    <div className="address">{item.address}</div>
                    <div className="contact-information">
                      <div className="title">Контактная информация</div>
                      <div className="contact-information-item">
                        <div className="left">Телефон</div>
                        <div className="right">
                          <a href={item.phone}>{item.phone}</a>
                        </div>
                      </div>
                      <div className="contact-information-item">
                        <div className="left">Instagram</div>
                        <div className="right">
                          <a href={item.instagramm}>{item.instagramm}</a>
                        </div>
                      </div>
                      <div className="contact-information-item">
                        <div className="left">Веб-сайт</div>
                        <div className="right">
                          <a href={item.website}>{item.website}</a>
                        </div>
                      </div>
                      <div className="contact-information-item">
                        <div className="left">E-mail</div>
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
    </div>
  </>

}
