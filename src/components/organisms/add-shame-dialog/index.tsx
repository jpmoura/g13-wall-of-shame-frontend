import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {
  Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import Shame from '../../../models/shame';
import ShameService from '../../../services/shame-service';
import constants from '../../../util/constants';
import { AddShameDialogProps } from './types';

const validationSchema = Yup.object({
  event: Yup.string().required(constants.validation.errorMessages.requiredField),
  reason: Yup.string().required(constants.validation.errorMessages.requiredField),
  date: Yup.date().required(constants.validation.errorMessages.requiredField),
});

export default function AddShameDialog({ open, onClose }: AddShameDialogProps): JSX.Element {
  const shameService: ShameService = new ShameService();

  async function handleSubmit(shame: Shame): Promise<Shame> {
    return shameService.create(shame);
  }

  const formik = useFormik({
    initialValues: {
      event: '',
      reason: '',
      date: new Date().toISOString(),
    } as Shame,
    validationSchema,
    onSubmit: async (shame) => {
      await handleSubmit(shame);
      onClose();
    },
  });

  function handleClose() {
    formik.resetForm();
    onClose();
  }

  function handleDateChange(date: Date | null) {
    formik.setFieldValue('date', date?.toISOString());
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Adicionar mais uma vergonha</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para adicionar mais um rolê que o G13 deixou de ir, preencha os campos abaixo:
          </DialogContentText>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  name="event"
                  onChange={formik.handleChange}
                  value={formik.values.event}
                  error={formik.touched.event && !!formik.errors.event}
                  helperText={formik.touched.event && formik.errors.event}
                  label="Evento"
                  placeholder="Informe o nome do evento que o G13 deixou de ir"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="reason"
                  onChange={formik.handleChange}
                  value={formik.values.reason}
                  error={formik.touched.reason && !!formik.errors.reason}
                  helperText={formik.touched.reason && formik.errors.reason}
                  label="Desculpa"
                  placeholder="Informe a desculpa esfarrapada que o G13 usou falhar na missão"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <DatePicker
                  label="Popup de seleção de data"
                  inputFormat="dd/MM/yyyy"
                  value={formik.values.date}
                  onChange={handleDateChange}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  renderInput={(params) => <TextField id="date-picker-dialog" error={formik.touched.date && !!formik.errors.date} helperText={formik.touched.date && formik.errors.date} fullWidth {...params} />}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Grid container direction="row" justifyContent="space-around">
            <Grid item>
              <Button variant="contained" onClick={handleClose}>
                Cancelar
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" type="submit" color="primary" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? <CircularProgress color="inherit" /> : 'Adicionar'}
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
}
