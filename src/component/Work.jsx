import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

function Work() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center text-uppercase fw-bold">my work</h1>
        <div className="container-fluid mb-5 ">
          <div className="row">
            <div className="col-10 mx-auto my-3 ">
              <div className="row  gy-4">
                {Sdata.map((x, i) => {
                  return (
                    <Card
                      key={i}
                      imgsrc={x.imgsrc}
                      title={x.title}
                      // des={x.des}
                      href={x.href}
                      moreDes={x.moreDes}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
