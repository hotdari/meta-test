const express = require('express');
const router = express.Router()
const path = require('path');

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://demo-mpm.imqa.io/mpm/411/dashboard');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'),{ogImage: 'example.png'})
})

module.exports = router