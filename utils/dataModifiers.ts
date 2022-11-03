import Moment from "moment";

export const handleGetFullDateWithTime = (date: any) => {
  Moment.locale("en");
  return Moment(date).format("DD MMMM YYYY, h:mm a");
};

export const handleGetFullDateWithoutTime = (date: any) => {
  Moment.locale("en");
  return Moment(date).format("DD MMMM YYYY");
};

export const handleGetDateMonth = (date: any) => {
  Moment.locale("en");
  return Moment(date).format("D MMM");
};

export const handleGetDateNewMonth = (date: any) => {
  Moment.locale("en");
  return Moment(date).format("Do MMM");
};

export const handleGetOnlyTime = (date: any) => {
  Moment.locale("en");
  return Moment(date).format("h:mm a");
};

export const getPercentage = (target: number, acheived: number) => {
  return (acheived / target) * 100;
};

export const getTimeInMin = (value: any) => {
  return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : "00");
};

export const getDateWithDash = (date: any) => {
  Moment.locale("en");
  return Moment(date).format("DD-MM-YYYY");
};

export const getDateWithDay = (date: any) => {
  Moment.locale("en");
  return Moment(date).format("dddd, DD MMMM YYYY");
};

export const getDaysDifferenceFromToday = (to: any) => {
  Moment.locale("en");
  return Moment().to(Moment(to));
};

export const getDocument = (
  documents: any,
  required: any,
  number?: boolean
) => {
  let details: any = {};
  documents?.map((document: any) => {
    if (document?.type == required) {
      details = {
        name: number ? document?.number : document?.name,
        file: document?.file_aws,
      };
      return;
    }
  });
  return details;
};

export const handlePrefillFiles = (pathName: any, fileName: any) => {
  let tempFileObj: any = {
    path: pathName,
    name: fileName,
  };
  return tempFileObj;
};