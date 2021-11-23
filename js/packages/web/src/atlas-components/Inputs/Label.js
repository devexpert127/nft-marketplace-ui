import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  container: {},
  text: {
    fontSize: ({ fontSize }) => (fontSize ? fontSize : '2.4rem'),
    lineHeight: ({ lineHeight }) => (lineHeight ? lineHeight : '3.6rem'),
    fontWeight: ({ fontWeight }) => (fontWeight ? fontWeight : 400),
    color: ({ color }) => (color ? color : '#fff'),
    marginBottom: ({ marginBottom }) =>
      marginBottom || marginBottom === 0
        ? `${marginBottom} !important`
        : '1.2rem !important',

    marginRight: ({ marginRight }) =>
      marginRight || marginRight === 0 ? `${marginRight} !important` : 0,
  },
}));

const Label = ({
  text,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  marginBottom,
  marginRight,
}) => {
  const classes = useStyles({
    fontSize,
    fontWeight,
    lineHeight,
    color,
    marginBottom,
    marginRight,
  });

  return <Typography className={classes.text}>{text}</Typography>;
};

export default Label;
