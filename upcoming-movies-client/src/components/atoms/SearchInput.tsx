import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { ChangeEvent } from 'react';

type InputProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }),
);

export default function SearchInput({ onChange }: InputProps) {
  const classes = useStyles();

  return <InputBase
    placeholder="Search for a movie..."
    classes={{
      root: classes.inputRoot,
      input: classes.inputInput,
    }}
    inputProps={{ 'aria-label': 'search' }}
    onChange={onChange}
/>
}