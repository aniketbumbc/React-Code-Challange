import React, { FC, useState, useEffect } from 'react';
import { StyledTable, TBody, TD, TH, THead, TR } from './styles/Table.styled';
import Image from '../Image/Image';
import Status from '../Status/Status';
import {
  getFilterSeachResult,
  getSortedItems,
  getFromatedDate,
} from 'src/utils/utilts';
import { Animal, SortOrder } from 'src/types/types';
import { useFetch } from 'src/hooks/useFetch';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { NotFoundStyled } from './styles/NotFound.styled';
import { LoaderStyled } from 'src/shared/styles/Loader.styled';
import { ASCENDING, DESCENDING } from 'src/constant/constant';

interface TableProps {
  searchValue: string;
}

const Table: FC<TableProps> = ({ searchValue }) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [filterData, setFilterData] = useState<Animal[]>([]);
  const { animalsData, loading, error } = useFetch();

  useEffect(() => {
    let tempFilterData: Animal[] = [];
    tempFilterData = getFilterSeachResult(animalsData, searchValue);
    const timerDealy = setTimeout(() => setFilterData(tempFilterData), 200);
    return () => clearTimeout(timerDealy);
  }, [searchValue, animalsData]);

  /**
   *  Method set state of filter data in the sorting  asnc/desce order
   *
   */

  const requestSort = (): void => {
    let filterTableItems = [...filterData];
    if (sortOrder === ASCENDING) {
      setFilterData(getSortedItems(filterTableItems, sortOrder));
      setSortOrder(DESCENDING);
    } else {
      setFilterData(getSortedItems(filterTableItems, sortOrder));
      setSortOrder(ASCENDING);
    }
  };

  return (
    <>
      {loading && <LoaderStyled></LoaderStyled>}

      {error.length > 0 && !animalsData.length && (
        <ErrorBoundary error={error} />
      )}

      {!loading && filterData.length ? (
        <StyledTable>
          <THead>
            <TR>
              <TH>Id</TH>
              <TH onClick={requestSort} style={{ cursor: 'pointer' }}>
                Name
              </TH>
              <TH>Image</TH>
              <TH>Status</TH>
              <TH>Date</TH>
            </TR>
          </THead>
          <TBody>
            {filterData.map((animal: Animal) => {
              return (
                <TR key={animal.id}>
                  <TD>{animal.id}</TD>
                  <TD>{animal.name}</TD>
                  <TD>
                    <Image image={animal.image} />
                  </TD>
                  <TD>{<Status animal={animal} />}</TD>
                  <TD>{getFromatedDate(animal.date)}</TD>
                </TR>
              );
            })}
          </TBody>
        </StyledTable>
      ) : (
        !loading &&
        !filterData.length &&
        !error.length && (
          <NotFoundStyled> Please, Try Different Values </NotFoundStyled>
        )
      )}
    </>
  );
};

export default React.memo(Table);
