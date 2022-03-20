import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useQuery } from 'react-query';
import ShameService from '../../../services/shame-service';
import StickyFab from '../../atoms/sticky-fab';
import AddShameDialog from '../../organisms/add-shame-dialog';
import ShameList from '../../organisms/shame-list';
import DefaultTemplate from '../../templates/default';

const shameService = new ShameService();

export default function HomePage(): JSX.Element {
  const [shouldOpenDialog, setShouldOpenDialog] = useState(false);

  function openDialog(): void {
    setShouldOpenDialog(true);
  }

  function closeDialog(): void {
    setShouldOpenDialog(false);
  }

  const listQuery = useQuery('shames', async () => shameService.list());

  useEffect(() => {
    if (!shouldOpenDialog) {
      listQuery.refetch();
    }
  }, [shouldOpenDialog]);

  return (
    <DefaultTemplate>
      <ShameList shames={listQuery.data ?? []} isLoading={listQuery.isLoading} />
      <AddShameDialog open={shouldOpenDialog} onClose={closeDialog} />
      <StickyFab color="primary" onClick={openDialog}>
        <AddIcon />
      </StickyFab>
    </DefaultTemplate>
  );
}
