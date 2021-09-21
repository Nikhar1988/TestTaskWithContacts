import { Table } from 'antd';
import { FC, useEffect } from 'react';
import { useActions } from '../hooks/useActions'
import { useSelectorType } from '../hooks/useTypedSelector';


const TableContacts:FC = () => {
    const users = useSelectorType(state => state.users)      
     
    const {fetchUsers} = useActions()
       
       useEffect(()=> {
          fetchUsers()
    },[])

    return (
        <Table dataSource={users}>
            <Table.Column title="№" dataIndex="key" key="key" />
            <Table.Column title="Name" dataIndex="name" key="key" />
            <Table.Column title="Email" dataIndex="email" key="key" />
            <Table.Column title="Phone" dataIndex="phone" key="key" />
            <Table.Column title="Address" dataIndex="address" key="key" />
            
    </Table>
    )
}


export default TableContacts;