import React from "react";
import Header from "../../components/Header/Header";

const Dashboard = () => {
  return (
    <div className="sc-dbhs">
      <Header />
      <div className="dbhs-content">
        <div className="card mb-2">
          <div className="card-image-lg"></div>
        </div>
        <div className="card">
          <div className="card-image-md bg-primary"></div>
        </div>
        <table class="table mt-3">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col" className="fw-400 fz:13">
                Rank/Coin
              </th>
              <th scope="col" className="fw-400 fz:13">
                CoinCap/Occupation
              </th>
              <th scope="col" className="fw-400 fz:13">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
