import React,{useEffect,useState} from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { connect, useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import banner from "../../assets/img/banner.jpg";

const slideImages = [
    {
        url: banner,
    },
    {
        url: banner,
    },
];
const Affiliate = () => {
    const [statisticsAffiliate,setStatisticsAffiliate] = useState(
      {
        "downline_active": 10,
        "downline_inactive": 10,
        "frontline_active": 10,
        "frontline_inactive": 10,
        "today_activation_profit": 10,
        "total_activation_profit": 10
      }
    )
    const [directActivation,setDirectActivation] = useState([
      {
        "country": "Canada",
        "email": "user@mail.com",
        "phone": "+123456789",
        "rank": "M3",
        "registration_time": 15642326,
        "total_team": 1,
        "user_id": 1,
        "username": "john"
      }
    ])
    const auth = useSelector((state) => state.auth);
    const getAffiliateStatistics = () => {
        var config = {
            method: "get",
            url: "http://159.223.94.86:3000/strict/affiliate/statistics",
            headers: {
                Authorization: `Bearer ${auth.token}`,
            },
        };

        axios(config)
            .then(function (response) {
                const data = response.data;
                setStatisticsAffiliate(data)
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const getDirectActivation = () => {
      var config = {
          method: "get",
          url: "http://159.223.94.86:3000/strict/affiliate/active-frontlines",
          headers: {
              Authorization: `Bearer ${auth.token}`,
          },
      };

      axios(config)
          .then(function (response) {
              const data = response.data;
              if (data['active_frontlines'] === null){
                setDirectActivation([])
              }else{
                setDirectActivation(data['active_frontlines'])
              }
              
          })
          .catch(function (error) {
              console.log(error);
          });
  };
    const backHistory = () => {
        window.history.back();
    };
    useEffect(()=>{
      getAffiliateStatistics()
      getDirectActivation()
    },[])
    return (
        <div className="sc-dbhs">
            <header className="or-header">
                <button className="back-button me-auto" onClick={backHistory}>
                    <i className="fa-solid fa-angle-left back-icon"></i>
                </button>
                <span className="text-uppercase fw-500 me-auto">Affiliate</span>
            </header>
            <div className="dbhs-content">
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div className="card mb-4 border-none" key={index}>
                            <div className="card-height-lg">
                                <div className="card-image">
                                    <img src={slideImage.url} alt="_banner" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slide>

                <div className="card py-2 card-elm-bordered mb-4">
                    <h2 className="text-card-absolute fz:13 text-uppercase">
                        Activate Profit
                    </h2>
                    <div className="card-body">
                        <div className="box-grid:2 gap:2">
                            <div className="card card-elm-bordered bg-light">
                                <div className="card-body nav flex-column jcc aic">
                                    <h2 className="m-0 fz:10 fw-500 text-center">
                                    {statisticsAffiliate.today_activation_profit}
                                    </h2>
                                    <p className="m-0 fz:10 fw-500 text-center">
                                        Activate Profit Today
                                    </p>
                                </div>
                            </div>
                            <div className="card card-elm-bordered bg-light">
                                <div className="card-body nav flex-column jcc aic">
                                    <h2 className="m-0 fz:10 fw-500 text-center">
                                    {statisticsAffiliate.total_activation_profit}
                                    </h2>
                                    <p className="m-0 fz:10 fw-500 text-center">
                                        Activate Total Profit
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card py-2 card-elm-bordered mb-4">
                    <h2 className="text-card-absolute fz:13 text-uppercase">
                        Direct Refferal
                    </h2>
                    <div className="card-body">
                        <div className="box-grid:2 gap:2">
                            <div className="card card-elm-bordered bg-light">
                                <div className="card-body nav flex-column jcc aic">
                                    <h2 className="m-0 fz:10 fw-500 text-center">
                                    {statisticsAffiliate.frontline_inactive}
                                    </h2>
                                    <p className="m-0 fz:10 fw-500 text-center">
                                        Not Activated Yet
                                    </p>
                                </div>
                            </div>
                            <div className="card card-elm-bordered bg-light">
                                <div className="card-body nav flex-column jcc aic">
                                    <h2 className="m-0 fz:10 fw-500 text-center">
                                        {statisticsAffiliate.frontline_active}
                                    </h2>
                                    <p className="m-0 fz:10 fw-500 text-center">
                                        Activated
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card py-2 card-elm-bordered mb-4">
                    <h2 className="text-card-absolute fz:13 text-uppercase">
                        Total Team
                    </h2>
                    <div className="card-body">
                        <div className="box-grid:2 gap:2">
                            <div className="card card-elm-bordered bg-light">
                                <div className="card-body nav flex-column jcc aic">
                                    <h2 className="m-0 fz:10 fw-500 text-center">
                                    {statisticsAffiliate.downline_inactive}
                                    </h2>
                                    <p className="m-0 fz:10 fw-500 text-center">
                                        Not Activated Yet
                                    </p>
                                </div>
                            </div>
                            <div className="card card-elm-bordered bg-light">
                                <div className="card-body nav flex-column jcc aic">
                                    <h2 className="m-0 fz:10 fw-500 text-center">
                                    {statisticsAffiliate.downline_active}
                                    </h2>
                                    <p className="m-0 fz:10 fw-500 text-center">
                                        Activated
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card py-2 card-elm-bordered mb-4">
                    <h2 className="text-card-absolute fz:13 text-uppercase">
                        Direct Activation
                    </h2>
                    <div className="card-body">
                        <div className="card card-elm-bordered bg-light">
                            <div className="card-body p-2">
                                <div className="gap:2">
                                    <div className="nav flex-column aic jcc">
                                      <table style={{width:"100%",textAlign:'center'}}>
                                        <thead>
                                          <th className="m-0 fz:9 fw-600 text-uppercase">Grade</th>
                                          <th className="m-0 fz:9 fw-600 text-uppercase">Username</th>
                                          <th className="m-0 fz:9 fw-600 text-uppercase">Total Team</th>
                                          <th className="m-0 fz:9 fw-600 text-uppercase">Registration Time</th>
                                        </thead>
                                        <tbody>
                                          {
                                            directActivation.map((key,index) => (
                                              
                                              <tr>
                                                <td className="m-0 fz:9 fw-600 text-uppercase">{key.rank}</td>
                                                <td className="m-0 fz:9 fw-600 text-uppercase">{key.username}</td>
                                                <td className="m-0 fz:9 fw-600 text-uppercase">{key.total_team}</td>
                                                <td className="m-0 fz:9 fw-600 text-uppercase">{new Date(key.registration_time).toLocaleDateString("en-US")}</td>
                                              </tr>
                                            ))
                                          }
                                        </tbody>
                                      </table>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect()(Affiliate);
