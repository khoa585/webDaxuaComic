import React from 'react';
import { Link, Route, useHistory } from "react-router-dom";
import { Breadcrumb, Table, Space, Button } from 'antd';
import { getlistAllComic ,deleteComicById} from '../../../api/comic'
import { v4 as uuid4 } from 'uuid';
import { toast } from 'react-toastify';
export default function GetCarts() {
    const [data, setData] = React.useState([])
    let history = useHistory();
    React.useEffect(() => {
        (async () => {
            const result = await getlistAllComic();
            if (result?.data?.status === "success") {
                setData({
                    "data": result?.data?.data,
                    "numberOfResult": result?.data?.numberOfResult
                })
            }
        })()
    }, [])

    const onDeleteNews = async (id) => {
        const result = await deleteComicById(id)
        if(result.data.status === "success"){
            toast.success("Xóa thành công");
            window.location.reload()
        }
    }



    const columns = [
        {
            title: 'Tiêu Đề',
            dataIndex: 'name',
            key: `acvd${uuid4()}`,
            width: '20%'
        },
        {
            title: 'Hình Ảnh',
            key: `acvd${uuid4()}`,
            render: (data) => {
                return (
                    <img src={data.image} style={{ width: "20%" }}></img>
                )
            },
            width: '20%'
        },
        {
            title: 'Giá',
            key: `acvd${uuid4()}`,
            dataIndex: 'price',
            width: '20%'
        },
        {
            title: 'Tình Trạng',
            key: `acvd${uuid4()}`,
            width: '20%',
            render: (data) => {
                return (
                        <span onClick={() => onDeleteNews(data._id)}>{data.rent ? "Cho thuê" : "Miễn Phí"}</span>
                )
            }
        },
        {
            title: 'Hành Động',
            key: `aacd${uuid4()}`,
            width: '20%',
            render: (data) => {
                return (
                    <Space>
                        <Button onClick={() => onDeleteNews(data._id)}>Xóa</Button>
                    </Space>
                )
            }
        },

    ];
    return (
        <div>
            <Breadcrumb style={{ marginBottom: 30 }}>
                <Breadcrumb.Item>
                    Admin
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    Danh Sách Truyện
                </Breadcrumb.Item>
            </Breadcrumb>
            <Table dataSource={data.data} columns={columns} pagination={true} rowKey='id' />
        </div>
    )
}