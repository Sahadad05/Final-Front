import React from 'react'
import {Table} from 'antd'

const GuestListDisplay = ({columns, data}) =>{
  return(
    <div>
      <h2>
        Lista de Invitados
      </h2>
      <Table
        columns={columns}
        dataSource={data}
        />
    </div>
  )
}

export default GuestListDisplay