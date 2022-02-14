import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import { IUser } from "../../interfaces";
import styles from "./YandexMap.module.css";

const YandexMap: React.FC<IUser> = ({ address: { geo } }) => {
  return (
    <section className={styles.map}>
      <h2>На карте</h2>
      <YMaps>
        <div style={{minHeight: '400px'}}>
          <Map
            width="100%"
            height="400px"
            defaultState={{
              center: [Number(geo.lat), Number(geo.lng)],
              zoom: 4,
            }}
          >
            <Placemark geometry={[Number(geo.lat), Number(geo.lng)]} />
          </Map>
        </div>
      </YMaps>
    </section>
  );
};

export default YandexMap;
