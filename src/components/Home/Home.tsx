import React from "react";
import saadi from "../../assets/img/saadi.jpg";
const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "black",
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
        }}
      />
      <div style={{ color: "white" }}>سعدیا مرد نکونام نمیرد هرگز</div>
    </div>
  );
};

export default Home;
