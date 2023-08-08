const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "我的博客"; // 个人网站名字

const BLOG_URL = "https://www.fuyiran.icu"; // 个人网站链接（请填写完整链接）

const GITHUB = "https://github.com/xwysyy"; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "https://api.dujin.org/bing/1920.php"; // 背景图片url，默认为必应每日图片（第三方接口）

const SORT_DATA = [
  { sortId: 1, title: "博客线路" },
  { sortId: 2, title: "部署项目" }
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = ""; // 网站备案号，留空不显示

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "腾讯云主线路",
    subtitle: "https://www.fuyiran.icu",
    url: "https://www.fuyiran.icu",
    icon: "https://image.fuyiran.icu/img-icon/cube1.png"
  },
    {
    pageId: 2,
    sortId: 1,
    title: "Vercel线路",
    subtitle: "https://vercel.fuyiran.icu",
    url: "https://vercel.fuyiran.icu",
    icon: "https://image.fuyiran.icu/img-icon/cube2.png"
  },
    {
    pageId: 3,
    sortId: 1,
    title: "又拍云线路",
    subtitle: "https://blog.fuyiran.icu",
    url: "https://blog.fuyiran.icu",
    icon: "https://image.fuyiran.icu/img-icon/cube3.png"
  },
    {
    pageId: 4,
    sortId: 1,
    title: "Github线路",
    subtitle: "https://www.xwysyy.life",
    url: "https://www.xwysyy.life",
    icon: "https://image.fuyiran.icu/img-icon/cube4.png"
  },
    {
    pageId: 5,
    sortId: 1,
    title: "Netlify线路",
    subtitle: "https://netlify.fuyiran.icu",
    url: "https://netlify.fuyiran.icu",
    icon: "https://image.fuyiran.icu/img-icon/cube5.png"
  },
    {
    pageId: 6,
    sortId: 1,
    title: "Cloudflare线路",
    subtitle: "https://xwysyy.pages.dev",
    url: "https://xwysyy.pages.dev",
    icon: "https://image.fuyiran.icu/img-icon/cube6.png"
  },
    {
    pageId: 1,
    sortId: 2,
    title: "Lijz的魔方小站",
    subtitle: "https://cube.fuyiran.icu",
    url: "https://cube.fuyiran.icu",
    icon: "https://image.fuyiran.icu/img-icon/cube7.png"
  },
    {
    pageId: 2,
    sortId: 2,
    title: "xwysyy图床",
    subtitle: "https://tuchuang.fuyiran.icu",
    url: "https://tuchuang.fuyiran.icu",
    icon: "https://image.fuyiran.icu/img-icon/cube8.png"
  },
    {
    pageId: 3,
    sortId: 2,
    title: "xwysyy云盘",
    subtitle: "https://pan.fuyiran.icu",
    url: "https://pan.fuyiran.icu",
    icon: "https://image.fuyiran.icu/img-icon/cube9.png"
  },
    {
    pageId: 4,
    sortId: 2,
    title: "xwysyy ChatGPT",
    subtitle: "https://chatgpt.fuyiran.icu",
    url: "https://chatgpt.fuyiran.icu",
    icon: "https://image.fuyiran.icu/img-icon/cube10.png"
  }
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
  "鼠标滚轮上滑或点击下方箭头以查看个人网站"
]; // 在Logo下方显示的标题

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER
};
