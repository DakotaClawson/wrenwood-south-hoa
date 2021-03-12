import React, { ReactNode } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Link } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 215;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            backgroundColor: theme.palette.secondary.light,
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        drawerContainer: {
            overflow: 'auto',
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: theme.palette.secondary.light,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        },
        header: {
            color: theme.palette.gray.light,
        },
        link: {
            textDecoration: 'none',
        },
        main: {},
    })
);
type Props = {
    children?: ReactNode;
};

export default function NavDrawer({ children }: Props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar} color="secondary">
                <Toolbar>
                    <Typography className={classes.header} variant="h6" noWrap>
                        Wrenwood South HOA Resources
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <Divider />
                    <List>
                        <Link style={{ textDecoration: 'none' }} href="/">
                            <ListItem button>
                                <ListItemText>Home</ListItemText>
                            </ListItem>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} href="/governingdocuments">
                            <ListItem button>
                                <ListItemText>Governing Documents</ListItemText>
                            </ListItem>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} href="/annualmeeting">
                            <ListItem button>
                                <ListItemText>Annual Meeting</ListItemText>
                            </ListItem>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} href="/financial">
                            <ListItem button>
                                <ListItemText>Financial</ListItemText>
                            </ListItem>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} href="/forms">
                            <ListItem button>
                                <ListItemText>Forms</ListItemText>
                            </ListItem>
                        </Link>
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.drawerHeader} />
                {children}
            </main>
        </div>
    );
}
