import React from "react";
import saadi from "../../assets/img/saadi.jpg";
const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "grey",
        height: "100%",
        position: "fixed",
        // backgroundImage: `url(${saadi})`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "contain",
        // borderRadius: "50%",
        // backgroundPosition: "center",
      }}
    >
      <img
        src={saadi}
        alt="saadi"
        style={{
          borderRadius: "50%",
          width: "50%",
          height: "auto",
          marginTop:"20px"
        }}
      />
      <div style={{ color: "white" }}>
        سعدیا مرد نکونام نمیرد هرگز مرده آنست که نامش به نکویی نبرند
      </div>
      <div>
        saadi, man with good reputation never dies, dead man is a person who people don't mention him/her as a good person
      </div>
    </div>
  );
};

export default Home;
