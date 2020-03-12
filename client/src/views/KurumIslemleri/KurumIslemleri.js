import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import axios from 'utils/api'
import KurumEkleDuzenleDialog from './KurumEkleDuzenleDialog'
const KurumIslemleri = () => {
  const [kurumlar, setKurumlar] = useState([])
  const [seciliKurum, setSeciliKurum] = useState(null)
  const [kurumEkleDuzenleDialog, setkKurumEkleDuzenleDialog] = useState(false)
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
    setkKurumEkleDuzenleDialog(false)
    setSeciliKurum(null)
    const func = item.id ? axios.put : axios.post
    func('tanim/kurum', item)
      .then(({ data }) => {
        kurumlariGetir()
      })
      .catch(err => {
        console.log(err.response.data.hata)
      })
  }

  function kurumEkleDuzenleDialogOpen(item = null) {
    setkKurumEkleDuzenleDialog(true)
    setSeciliKurum(item)
    console.log(item)
  }

  return (
    <div>
      <MaterialTable
        actions={[
          {
            icon: 'edit',
            tooltip: 'Kurumu Duzenle',
            onClick: (event, rowData) => kurumEkleDuzenleDialogOpen(rowData),
          },
          {
            icon: 'delete',
            tooltip: 'Kurumu Sil',
            onClick: (event, rowData) => kurumSil(rowData.id),
          },
          {
            icon: 'add',
            tooltip: 'Kurum Ekle',
            isFreeAction: true,
            onClick: event => kurumEkleDuzenleDialogOpen(null),
          },
        ]}
        columns={[
          { title: 'id', field: 'id' },
          { title: 'Adı', field: 'adi' },
        ]}
        data={kurumlar}
        options={{
          actionsColumnIndex: -1,
        }}
        title="Kurumlar"
      />

      <KurumEkleDuzenleDialog
        kurumEkleVeyaDuzenle={kurumEkleVeyaDuzenle}
        onClose={() => setkKurumEkleDuzenleDialog(false)}
        open={kurumEkleDuzenleDialog}
        seciliKurum={seciliKurum}
      />
    </div>
  )
}

export default KurumIslemleri
