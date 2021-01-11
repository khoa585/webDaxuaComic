import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Container, Col, Row } from "react-bootstrap";
import BackToTop from "../Comon/BackToTop/BackToTop";
import Header from "../Header/Header";
import './style.scss'
export default function ViewComics() {
    const [list, setList] = useState([]);
    const handleDelete = (id) => {
        let newHistory = list.filter((item) => {
            return item._id != id;
        })
        localStorage.setItem("truyenmoi_history", JSON.stringify(newHistory));
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
        <div className="history_wrapw">
            <Header />
            <div className="distant"></div>
            <Container style={{display:'flex'}}>
                {
                    list.length != 0 ? list.reverse().slice(0, 5).map((item, index) => {
                        return (
                            <Item item={item} key={item._id} deleteItem={handleDelete} />
                        );
                    }) : <span>Trống........</span>
                }

            </Container>
            <div className="distant"></div>
            <BackToTop></BackToTop>
        </div>
    );
}
