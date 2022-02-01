import React, {component, Fragment} from "react";
import {withAlert} from "react-alert";
import AlertTemplate from 'react-alert-template-basic';


export class Alerts extends Comment{
    componentDidMount(){
        this.props.alert.show('It Works');
    }
    render(){
        return <Fragment />;

    }
}

export default withAlert(Alerts);