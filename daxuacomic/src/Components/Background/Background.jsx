import React from "react";
import { Container } from "react-bootstrap";
import "./style.scss";

export default React.memo(function Background() {
  const swap = () => {
    const stack = document.querySelector(".stack");
    const card = document.querySelector(".card:last-child");
    card.style.animation = "swap 700ms forwards";
    setTimeout(() => {
      card.style.animation = "";
      stack.prepend(card);
    }, 700);
  };

  // React.useEffect(() => {
  //   const set = () => {
  //     setInterval(() => {
  //       swap();
  //     }, 1000);
  //   }
  //   set()
  //   return () => set();
  // }, [])

  return (
    <div className="container_Slide">
      <Container>
        <div className="stack">
          <div onClick={swap} className="card ">
            <img className="img-fluid" src="http://cn.e.pic.mangatoon.mobi/homepage-banners/466-78fb.jpg" />
          </div>
          <div onClick={swap} className="card ">
            <img className="img-fluid" src="http://cn.e.pic.mangatoon.mobi/homepage-banners/468-c14f.jpg" />
          </div>
          <div onClick={swap} className="card ">
            <img className="img-fluid" src="http://cn.e.pic.mangatoon.mobi/homepage-banners/465-75b3.jpg" />
          </div>
          <div onClick={swap} className="card ">
            <img className="img-fluid" src="http://cn.e.pic.mangatoon.mobi/homepage-banners/469-1d86.jpg" />
          </div>
        </div>
      </Container>
    </div>
  );
})