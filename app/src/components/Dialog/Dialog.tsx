import React, { FC } from 'react';
import { StyledDialog } from './styles/Dialog.styled';
import { DialogImageStyled } from './styles/DialogImage.styled';

interface ImageProps {
  image: string;
}

const Dialog: FC<ImageProps> = ({ image }) => {
  return (
    <>
      <div>
        <StyledDialog open>
          <DialogImageStyled src={image} alt='Image' />
        </StyledDialog>
      </div>
    </>
  );
};
export default Dialog;
