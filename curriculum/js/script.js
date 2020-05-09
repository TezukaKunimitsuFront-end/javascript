"use strict"; //严格模式

// 获取div
const divDom = window.Tezuka.$("container-wrap");
//固定语法
// const tableDom = createEl("table"); //创建DOM元素
const tableDom = window.Tezuka.createEl("table"); //创建DOM元素
const styles = {
  border: "0",
  cellpadding: "0",
  cellspacing: "0",
  width: "100%",
  id: "table-data-wrap",
};
window.Tezuka.setAttr(tableDom, styles);

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

let theadHtml = `<thead><tr>`;

tableTheadData.forEach((item) => {
  //监测是否有width
  let width = item.width ? `width="${item.width}"` : "";
  //监测是否有id
  let id = item.id ? ` id = "${item.id}"` : "";
  // 字符串拼接
  theadHtml += `<th ${width}${id}>${item.lable}</th>`;
});
theadHtml += `</tr></thead>`;

// 生成表头
tableDom.innerHTML = theadHtml;
divDom.appendChild(tableDom);
