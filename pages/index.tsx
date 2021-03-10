import { GetServerSideProps } from 'next';
// import Link from 'next/link';
// import Image from 'next/image';
import NavDrawer from '../components/NavDrawer';
import { tools } from '../lib/tools';
import { makeStyles, createStyles, Typography, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            background: theme.palette.gray.light,
            boxShadow: `0 0.125em 0.25em 0 ${theme.palette.shadow.main}, 0 0.1875em 0.625em 0 ${theme.palette.shadow.main}`,
            padding: '2em',
        },
        root: {},
        linkButton: {
            marginLeft: '1em',
        },
    })
);

interface Props {
    tools: { name: string; image?: { src: string; width: number; height: number } }[];
}

export default function Home({ tools }: Props) {
    console.log(tools);
    const classes = useStyles();

    return (
        <NavDrawer>
            <Typography variant="h3" color="primary" className={classes.root}>
                Welcome
            </Typography>
            <Typography variant="body1">
                Welcome to Wrenwood South HOA's resources! This website hosts a collection of important documents.
            </Typography>
            <Typography variant="body1">[ An announcement board will go here. ]</Typography>
        </NavDrawer>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    return {
        props: {
            tools: tools.map(({ name, image }) => ({
                name,
                image,
            })),
        },
    };
};
