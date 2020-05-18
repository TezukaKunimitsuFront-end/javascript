"use strict"; //严格模式
/**
 * 表头数据
 */
const tableTheadData = [
  { lable: "头像" },
  { lable: "姓名" },
  { lable: "性别" },
  { lable: "年龄" },
  { lable: "手机号" },
  { lable: "国籍" },
  {
    lable: "爱好",
    width: 200,
    id: "aaa",
  },
  { lable: "头衔" },
  { lable: "操作" },
];

/**
 * 表内容列表
 */
const tableTbodyData = [
  {
    face: {
      gender: "boy",
      img:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583671638490&di=957e858d102bae600e6b5472843bdfe6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F20%2F20180220165946_RiGPS.thumb.700_0.jpeg",
    },
    name: {
      trueName: "卢本伟",
      nickName: "五五开",
    },
    age: {
      number: 29,
    },
    phone: {
      code: "+86",
      number: 188888888888,
    },
    country: {
      national_flag:
        "http://www.web-jshtml.cn/curriculum/javascript/images/china.jpg",
      name: "中国",
    },
    like: {},
    rank: {
      name: "小白",
      level: 2,
    },
  },
];
