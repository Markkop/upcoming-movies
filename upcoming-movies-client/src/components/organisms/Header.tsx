import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SearchInput from '../atoms/SearchInput';
import useDebounce from '../../hooks/useDebounce';
import { slugify } from '../../utils/slugify';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }),
);

type HeaderProps = {
  setQuery: Dispatch<SetStateAction<string>>
}

export default function Header({ setQuery }: HeaderProps) {
  const classes = useStyles();
  const [value, setValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(value, 500) 
  
  useEffect(() => {
    setQuery(slugify(debouncedValue))
  }, [debouncedValue])

  function onInputChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Upcoming Movies
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <SearchInput onChange={onInputChange}/>
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
