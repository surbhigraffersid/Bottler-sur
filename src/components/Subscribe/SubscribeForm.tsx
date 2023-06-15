import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { WithStyles, withStyles } from '@material-ui/core/styles'
import styles from './SubscribeForm.styles'
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

class SubscribeFormInner extends React.Component<ISubscribeProps, ISubscribeState> {
  constructor(props: ISubscribeProps) {
    super(props)
    this.state = {
      emailValue: '',
      fNameValue: '',
      lNameValue: '',
    }
  }
  render() {
    return (
      <div className={this.props.classes.container}>
        <form action="https://api.botler.com/requests/newsletter" method="POST" noValidate>        
          
            <TextField 
                id="outlined-basic" 
                label="Email" 
                variant="outlined" 
                autoCapitalize="off"
                autoCorrect="off"
                value={this.state.emailValue}
                onChange={(e) => {
                this.setState({ emailValue: e.target.value })
                }}
                name="EMAIL"
            />
            
          {/* <p> */}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              value="subscribe"
              name="subscribe"
            >
              Subscribe
            </Button>
          {/* </p> */}
        <p id="terms-and-condition">
            <Checkbox {...label} defaultChecked />
            I have read, agreed and accepted the <a href="/terms-and-conditions" target="_blank" >Terms &amp; Conditions</a>, <a href="/privacy-policy" target="_blank">Privacy Policy</a>, and <a href="/cookie-policy" target="_blank" >Cookie Policy</a>
        </p>
        <div id="last-text">
        *DECLASSIFIED is a true crime series based on Botler's actual cases.
        </div>
          
        </form>
      </div>
    )
  }
}

interface ISubscribeProps extends WithStyles<typeof styles> {}
interface ISubscribeState {
  emailValue: string
  fNameValue: string
  lNameValue: string
}
export const SubscribeForm = withStyles(styles)(SubscribeFormInner)