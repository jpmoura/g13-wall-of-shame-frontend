import React from 'react';
import { Paper, Skeleton } from '@mui/material';
import Shame from '../../../models/shame';
import ShameListItem from '../../molecules/shame-list-item';
import { ShameListProps } from './types';

export default function ShameList({ shames, isLoading }: ShameListProps): JSX.Element {
  const buildListItems = () => {
    if (isLoading) {
      return [0, 1, 3].map((id: number) => <Skeleton key={id} height={50} />);
    }

    return shames.map((shame: Shame) => <ShameListItem item={shame} key={shame.id} />);
  };

  return (
    <Paper>
      {buildListItems()}
    </Paper>
  );
}
