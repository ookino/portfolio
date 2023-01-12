const styles = {
  global: () => ({
    html: {
      backgroundColor: 'bg-canvas',
    },
    body: {
      color: 'default',
      backgroundColor: 'bg-canvas',
      background: 'bg-canvas',
    },
    '*::placeholder': {
      opacity: 1,
      color: 'muted',
    },

    'html,body': {
      height: '100%',
      backgroundColor: 'bg-canvas',
    },
    '#__next, #root': {
      display: 'flex',
      flexDirection: 'column',
      minH: '100%',
    },
  }),
};

export default styles;
