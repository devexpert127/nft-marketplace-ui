import moment from 'moment';

export const conciseAddress = address => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length,
  )}`;
};
export const timeStampToFromTime = timeStamp => {
  if (moment(Number(timeStamp)).diff(moment(Number(Date.now())), 'minutes')) {
    return moment(Number(timeStamp)).format('hh:mm A');
  }
  return moment(Number(timeStamp)).from();
};

export const timeStampToTime = timeStamp => {
  return moment(Number(timeStamp)).format('hh:mm A');
};

export const ogTrunc = (val, test) => {
  if (!Number(val)) {
    return 0;
  }
  const _val = (val * 100 - Math.trunc(val) * 100) / 100;
  if (!_val) {
    return Math.trunc(val);
  }
  let decimal = 0;
  if (_val < 0.000001) {
    decimal = 7;
    return parseFloat(val).toFixed(7);
  } else if (_val < 0.00001) {
    decimal = 6;
  } else if (_val < 0.0001) {
    decimal = 5;
  } else if (_val < 0.001) {
    decimal = 4;
  } else if (_val < 0.01) {
    decimal = 3;
  } else if (_val < 1) {
    decimal = 2;
  } else {
    return Math.trunc(val).toString();
  }
  return (
    Math.trunc(val) +
    parseFloat(
      _val
        .toString()
        .match(new RegExp('^-?\\d+(?:.\\d{0,' + decimal + '})?'))[0],
    )
  ).toFixed(decimal);
};

export const trunc = (val, test) => {
  let _val = ogTrunc(val, test).toString();
  const _val2 = _val.split('.');
  if (_val2[0].length > 8) {
    const _val = _val2[0].slice(0, 4);
    const __val = _val2[0].slice(_val2.length - 4, -1);
    const joined = [_val, __val].join('..');
    return joined;
  }
  if (_val.includes('.')) {
    const splitedVal = _val.split('.');
    if (val < 0.0001) {
      return '<0.0001';
    }
    return [
      splitedVal[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      splitedVal[1],
    ].join('.');
  } else {
    return Number(_val).toLocaleString();
  }
};

export const truncFileName = (fileName, acceptedLength) => {
  if (fileName.length > acceptedLength) {
    return `${fileName.substring(0, acceptedLength - 4)}...`;
  } else {
    return fileName;
  }
};

export const lessThanDayAgo = (date, day) => {
  // return moment(date).isAfter(moment().subtract(day, 'minutes'));
  return moment(date).isAfter(moment().subtract(day, 'day'));
};

export const timeAgo = time => {
  moment.updateLocale('en', {
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: number => number + 's ago',
      ss: '%ds ago',
      m: '1m ago',
      mm: '%dm ago',
      h: '1h ago',
      hh: '%dh ago',
      d: '1d ago',
      dd: '%dd ago',
      M: 'a month ago',
      MM: '%d months ago',
      y: 'a year ago',
      yy: '%d years ago',
    },
  });

  let secondsElapsed = moment().diff(time, 'seconds');
  let dayStart = moment().startOf('day').seconds(secondsElapsed);

  if (secondsElapsed > 300) {
    return moment(time).fromNow(true);
  } else if (secondsElapsed < 60) {
    return dayStart.format('s') + ' seconds';
  } else {
    return dayStart.format('m:ss') + ' mins';
  }
};

export const pad = (num, size = 4) => {
  num = num.toString();
  while (num.length < size) num = '0' + num;
  return num;
};

export const getTimezoneOffset = () => {
  function z(n) {
    return (n < 10 ? '0' : '') + n;
  }
  var offset = new Date().getTimezoneOffset();
  var sign = offset < 0 ? '+' : '-';
  offset = Math.abs(offset);
  return sign + z((offset / 60) | 0) + z(offset % 60);
};

export const nFormatter = (num, digits) => {
  const si = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return num / si[i].value + si[i].symbol;
};
export const truncateExact = (num, fixed) => {
  if (num) {
    let sNumber = num.toString();
    let index = sNumber.indexOf('.');
    let newNumber = index !== 0 ? sNumber : '0' + sNumber;
    let re = new RegExp('^-?\\d+(?:.\\d{0,' + (fixed || -1) + '})?');
    return newNumber.toString().match(re)[0];
  } else {
    return num;
  }
};

export const sixDigitsFormatter = num => {
  if (num < 1) {
    return num;
  }
  if (false && num <= 9999.99) {
    let amount = truncateExact(num, 2);
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else if (false && num <= 999999.99) {
    let amount = Math.trunc(num);
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    const si = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'k' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'G' },
      { value: 1e12, symbol: 'T' },
      { value: 1e15, symbol: 'P' },
      { value: 1e18, symbol: 'E' },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    let amount = truncate(num / si[i].value) + si[i].symbol;
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};

export const truncate = num => {
  if (num) {
    const floatedTo = num >= 1 ? 2 : 3;
    let re = new RegExp('^-?\\d+(?:.\\d{0,' + (floatedTo || -1) + '})?');
    return num.toString().match(re)[0];
  } else {
    return num;
  }
};

export const numberTest = n => {
  var result = n - Math.floor(n) !== 0;
  if (result && n < 1) return true;
  else return false;
};

export const getDifferenceInDaysFromNow = (
  stakedTimestamp,
  minStakingPeriod,
) => {
  console.log('stakedTimestamp => ', stakedTimestamp);
  var stakedAt = moment(stakedTimestamp * 1000).format('MMM DD h:mm A');
  var stakedAtObj = moment(stakedAt);

  let minStakingDays = (minStakingPeriod * 1000) / (60 * 60 * 24 * 1000);

  console.log(stakedAt);
  var nextLimitDate = moment(stakedTimestamp * 1000)
    .add(minStakingDays, 'days')
    .format('MMM DD h:mm A');

  console.log({ nextLimitDate });
  console.log(typeof stakedAtObj);
  var now = moment().format('MMM DD h:mm A');
  var nowObj = moment(now);
  console.log(now);
  console.log(typeof nowObj);
  var diff = nowObj.diff(nextLimitDate);
  console.log(diff);
  var duration = moment.duration(diff, 'milliseconds');
  var days = duration.asDays();
  console.log(days);

  let roundedDays = Math.abs(Math.round(days));

  if (roundedDays === 0) {
    let hours = Math.abs(duration.hours());

    if (hours > 0) {
      return `${Math.abs(duration.hours())} hour(s)`;
    } else {
      return `${Math.abs(duration.asMinutes())} min(s)`;
    }
  } else {
    return `${roundedDays} day(s)`;
  }
};
