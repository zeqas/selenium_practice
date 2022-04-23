require('dotenv').config() //載入.env環境檔
const webdriver = require('selenium-webdriver') // 加入虛擬網頁套件
const chrome = require('selenium-webdriver/chrome')
const options = new chrome.Options()
options.addArguments('--log-level=3') // 這個option可以讓你跟網頁端的console.log說掰掰
const path = require('path') // 用於處理文件路徑的小工具
const fs = require("fs") // 讀取檔案用

async function openCrawlerWeb() {
  if (!checkDriver()) {// 檢查driver是否設定，如果無法設定就結束程式
    return
  }
  let driver
  try {
    // 建立這個Browser的類型
    driver = await new webdriver.Builder().forBrowser("chrome").withCapabilities(options).build()
  } catch (e) {
    console.error('無法建立瀏覽器!')
    console.error(e)
    return
  }
  const web = 'https://sus4myself-blog.netlify.app/' // 填寫你想要前往的網站
  driver.get(web) // 透過這個driver打開網頁
}
openCrawlerWeb() // 打開爬蟲網頁