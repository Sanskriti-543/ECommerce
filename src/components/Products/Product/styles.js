import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    boxShadow: `inset 5px 5px 5px rgba(0,0,0,0.05)
                inset -5px -5px 5px rgba(255,255,255,0.5)
                 5px 5px 5px rgba(0,0,0,0.05) 
                  -5px -5px 5px rgba(255,255,255,0.5) `,
    borderRadius : '15px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    boxShadow : '0 10px 20px rgba(0,0,0,0.1)',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    
  },

  img:{
    padding:'8px 10px',
    backgroundColor:'#03a9f4',
    color:'#000000',
  },
}));
