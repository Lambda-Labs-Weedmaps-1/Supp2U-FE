
import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/styles';
import { Slide } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: props => (props.big ? '450px' : '300px'),
        padding: 15,
        transition: `500ms all ease-in-out`,
        margin: props => (props.noMargin ? 0 : '15px'),
        boxShadow: `0 5px 15px -5px rgba(0, 0, 0, 0.11)`,
        borderRadius: `5px`,
        backgroundColor: props => (props.primary && `#fff`),
        color: props => (props.primary && '#000'),
        '&:hover': {
            boxShadow: `0 5px 25px -5px rgba(0, 0, 0, 0.21)`,
            transform: props => (props.clickable && 'scale(1.02)'),
        },
    }
});

// class Card extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             animated: false,
//         }
//     }
//
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState(() => {
//                 return { animated: true }
//             })
//         }, this.props.delay)
//     }
//
//     render() {
//         const { delay = 0, noAnimation, primary, noMargin, big, ...props } = this.props
//         const classes = useStyles({animated: this.state.animated, delay, primary, noAnimation, big, noMargin});
//
//         return (
//             <div
//                 className={classes.root}
//                 {...props}
//             />
//         )
//     }
// }
export  default (props) => {
    let [animated, setAnimated] = useState(false);
    useEffect(()=>{
        setTimeout(() => {
            setAnimated(true)
        }, props.delay)
    },[] );
    const { delay = 0, noAnimation, primary, noMargin, big, clickable } = props;
    const classes = useStyles({animated, delay, primary, noAnimation, big, noMargin, clickable});

    return (
        <Slide direction="up" in={animated}>
            <div
                className={classes.root}
            {...props}
        />
        </Slide>
    )
}