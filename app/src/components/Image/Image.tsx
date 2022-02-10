import React, { FC, useState } from 'react';
import { ImageStyled } from './Image.styled';
import { useDialogClose } from '../../hooks/useDialogClose';
import Dialog from '../Dialog/Dialog';
const placeholderImageUrl = require('../../../assets/images/placeholder.png');

interface ImageProps {
  image: string;
}

const Image: FC<ImageProps> = ({ image }) => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const dialogRef = useDialogClose(() => {
    setIsOpenDialog(false);
  });
  return (
    <>
      <ImageStyled
        src={image ? image : placeholderImageUrl}
        onClick={() => setIsOpenDialog(true)}
      />
      {isOpenDialog && (
        <div ref={dialogRef}>
          <Dialog image={image ? image : placeholderImageUrl} />
        </div>
      )}
    </>
  );
};
export default Image;
