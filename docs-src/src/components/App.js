import React,{Fragment} from 'react'
import {Header,Footer,Content} from './Layouts'
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
import {Container, Row} from 'react-bootstrap'
import 'prismjs/themes/prism-TWILIGHT.css'

const useStyles = makeStyles((theme) => ({
   Layout:{
        marginTop: 100
   }
}));

export default function App({location, children}){
    const classes = useStyles();

    return (
        <div >
            <Fragment>
                <Header/>
                
                <Container className={classes.Layout}>
                    <Row>
                        {children}
                    </Row>
                </Container>
                <Footer/>
            </Fragment>
        </div>
    )
}