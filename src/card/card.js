import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
    card: {
        width: 300,
        marginTop: 20,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    tittle: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        justifyContent: 'flex-end',
    },
};

// class CardExemplo extends React.Component {
    // constructor(props){
    //     super(props)
    // }

function CardExemplo (props) {
    // const { classes } = this.props
    const { classes } = props;

    console.log('estamos aqui', props);
    // const bull = <span className={classes.bullet}>.</span>;

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary">
                        Conciliadoras
                    </Typography>
                    <Typography component="h5">
                    <br/>
                        {/* be{bull}nev{bull}o{bull}lent */}
                        Total de Conciliadoras<br/>
                        Adicionar<br/>
                        Editar<br/>
                        Remover<br/>
                    </Typography>
                    {/* <Typography className={classes.pos} color="textSecondary">
                        adjective
                    </Typography>
                    <Typography component="p">
                        well meaning and kindly.<br/>
                        {'"a benevolent smile"'}
                    </Typography> */}
                </CardContent>
                <CardActions className={classes.button}>
                    <Button size="small" variant="raised" color="primary">Ver Detalhes</Button>
                </CardActions>
            </Card>
        </div>
    )
}

CardExemplo.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CardExemplo);