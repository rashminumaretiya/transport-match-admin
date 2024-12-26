import { makeStyles } from '@mui/styles';

export const authStyle = makeStyles((theme) => ({
  authImage: {
    minHeight: '100vh',
    maxHeight: '100vh',
    display: 'flex',
  },
  authWrapper: {
    maxWidth: 465,
    margin: 'auto',
    minHeight: '100vh',
    maxHeight: '100vh',
    overflowY: 'auto',
    padding: 24,
    '& h3': {
      fontWeight: 600,
    },
  },
  logoWrapper: {
    maxWidth: 163,
    margin: '0 auto 30px',
  },
  pageLink: {
    '&.MuiTypography-root': {
      textAlign: 'center',
      marginTop: 20,
      '& a': {
        color: theme.palette.primary.main,
        marginLeft: 5,
        fontWeight: 500,
      },
    },
  },
  forgotLink: {
    '& a': {
      color: theme.palette.primary.main,
    },
  },
  verifyEmailWrapper: {
    textAlign: 'center',
    padding: 20,
    '& h5': {
      fontWeight: 700,
    },
  },
}));
