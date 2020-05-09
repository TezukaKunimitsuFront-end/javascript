(function () {
  "use strict"; //严格模式
  //命名空间
  if (!window.Tezuka) {
    window.Tezuka = {};
  }

  const jsonObj = {
    //键key/值value
    name: "张三",
    age: 18,
  };

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
  window.Tezuka.$ = $;
  /**
   * 创建元素
   */
  function createEl(node) {
    return document.createElement(node);
  }
  window.Tezuka.createEl = createEl;
  /**
   *设置节点属性
   */
  function setAttr(node, styles) {
    for (let key in styles) {
      node.setAttribute(key, styles[key]);
      //每次只能设置一个属性
    }
  }
  window.Tezuka.setAttr = setAttr;
  /**
   * 获取节点属性
   */
  function getAttr(node, attr) {
    return node.getAttribute(attr);
  }
  window.Tezuka.getAttr = getAttr;
})();

//  window 全局

//  作用域

//  自动执行函数,防止污染 防止与第三方库命名重复
