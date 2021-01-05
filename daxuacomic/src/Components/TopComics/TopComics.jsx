import React from "react";
import { getListHotComics } from '../../api/comic'
import { BsFillEyeFill } from "react-icons/bs";
export default React.memo(function TopComics() {
  const [tab, setTab] = React.useState(1);
  const [comics, setComics] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const result = await getListHotComics({ type: tab });
      if (result?.data?.status === "success") {
        setComics(result?.data?.data)
      }
    })()
    return () => {
      setComics([])
    }
  }, [tab])

  const setTabNav = (task) => {
    setTab(task);
  };

  const numberOfCcapacitors = (i) => {
    if (i < 10) return "0" + i;
    else return i;
  };


  return (
    <>
      <div className="tab_Nav">
        <li
          className={`nav_Item ${tab === 1 ? "active" : ""}`}
          onClick={() => setTabNav(1)}
        >
          <span>Top Tháng</span>
        </li>
        <li
          className={`nav_Item ${tab === 2 ? "active" : ""}`}
          onClick={() => setTabNav(2)}
        >
          <span>Top Tuần</span>
        </li>
        <li
          className={`nav_Item ${tab === 3 ? "active" : ""}`}
          onClick={() => setTabNav(3)}
        >
          <span>Top Ngày</span>
        </li>
      </div>
      <div className="tab-pane">
        <div id="topComics">
          <div className="list-unstyled">
            {comics.map((comic, index) => {
              return (
                <li className="list-style-comics" key={comic._id}>
                  <div style={{
                    width: '20%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                  }}>
                    <span
                      className={`txt-rank fn-order ${index === 0
                        ? "top_One"
                        : index === 1
                          ? "top_Two"
                          : index === 2
                            ? "top_Three"
                            : ""
                        }`}
                    >
                      {numberOfCcapacitors(index + 1)}
                    </span>
                  </div>
                  <div className="t-item" style={{
                    width: '80%'
                  }}>
                    <div className="list-Stote-comic">
                      <div style={{ width: '30%', height: 80 }}>
                        <span className="thumb-comic" title="">
                          <img
                            className="img-fluid"
                            src={comic.image}
                            alt={comic.name}
                          />
                        </span>
                      </div>
                      <div className="listStote" style={{ width: '70%' }}>
                        <h6 className="title-comic">{comic.name}</h6>
                        <p className="chapter-comic">
                          <span>Đọc tiếp</span>
                          <span className="view-pull-right">
                            <BsFillEyeFill></BsFillEyeFill>{" "}
                            {comic.views}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
})
