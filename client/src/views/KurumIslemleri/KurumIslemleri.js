import React, { useState, useEffect } from 'react'
import MUIDataTable from 'mui-datatables'
import axios from 'utils/api'
import CustomToolbar from './CustomToolbar'
import CustomToolbarSelect from './CustomToolbarSelect'
const KurumIslemleri = () => {
  const [kurumlar, setKurumlar] = useState([])

  useEffect(() => {
    kurumlariGetir()
  }, [])

  function kurumSil(id) {
    axios.delete('tanim/kurum', { params: { id: id } }).then(() => kurumlariGetir())
  }

  function kurumlariGetir() {
    axios
      .get('tanim/kurum-liste')
      .then(({ data }) => {
        console.log('Kurumlar Basariyla Getirildi')
        console.log(data.data)
        setKurumlar(data.data)
      })
      .catch(err => {
        console.log(err.response.data.hata)
      })
  }

  function kurumEkleVeyaDuzenle(item) {
    const func = item.id ? axios.put : axios.post
    func('tanim/kurum', item)
      .then(({ data }) => {
        kurumlariGetir()
      })
      .catch(err => {
        console.log(err.response.data.hata)
      })
  }

  return (
    <div>
      <MUIDataTable
        columns={[
          {
            label: 'ID',
            name: 'id',
            options: {
              filter: false,
              sortDirection: 'asc',
            },
          },
          {
            label: 'Kurum Adı',
            name: 'adi',
            options: {
              filterType: 'textField',
            },
          },
        ]}
        data={kurumlar}
        options={{
          sortFilterList: false,
          elevation: 1,
          onRowsDelete: rowsDeleted => {
            const id = kurumlar[rowsDeleted.data[0].dataIndex].id
            kurumSil(id)
            return false
          },
          customToolbarSelect: (selectedRows, displayData, setSelectedRows) => (
            <CustomToolbarSelect
              deleteRow={() => {
                const id = kurumlar[selectedRows.data[0].dataIndex].id
                kurumSil(id)
              }}
              displayData={displayData}
              kurumEkleVeyaDuzenle={kurumEkleVeyaDuzenle}
              seciliKurum={kurumlar[selectedRows.data[0].dataIndex]}
              selectedRows={selectedRows}
              setSelectedRows={setSelectedRows}
            />
          ),
          customToolbar: () => {
            return <CustomToolbar kurumEkleVeyaDuzenle={kurumEkleVeyaDuzenle} />
          },
          pagination: false,
          selectableRows: 'single',
          selectableRowsOnClick: true,
          print: false,
          download: false,
          textLabels: {
            body: {
              noMatch: 'Üzgünüz, eşleşen kayıt bulunamadı',
              toolTip: 'Sınıfla',
              columnHeaderTooltip: column => `Sırala - ${column.label}`,
            },
            pagination: {
              next: 'Sonraki Sayfa',
              previous: 'Önceki sayfa',
              rowsPerPage: 'Sayfa başına satır:',
              displayRows: 'of',
            },
            toolbar: {
              search: 'Ara',
              downloadCsv: 'CSV olarak indir',
              print: 'Yazdır',
              viewColumns: 'Sütünları Göster',
              filterTable: 'Tabloyu Filtrele',
            },
            filter: {
              all: 'Hepsi',
              title: 'Filtrele',
              reset: 'Sıfırla',
            },
            viewColumns: {
              title: 'Sütünları Göster',
              titleAria: 'Sütünları Göster Gizle',
            },
            selectedRows: {
              text: 'kurum seçildi',
              delete: 'Sil',
              deleteAria: 'Seçeli satırı sil',
            },
          },
        }}
        title="Kurumlar"
      />
    </div>
  )
}

export default KurumIslemleri
