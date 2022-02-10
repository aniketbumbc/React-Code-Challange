import React, { FC } from 'react';
import {
  ErrorStyled,
  RefreshStyled,
  RefreshButtonStyled,
} from './Error.styled';

interface ErrorBoundaryProps {
  error: string;
}

const ErrorBoundary: FC<ErrorBoundaryProps> = ({ error }) => {
  return (
    <>
      <ErrorStyled>
        {error}
        <RefreshStyled>
          <RefreshButtonStyled onClick={() => window.location.reload()}>
            Try Again
          </RefreshButtonStyled>
        </RefreshStyled>
      </ErrorStyled>
    </>
  );
};
export default ErrorBoundary;
