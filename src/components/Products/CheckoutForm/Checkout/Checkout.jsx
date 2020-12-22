import React , { useState , useEffect} from 'react'
import { Paper , Stepper , Step , Typography , StepLabel, CircularProgress, Divider , Button } from '@material-ui/core'
import { commerce } from '../../../../lib/commerce.js'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'

import useStyles from './styles'

const steps = ['Shipping Address' ,'Payment details' ]

const Checkout = ( { cart }) => {
    const [activeStep , setActiveStep] = useState(0);
    const [checkoutToken ,setCheckoutToken] = useState('')
    const classes = useStyles();

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type : 'cart'});
            

                setCheckoutToken(token);

            } catch (error) {

            }
        }

        generateToken();
    },[cart])


    const Confirmation = () => (
        <div>Confirmation</div>
    )

    const Form = () => activeStep == 0
    ? <AddressForm checkoutToken={checkoutToken}/>
    : <PaymentForm />

    return (
        <>
            <div className={classes.toolbar}></div>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant = "h4" align="center">Checkout</Typography>
                    <Stepper activeStep={0} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key ={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Checkout
