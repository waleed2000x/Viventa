export default function HomeContent() {
  return (
    <div className="home-content">
      <div className="home-center">
        <div
          className="home-shelf-a"
          data-aos="zoom-out"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="home-shelf-a-text">
            <img src="https://images.unsplash.com/photo-1654514433918-a3cfa5878b25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY2fHxtb2RlbCUyMGJsYWNrfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" />
            <p className="brand-name"> Viventa</p>
            <div className="brand-text">
              <p>Infinite Elegance</p>
              <span> Infinite Confidence</span>
            </div>
          </div>
        </div>
        <div
          className="home-shelf-b"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <img src="https://images.unsplash.com/photo-1635583476697-2802d6ca7136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vZGVsaW5nJTIwbWVufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60" />
          <p data-aos="fade-up" data-aos-duration="2000" className="brand-name">
            Elevate Your
          </p>
          <span data-aos="fade-down" data-aos-duration="2000">
            Masculine Charm
          </span>
          <h4>Shop Men</h4>
        </div>
        <div className="home-shelf-c">c</div>
      </div>
    </div>
  );
}
