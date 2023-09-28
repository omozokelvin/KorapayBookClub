import { Box, TextField, debounce } from '@mui/material';

import SearchIcon from '@/app/_common/components/icons/SearchIcon';
import useBreakPoints from '@/app/_common/hooks/useBreakPoints';
import useCustomRouter, {
  QueryParamEnum,
} from '@/app/_common/hooks/useCustomRouter';
import { RootState, useSelector } from '@/app/_common/redux/store';
import { Autocomplete } from '@mui/material';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { SyntheticEvent, useCallback, useMemo } from 'react';

export default function SearchBar() {
  const { medium: mediumDownwards } = useBreakPoints('down');

  const { books } = useSelector((state: RootState) => state.books);

  const { getQueryParam, setQueryParam } = useCustomRouter();

  const search = getQueryParam(QueryParamEnum.search) || '';

  const uniqueBooks = useMemo(() => {
    return [
      ...new Set(
        books.map((book) => {
          return book.title + ' - ' + book?.authors.join(', ');
        })
      ),
    ];
  }, [books]);

  const changeHandler = useCallback(
    async (_event: SyntheticEvent<Element, Event>, value: string) => {
      const query = value?.trim();

      if (!query) {
        return;
      }

      setQueryParam(QueryParamEnum.search, query);
    },
    []
  );

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 500),
    [changeHandler]
  );

  return (
    <Autocomplete
      options={uniqueBooks}
      getOptionLabel={(option: string) => option}
      fullWidth={mediumDownwards}
      onInputChange={debouncedChangeHandler}
      onChange={(_, value) => {
        setQueryParam(QueryParamEnum.search, value);
      }}
      sx={{
        '& .MuiInputBase-root': {
          height: '40px',
          border: '1px solid #DDDDDD',
        },
      }}
      value={search}
      renderOption={(props, option, { inputValue }) => {
        const fullWord = option;
        const matches = match(fullWord, inputValue, { insideWords: true });

        const parts = parse(fullWord, matches);

        return (
          <li {...props}>
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          fullWidth
          placeholder="Search books, genres, authors, etc."
          autoComplete="off"
          value="Built to last"
          sx={{
            ...(!mediumDownwards && {
              width: 541,
            }),
            '& .MuiOutlinedInput-root': {
              paddingRight: '0px !important',
              pl: 2,
              fontSize: '0.875rem',
              '& fieldset': {
                borderColor: 'transparent',
              },
              '&:hover fieldset': {
                borderColor: 'transparent',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'transparent',
              },
            },
          }}
          InputProps={{
            ref: params.InputProps.ref,
            // ...params.InputProps,
            endAdornment: (
              <Box
                sx={{
                  backgroundColor: '#f9f9fb',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #DDDDDD',
                }}
              >
                <SearchIcon />
              </Box>
            ),
          }}
        />
      )}
    />
  );
}
