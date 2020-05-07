"use strict"; //严格模式
// 获取div
const divDom = document.getElementById("table-data-wrap"); //获取元素
const divDom1 = document.getElementById("aaa"); //获取元素
console.log(divDom);
//固定语法
const tableDom = document.createElement("table"); //创建DOM元素

tableDom.width = "100%";
tableDom.setAttribute("border", "0"); //设置属性
tableDom.setAttribute("cellpadding", "0");
tableDom.setAttribute("cellspacing", "0");
tableDom.setAttribute("id", "table-data-wrap");
let aa = tableDom.getAttribute("id"); //获取属性

// tableDom.innerHTML = "卢本伟牛逼";//改DOM元素的内容
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
