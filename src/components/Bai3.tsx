export default function Bai3() {
  return (
    <div className="container">
      <div className="row g-4">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="overflow-hidden" style={{ height: "11rem" }}>
              <img
                src="https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/macbook_air_13_m4_2025_xanh_1_16309323fd.jpg"
                alt="MacBook Air"
                className="card-img-top h-100 object-fit-cover"
              />
            </div>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title mb-2">
                MacBook Air{" "}
                <small className="text-muted fw-normal">2018</small>
              </h5>
              <p className="card-text text-muted small">
                The reason I am selling the machine is because it is too much power for what i need
              </p>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <button className="btn btn-primary btn-sm">Xem chi tiết</button>
                <span className="fw-medium text-dark">30.000.000₫</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="overflow-hidden" style={{ height: "11rem" }}>
              <img
                src="https://cdn2.fptshop.com.vn/unsafe/macbook_air_13_m2_midnight_1_35053fbcf9.png"
                alt="MacBook Pro"
                className="card-img-top h-100 object-fit-cover"
              />
            </div>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title mb-2">
                MacBook Pro{" "}
                <small className="text-muted fw-normal">2019</small>
              </h5>
              <p className="card-text text-muted small">
                The reason I am selling the machine is because it is too much power for what i need
              </p>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <button className="btn btn-primary btn-sm">Xem chi tiết</button>
                <span className="fw-medium text-dark">30.000.000₫</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
