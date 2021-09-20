import { Table, Tag, Space } from 'antd';
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
            <Table.Column title="№" dataIndex="id" key="id" />
            <Table.Column title="Name" dataIndex="name" key="id" />
            <Table.Column title="Email" dataIndex="email" key="id" />
            <Table.Column title="Phone" dataIndex="phone" key="id" />
            <Table.Column title="Address" dataIndex="address" key="id" />
            
    </Table>
    )
}


export default TableContacts;