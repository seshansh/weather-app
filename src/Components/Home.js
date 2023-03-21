import "../Style/Home.css"
import RightComponents from "./RightComponents";
import LeftComponent from "./LeftComponent";
import axios from "axios";
import { useEffect, useState } from "react";
function Home({ setGetImage, variableChange, setVariableChange }) {
    const [data, setData] = useState(null);
    const [search, setSearch] = useState("delhi");





    useEffect(() => {
        const getData = async () => {
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ddf7b73c9dabb31f70c91c29fa267797`).then(res => {
                setData(res.data);

            }).catch((err) => {
                if (err.response.status === 404) {
                    alert('please enter a valid city name');
                }
                if (err.response.status === 400) {
                    alert('please enter a valid cityname')
                }
            })
        }
        getData();
    }, [search])

    if (!data) return (
        <div className="home"></div>
    )

    return (
        <div className="home">
            <LeftComponent setGetImage={setGetImage} detail={data} />
            <RightComponents detail={data} setVariableChange={setVariableChange} variableChange={variableChange} setSearch={setSearch} />
        </div>
    )
}

export default Home;