import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#e3f2fd',
    padding: theme.spacing(6),
    // padding:'3px',

  },
  root: {
    flexGrow: 1,
  },
}));
