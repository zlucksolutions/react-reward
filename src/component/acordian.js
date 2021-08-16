import React from "react";
import { Table } from 'react-bootstrap';

const result = (props) => {
    return (
        <div className="zl_custom_table">
            {props.data.map((item, i) => {
                const reward = item.date.reduce((sum, cv) => sum + cv.reward, 0);
                return (
                    <div className="container zl_custom_table_content" key={i}>
                        <h2 className="text-start">{item.name}</h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Month</th>
                                    <th>Amount</th>
                                    <th>Reward</th>
                                </tr>
                            </thead>
                            <tbody>
                                {item.date.map(opt =>
                                    <tr key={opt.date}>
                                        <td>{opt.date}</td>
                                        <td>{`$ ${opt.amt}`}</td>
                                        <td>{opt.reward}</td>
                                    </tr>
                                )}
                                <tr>
                                    <td colSpan="2">Total Reward Point : </td>
                                    <td>{reward}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                );
            })}
        </div>
    );
}

export default result;