import React from 'react'
import HomeIcon from "@material-ui/icons/Home";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import { BsHeart } from "react-icons/bs";
import Button from "@material-ui/core/Button";
export default function TabControl({isAction,  onLight, showSelected }) {
  
    return (
        <div className="tabControl">
            <div>
                <Button
                    variant="contained"
                    color="secondary"
                    className="follow_Comics"
              
                >
                    <HomeIcon></HomeIcon>&#160;Trang Chủ
                </Button>
            </div>
            <div>
                <Button
                    variant="contained"
                    color="secondary"
                    className="follow_Comics"
                >
                    <ErrorOutlineIcon></ErrorOutlineIcon>&#160;Báo lỗi
                </Button>
            </div>
            <div className="select_Chap">
                {showSelected()}
            </div>
            <div>
                <Button
                    variant="contained"
                    color="secondary"
                    className="follow_Comics"
                >
                    <BsHeart></BsHeart>&#160;Theo dõi
            </Button>
            </div>
            <div>
                {
                    isAction ? <Button
                        variant="contained"
                        color="secondary"
                        className="follow_Comics"
                        onClick={() => { onLight() }}
                    >
                        <EmojiObjectsIcon></EmojiObjectsIcon>&#160;Tắt Đèn
                                 </Button>
                        :
                        <Button
                            variant="contained"
                            color="secondary"
                            className="follow_Comics"
                            onClick={() => { onLight() }}
                        >
                            <EmojiObjectsIcon></EmojiObjectsIcon>&#160;Bật Đèn
                                    </Button>
                }
            </div>
        </div>
    )
}
