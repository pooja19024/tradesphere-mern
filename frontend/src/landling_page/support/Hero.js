import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div
        className="d-flex justify-content-between align-items-center px-5 pt-4"
        id="supportWrapper"
      >
        <h5 className="mb-0" style={{ fontSize: "30px",}}>Support Portal</h5>
        <a href="" className="text-white text-decoration-underline"  style={{ fontSize: "20px",}}>
          Track Tickets
        </a>
      </div>
      <div className="row p-5 my-4">
        <div className="col-6 p-3">
          <h1
            style={{ fontSize: "23px", fontWeight: "400", lineHeight: "1.5" }}
          >
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            placeholder="Eg. how do I activate F&O"
            style={{
              width: "85%",
              padding: "12px",
              borderRadius: "6px",
              border: "none",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          />
          <br />
         <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
  <a href="">Track account opening</a>
  <a href="">Track segment activation</a>
  <a href="">Intraday margins</a>
  <a href="">Kite user manual</a>
</div>
        </div>
        <div className="col-6 p-3" style={{ marginTop: "10px" }}>
          <h4  style={{ fontWeight: "500" }}>Featured</h4>
          <ol style={{ marginTop: "15px", fontSize: "14px"}}>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
