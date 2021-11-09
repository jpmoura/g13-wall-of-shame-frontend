import React from 'react';
import ApplicationBar from '../../organisms/application-bar';
import { DefaultTemplateProps } from './types';

function DefaultTemplate({ children }: DefaultTemplateProps): JSX.Element {
  return (
    <>
      <ApplicationBar />
      {children}
    </>
  );
}

DefaultTemplate.defaultProps = {
  children: null,
};

export default DefaultTemplate;
