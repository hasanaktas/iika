import React from 'react';
import MaterialTable from 'material-table';
const KurumIslemleri = () => {
  return (
    <div style={{ padding: 20 }}>
      <MaterialTable
        actions={[
          {
            icon: 'save',
            tooltip: 'Save User',
            onClick: (event, rowData) => alert('You saved ' + rowData.name),
          },
          {
            icon: 'delete',
            tooltip: 'Delete User',
            onClick: (event, rowData) => console.log('You want to delete ' + rowData.name),
          },
        ]}
        columns={[
          { title: 'Kurum Adi', field: 'kurumAdi' },
          { title: 'Kurulus Yili', field: 'kurulusYili' },
        ]}
        data={[
          { kurumAdi: 'Cinar market', kurulusYili: '2020' },
          { kurumAdi: 'test verisi', kurulusYili: '2010' },
        ]}
        title="Kurumlar"
      />
    </div>
  );
};

export default KurumIslemleri;
