import React, {Fragment} from "react";
import {Toaster} from "react-hot-toast";
import AppNavBar from "@/components/Master/AppNavBar";
import Footer from "@/components/Master/Footer";
import { headers } from 'next/headers';


const PlainLayout = (props) => {
    const headersList = headers();
    const firstName = headersList.get('firstName');

    return (
        <Fragment>
            <AppNavBar firstName={firstName}/>
            {props.children}
            <Toaster position="bottom-center"/>
            <Footer/>
        </Fragment>
    );
};


export default PlainLayout;