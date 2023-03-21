import "../Style/LeftComponent.css";

import moment from "moment/moment";



export default function LeftComponent({ setGetImage, detail }) {
    console.log(detail);
    setGetImage(detail.weather[0].main);
    return (
        <div className="left">
            <div className="weatherConditionLogo">
                <img id="wicon" src={`https://openweathermap.org/img/wn/${detail.weather[0].icon}@2x.png`} alt="Weather icon" />
                <div style={{ marginTop: '6px' }}>{detail.weather[0].main.toUpperCase()}</div>
            </div>
            <div className="middlecomponent">
                <div>
                    <p style={{ fontSize: 100, lineHeight: 0, padding: 0 }}>{Math.floor(detail.main.temp - 273.15)}°</p>
                </div>
                <div className="paraDiv">

                    <div style={{ margin: "0 16px" }}>
                        <div style={{ fontSize: 50 }}>{detail.name}</div>
                        <div>{moment().format('lll')}</div>

                    </div>
                </div>

            </div>
        </div>
    )
}