import React, { FC, useEffect, useState, FormEvent } from 'react';
import {
  DONE,
  ERROR,
  NEW,
  PROCESS,
  statusStyles,
  URL,
} from 'src/constant/constant';
import { LoaderStyled } from 'src/shared/styles/Loader.styled';
import { Animal } from 'src/types/types';
import { getErrorMessage, handleColorChange } from 'src/utils/utilts';
import { StyledSelect } from './Status.styled';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Status: FC<{ animal: Animal }> = ({ animal }) => {
  const [selectedColor, SetSelectedColor] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { status, id } = animal;

  useEffect(() => {
    SetSelectedColor(handleColorChange(status));
  }, [status]);

  const handleOnChange = (
    event: FormEvent<HTMLSelectElement>,
    id: number
  ): void => {
    updateStatus(event.currentTarget.value, id);
  };

  const updateStatus = async (status: string, id: number): Promise<void> => {
    const updateData = {
      status,
    };
    setLoading(true);
    try {
      const response = await fetch(`${URL}${id}`, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(updateData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseData = await response.json();
      if (responseData.success) {
        alert('Status value changed successfully');
        location.reload();
        setLoading(false);
      }
    } catch (error: unknown) {
      setLoading(false);
      console.error(error);
      setError(getErrorMessage(error));
    }
  };
  return (
    <>
      {loading && <LoaderStyled />}
      {error.length > 0 && !loading && <ErrorBoundary error={error} />}
      <StyledSelect
        value={status}
        onChange={(event) => handleOnChange(event, id)}
        color={selectedColor}
        style={loading ? statusStyles : {}}
      >
        <option value={NEW}>New</option>
        <option value={DONE}>Done</option>
        <option value={ERROR}>Error</option>
        <option value={PROCESS}>Processing</option>
      </StyledSelect>
    </>
  );
};
export default Status;
