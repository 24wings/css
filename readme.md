
[w3c css参考文档](http://www.w3school.com.cn/css/index.asp)

# 内容纲领

css教程主要涉及到

* 选择器
* 样式
* 盒模型

## 选择器

```css
/*选择器*/
selector {
    属性名:属性值;
}

/*选择器分组 */
h1,h2,h3,h4,h5{
    color:green;
}
/**派生选择器 */
li strong{
    font-style:italic;
}

/** id选择器 */
#red{
    color:red;
}
/**类选择器 */
.center{
    text-align:center;
}

/** 属性选择器*/
[title]{
    color:red;
}

```
[通配符属性选择器](http://www.w3school.com.cn/css/css_syntax_attribute_selector.asp)

> 层叠样式表插入有三种,外联,内联,元素。整站开发用外联方便复用。
单个文档需要特殊样式用内联。单个元素需要特殊样式直接在元素上使用。

层叠的权级上: 元素样式>内联样式>外联样式
## css的权级问题

参考文档 [CSS选择器的权重与优先规则](http://www.nowamagic.net/csszone/css_SeletorPriorityRules.php)

选择器|权重 |案例
|---|---|---|
内联样式|1000 | ``<h1 style="color:red"></h1>``
id选择器|100 | #red
类,伪类,属性选择器 | 10| .red , .red:hover,[red]
元素,伪元素选择器 | 1  | p ,p:after,p:before

案例
选择器|权重计算|最终结果
-|-|-
``#HEADER #LEFT UL LI .FIRST A``   | 1000+1000+1+1 |2002


>总结:

* 权重:权重高的规则优先显示
* 优先:同等权重,后定义的规则优先


## 样式

样式主要讲解以下分类

* 背景


### 背景

属性名 |默认值 |含义
-|-|-
background-color|transparent|  背景颜色默认透明
background-image| none |默认没有背景图片
background-repeat | repeat | 默认背景x,y都重复，可选repeat-x,repeat-y,repeat,unset
background-position|  | 可选值top,bottom,left,right,center ,0% 0%是左上角,100% 100%是右下角,50% 50% 上居中， [小案例 demo1](demos/demo1/demo1.html)
background-attachment|scroll | 默认情况下随着文档滚动,设置fixed会固定在背景上 [w3c 案例](http://www.w3school.com.cn/tiy/t.asp?f=csse_background-attachment)


### 文本 text

属性名| 默认值 |含义
-|-|-|
text-indent | 不同元素不同,一般css reset |文本缩进 ,例如 text-indent:5em
text-align |  根据语言顺序  | 文本对齐
word-spacing| normal 即0 |字,单词间隔 例如 3px,支持负数
letter-spacing | normal 即 0 |字母间隔
text-transform |  none | 字母大小写转换 uppercase，lowercase，none,capitalize
text-decoration | 元素不同,例如a   |  underline ,overline,line-through,blink ,可以并行使用
white-spacing | normal  |处理空白字符,默认值normal将回车等空白字符合并成一个空白字符,pre值不合并回车等空白字符,no-warp不允许换行 [w3c 小案例](http://www.w3school.com.cn/tiy/t.asp?f=csse_text_white-space_normal)
direction | 国家语言 | ltr (left to right)从左到右,rtl (从右到左)


#### [white-spacing](http://www.w3school.com.cn/tiy/t.asp?f=csse_text_white-space_pre-wrap)

属性值|合并空白字符和回车 |自动换行
-|-|-|
normal | 合并 | 自动换行
nowrap | 合并 | 不换行
pre | 不合并 | 不换行
pre-wrap| 不合并 |自动换行
``preline`` | 只合并空白字符，不合并回车 | 自动换行


### 字体  font

属性| 默认值 |含义
font-family | 用户代理设置的默认字体 |5种通用字体 Serif ,Sans-serif ,Monospace ,Cursive,Fantasy; 也可以指定次序查找
font-style| normal | italic倾斜,和oblique外观一样
font-weight| normal 即400 | 1-9级  100最细 normal是400 700等于blod 900最粗
font-size | 用户代理默认值 | px,em的区别

font-size 的属性使用

绝对值 |相对值
-|-
文本固定大小 px | 相对于环境,元素的大小 em
w3c推荐使用em字体尺寸
1em = 用户代理的默认的字体大小
2em=2倍字体大小


### 链接 a

伪类 |  含义
a:link| 未访问的链接
a:visited | 已经访问的链接
a:hover | 划过链接
a:active | 正在被点击的链接

设置4个属性的时候  a:link >a:visited>a:hover>active;

### 列表

属性|默认值|
-|-
list-style|none |样式值
list-style-image| none | image(url) [设置列表图片](http://www.w3school.com.cn/tiy/t.asp?f=csse_list-style-image)


### 表格

折叠表单
table{
    border-collapse:collapse;
};



### 盒模型与

外边框合并问题



### 定位

内容定位

overflow | 设置溢出效果,默认visible ,overflow ,scroll,auto 浏览器自动决定
vertical-align  |  竖值排版,midlle,text-top,text-bottom等 [w3c案例](http://www.w3school.com.cn/cssref/pr_pos_vertical-align.asp)
clip | 裁剪元素 | 上右下左
zindex |0 |[w3c 案例](http://www.w3school.com.cn/tiy/t.asp?f=csse_zindex2)



* [relative属性案例](demos/demo5/demo5.html) 
* [position绝对定位案例](demos/demo6/demo6.html)
* [float 定位](http://www.w3school.com.cn/css/css_positioning_floating.asp)

定位方式|是否脱离文档 |相对元素
absolute | 脱离 | 父类元素
relative | 不脱离 | 自身
float | 脱离 | 父类元素,流动文档的特色

# css高级

* 对齐

 margin居中
> margin-left:auto;
> margin-right:auto;

position 实现左右对齐
float: 实现左右对齐
