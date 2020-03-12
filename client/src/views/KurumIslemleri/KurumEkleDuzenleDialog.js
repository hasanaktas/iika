import React, { useState, useEffect } from 'react'
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core'

const KurumEkleDuzenleDialog = props => {
  const { seciliKurum, onClose, open, kurumEkleVeyaDuzenle } = props
  const [form, setForm] = useState({ adi: '' })

  useEffect(() => {
    seciliKurum
      ? setForm({
        adi: seciliKurum.adi,
        id: seciliKurum.id,
      })
      : setForm({
        adi: '',
      })
  }, [seciliKurum])

  const updateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      onClose={onClose}
      open={open}
    >
      <DialogTitle>{seciliKurum ? 'Duzenle' : 'Yeni Kurum Ekle'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          label="Kurum Adı"
          margin="dense"
          name="adi"
          onChange={updateField}
          value={form.adi}
        />
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={onClose}
        >
          Vazgeç
        </Button>
        <Button
          color="primary"
          onClick={() => kurumEkleVeyaDuzenle(form)}
        >
          Onayla
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default KurumEkleDuzenleDialog
