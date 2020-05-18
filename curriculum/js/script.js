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

/**
 * 表头数据
 */
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

/**
 * 列表数据
 */
let tbodyHtml = `<tbody>`;

let trHtml = ``;
for (let i = 0; i < tableTbodyData.length; i++) {
  //块级作用域,子集作用域可以访问父集变量
  const data = tableTbodyData[i];
  //开始tr
  trHtml += `<tr>`;
  //头像
  trHtml += `<td>
                  <div class="face">
                      <span class="gender icon-${data.face.gender}"></span>
                      <img src="${data.face.img}" alt="">
                  </div>
             </td>`;
  //姓名
  trHtml += `<td>
                  <div class="people-name">
                      <h4 class="name">${data.name.trueName}</h4>
                      <span class="nickname option-05 fs-12">${data.name.nickName}</span>
                  </div>
             </td>`;
  //性别
  trHtml += `<td>
                  <div class="gender-wrap">
                      <span class="gender icon-girl${
                        data.face.gender === "girl" ? "" : " option-05"
                      }"></span>
                      <span class="gender icon-boy${
                        data.face.gender === "boy" ? "" : " option-05"
                      }"></span>
                  </div>
              </td>`;
  //年龄
  trHtml += `<td>
                <div class="age text-center">
                    <p>25</p>
                    <span class="option-05 fs-12">（单身狗）</span>
                </div>
              </td>`;
  //结束tr
  trHtml += `</tr>`;
}
tbodyHtml += `${trHtml}</tbody>`;

// 生成表头+生成table内容
tableDom.innerHTML = theadHtml + tbodyHtml;
// 添加到页面
divDom.appendChild(tableDom);
