import React, { ReactNode } from 'react';
import Head from 'next/head';
import NavDrawer from './NavDrawer';
import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: '0px 20px 20px 20px',
        },
    })
);

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = 'Wrenwood South' }: Props) => {
    const classes = useStyles();
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <NavDrawer>
                <div className={classes.root}>{children}</div>
            </NavDrawer>
        </>
    );
};

export default Layout;
