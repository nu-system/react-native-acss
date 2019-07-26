const styleMap = {
    ac: 'alignContent',
    acs: ['alignContent', 'stretch'],
    acc: ['alignContent', 'center'],
    acfs: ['alignContent', 'flex-start'],
    acfe: ['alignContent', 'flex-end'],
    acsb: ['alignContent', 'space-between'],
    acsa: ['alignContent', 'space-around'],
    ai: 'alignItems',
    ais: ['alignItems', 'stretch'],
    aib: ['alignItems', 'baseline'],
    aic: ['alignItems', 'center'],
    aifs: ['alignItems', 'flex-start'],
    aife: ['alignItems', 'flex-end'],
    as: 'alignSelf',
    asa: ['alignSelf', 'auto'],
    ass: ['alignSelf', 'stretch'],
    asb: ['alignSelf', 'baseline'],
    asc: ['alignSelf', 'center'],
    asfs: ['alignSelf', 'flex-start'],
    asfe: ['alignSelf', 'flex-end'],
    bc: 'backgroundColor',
    br: 'borderRadius',
    bw: 'borderWidth',
    bs: 'borderStyle',
    btw: 'borderTopWidth',
    btc: 'borderTopColor',
    brw: 'borderRightWidth',
    brc: 'borderRightColor',
    bbw: 'borderBottomWidth',
    bbc: 'borderBottomColor',
    blw: 'borderLeftWidth',
    blc: 'borderLeftColor',
    btrr: 'borderTopRightRadius',
    btlr: 'borderTopLeftRadius',
    bbrr: 'borderBottomRightRadius',
    bblr: 'borderBottomLeftRadius',
    b: 'bottom',
    b0: ['bottom',0],
    c: 'color',
    dn: ['display', 'none'],
    f: 'flex',
    f1: ['flex', 1],
    fdr: ['flexDirection', 'row'],
    fdrr: ['flexDirection', 'row-reverse'],
    fdc: ['flexDirection', 'column'],
    fdcr: ['flexDirection', 'column-reverse'],
    fwn: ['flexWrap', 'nowrap'],
    fwb: ['fontWeight', 'bold'],
    fw100: ['fontWeight', "100"],
    fw200: ['fontWeight', "200"],
    fw300: ['fontWeight', "300"],
    fw400: ['fontWeight', "400"],
    fw500: ['fontWeight', "500"],
    fw600: ['fontWeight', "600"],
    fw700: ['fontWeight', "700"],
    fw800: ['fontWeight', "800"],
    fw900: ['fontWeight', "900"],
    fs: 'fontSize',
    ff: 'fontFamily',
    fsn: ['fontStyle', 'normal'],
    fsi: ['fontStyle', 'italic'],
    h: 'height',
    h100p: ['height', '100%'],
    jcc: ['justifyContent', 'center'],
    jcsb: ['justifyContent', 'space-between'],
    jcfs: ['justifyContent', 'flex-start'],
    jcfe: ['justifyContent', 'flex-end'],
    jcsa: ['justifyContent', 'space-around'],
    jcse: ['justifyContent', 'space-evenly'],
    l: 'left',
    l0: ['left', 0],
    lh: 'lineHeight',
    m(value) {
      return {
        marginTop: value,
        marginBottom: value,
        marginRight: value,
        marginLeft: value,
      };
    },
    mt: 'marginTop',
    mr: 'marginRight',
    mb: 'marginBottom',
    ml: 'marginLeft',
    mh: 'marginHorizontal',
    mv: 'marginVertical',
    o: 'opacity',
    oh: ['overflow', 'hidden'],
    p(value) {
      return {
        paddingTop: value,
        paddingBottom: value,
        paddingRight: value,
        paddingLeft: value,
      };
    },
    pa: ['position', 'absolute'],
    pr(value) {
      if (value === true) {
        return {
          position: 'relative',
        };
      }
      return {
        paddingRight: value,
      };
    },
    pt: 'paddingTop',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
    ph: 'paddingHorizontal',
    pv: 'paddingVertical',
    r: 'right',
    r0: ['right', 0],
    t: 'top',
    t0: ['top', 0],
    tac: ['textAlign', 'center'],
    tar: ['textAlign', 'right'],
    taa: ['textAlign', 'auto'],
    tal: ['textAlign', 'left'],
    taj: ['textAlign', 'justify'],
    ttu: ['textTransform', 'uppercase'],
    ttc: ['textTransform', 'capitalize'],
    ttn: ['textTransform', 'none'],
    ttl: ['textTransform', 'lowercase'],
    w: 'width',
    w100p: ['width', '100%'],
    zi: 'zIndex',
  };

  export default styleMap