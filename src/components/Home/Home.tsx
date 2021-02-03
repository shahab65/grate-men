import { Data } from '../../constants/data';
const Home = () => {
  const content = Data[0]
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "grey",
        height: "100%",
        position: "fixed",
      }}
    >
      <img
        src={content.img}
        alt="saadi"
        style={{
          borderRadius: "50%",
          width: "50%",
          height: "auto",
          marginTop: "20px",
        }}
      />
      <div style={{
        margin: '0 auto',
      }}>
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            direction:'rtl'
          }}
        >
          <div>{content.m1}</div>
          <div style={{width:"20px"}}></div>
          <div>{content.m2}</div>
        </div>
      </div>
      <div>{content.eng}</div>
    </div>
  );
};

export default Home;
