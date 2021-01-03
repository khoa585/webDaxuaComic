import React, { useEffect, useState } from "react";
import Item from "./Item";

export default function ViewComics() {
  const [list, setList] = useState([]);
  const handleDelete = (id) => {
      let newHistory = list.filter((item)=>{
          return item._id != id ;
      })
      localStorage.setItem("truyenmoi_history",JSON.stringify(newHistory));
      setList(newHistory);
  };
  useEffect(() => {
    const history = localStorage.getItem("truyenmoi_history");
    if (history) {
      let data = JSON.parse(history);
      setList(data);
    }
  }, []);

  return (
    <div className="visited-comics">
      <div className="visited_History">
        <h6>Lịch sử đọc truyện</h6>
        <span className="view-all">Xem tất cả</span>
      </div>
      <div className="list-History-Store">
        {
          list.length != 0 ? list.reverse().slice(0,5).map((item, index) => {
            return <Item item={item} key={item._id} deleteItem={handleDelete} />;
          }) : <div></div>
        }
      </div>
    </div>
  );
}
