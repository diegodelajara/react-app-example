import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {Button, Input} from '@material-ui/core'


import { auth } from '../constants/auth'



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function Login(props) {  
  const classes = useStyles()
  const {user, pass} = auth


  function entrar() {
    console.log(user)
    console.log(pass)  
  }

  return (
    <div className="App">
      <div className={classes.root}>
        <Grid container spacing={3}>
          Login
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid item>
                <Input type="text" name="usuario" placeholder={props.labels.label1}></Input>
              </Grid>
              <Grid item>
                <Input type="text" name="password" placeholder={props.labels.label2}></Input>
              </Grid>
              <Grid item>
                <Button onClick={entrar}>Entrar</Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Login;
