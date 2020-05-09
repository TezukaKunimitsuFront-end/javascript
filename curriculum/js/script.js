"use strict"; //严格模式

/**
 * 获取id的DOM元素,有语义化
 * @param {string} id
 */
function $(id) {
  if (typeof id != "string") {
    throw new Error("bug来辣");
  }
  let dom = document.getElementById(id);
  if (!dom) {
    throw new Error("bug又来辣");
  }
  return dom;
}
/**
 * 创建元素
 */
function createEl(node) {
  return document.createElement(node);
}
/**
 *设置节点属性
 */
function setAttr(node, styles) {
  for (let key in styles) {
    node.setAttribute(key, styles[key]);
    //每次只能设置一个属性
  }
}
/**
 * 获取节点属性
 */
function getAttr(node, attr) {
  return node.getAttribute(attr);
}

// 获取div
const divDom = $("container-wrap"); //获取元素
//固定语法
const tableDom = createEl("table"); //创建DOM元素
const styles = {
  border: "0",
  cellpadding: "0",
  cellspacing: "0",
  width: "100%",
  id: "table-data-wrap",
};
setAttr(tableDom, styles);

let aa = getAttr(tableDom, "id");

tableDom.innerHTML = `<thead>
                        <tr>
                            <th>头像</th>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>年龄</th>
                            <th>手机号</th>
                            <th>国籍</th>
                            <th width="200">爱好</th>
                            <th>头衔</th>
                            <th>操作</th>
                        </tr>
                     </thead>`;

divDom.appendChild(tableDom);
