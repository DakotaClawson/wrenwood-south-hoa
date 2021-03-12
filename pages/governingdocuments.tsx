import Layout from '../components/Layout';
import Link from 'next/link';
import { makeStyles, createStyles, Typography, Theme, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        h6: {
            color: theme.palette.primary.dark,
        },
    })
);

export default function GoverningDocuments() {
    const classes = useStyles();
    return (
        <Layout>
            <Grid container spacing={4} direction="column">
                <Typography variant="h3" color="primary">
                    Governing Documents
                </Typography>
                <Grid item>
                    <Link href="https://drive.google.com/file/d/1tyKQXpSD2mIAVjFZp-71Xh_QlEK1e3Zk/view?usp=sharing">
                        <Button>
                            <Typography className={classes.h6} variant="h6">
                                Wood Convenants 2018 Amendments
                            </Typography>
                        </Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Button>
                        <Typography className={classes.h6} variant="h6">
                            Wood Convenants 1994 Amendments
                        </Typography>
                    </Button>
                </Grid>
                <Grid item>
                    <Button>
                        <Typography className={classes.h6} variant="h6">
                            Wood Convenants 1987 Amendments
                        </Typography>
                    </Button>
                </Grid>
                <Grid item>
                    <Button>
                        <Typography className={classes.h6} variant="h6">
                            Wrenwood Articles of Incorporation 1987
                        </Typography>
                    </Button>
                </Grid>
                <Grid item>
                    <Button>
                        <Typography className={classes.h6} variant="h6">
                            Wrenwood Bylaws 2017
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Layout>
    );
}
