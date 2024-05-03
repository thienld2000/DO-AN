import React from 'react'

const TableOrder = (props) => {
    const { orders, searchResults } = props;
    const formatDateTime = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        const formattedDateTime = `${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()} ${dateTime.getHours()}:${dateTime.getMinutes()}`;
        return formattedDateTime;
    };
    return (
        <>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ và tên</th>
                        <th>Phone</th>
                        <th>Set Menu</th>
                        <th>Thời gian đặt bàn</th>
                        <th>Số lượng khách</th>
                        <th>Ghi chú</th>
                        <th>Bàn số</th>
                        <th>Tầng</th>
                        <th>Buổi</th>
                        <th>Xác nhận</th>
                    </tr>
                </thead>
                <tbody>
                    {(searchResults && searchResults.length > 0 ? searchResults : orders).map((item, itemIndex) => (
                        <tr key={item._id}>
                
                            <td>{itemIndex + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.setMenu}</td>
                            <td>{formatDateTime(item.datetime)}</td>
                            <td>{item.guests}</td>
                            <td>{item.note}</td>
                            <td>{item.table.name }</td> 
                            <td>{item.table.floor }</td> 
                            <td>{item.timeOfDay }</td>
                            <td>{item.isConfirmed ? 'Đã xác thực' : 'Chưa xác thực'}</td> 
                             
                            <td>
                                <button className="btn btn-primary me-2" onClick={() => props.handleClickUpdate(item)}><i className="bi bi-pencil"></i></button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => props.handleDelItem(item)}><i className="bi bi-trash"></i></button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    )
}

export default TableOrder