import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion, AccordionDetails, AccordionSummary, Typography,
} from '@mui/material';
import { formatToLongDate } from '../../../util/formatters';
import { ShameListItemProps } from './types';

export default function ShameListItem({ item }: ShameListItemProps) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${item.id}-content`}
        id={`panel${item.id}-header`}
      >
        <Typography>
          {formatToLongDate(item.date)}
          {' - '}
          {item.event}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {item.reason}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
