import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Layout from '../components/Layout';
import { tools } from '../lib/tools';
import { makeStyles, createStyles, Typography, Theme, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            background: theme.palette.gray.light,
            boxShadow: `0 0.125em 0.25em 0 ${theme.palette.shadow.main}, 0 0.1875em 0.625em 0 ${theme.palette.shadow.main}`,
            padding: '2em',
        },
        container: {
            marginTop: '5px',
        },
        root: {},
        linkButton: {
            marginLeft: '1em',
        },
        imageWrapper: {
            marginTop: '5px',
            textAlign: 'center',
        },
        image: {
            borderRadius: '50%',
        },
        welcome: {
            textAlign: 'center',
        },
        announcement: {},
        forms: {},
    })
);

interface Props {
    tools: { name: string; image?: { src: string; width: number; height: number } }[];
}

export default function Home({ tools }: Props) {
    console.log(tools);
    const classes = useStyles();

    return (
        <Layout>
            <Typography variant="h3" color="primary">
                Welcome
            </Typography>
            <div className={classes.imageWrapper}>
                <Image className={classes.image} src="/wrenwood.jpeg" alt="Wrenwood Sign" width={350} height={250} />
            </div>
            <Grid className={classes.container} container spacing={5} direction="column">
                <Grid item className={classes.welcome}>
                    <Typography variant="body1">
                        Welcome to Wrenwood South HOA's resources! This website hosts a collection of important
                        documents.
                    </Typography>
                </Grid>
                <Grid item className={classes.announcement}>
                    <Typography variant="h4" color="primary">
                        Announcements
                    </Typography>
                    <Typography variant="body1">[ An announcement board will go here. ]</Typography>
                </Grid>
                <Grid item className={classes.forms}>
                    <Typography variant="h4" color="primary">
                        Required Forms
                    </Typography>
                </Grid>
            </Grid>
        </Layout>
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
