import puppeteer from 'puppeteer'
import { Builder, Browser, By, Key, until, Alert, WebDriver, Condition } from 'selenium-webdriver'

class OpenPage {
    url: string
    driver: WebDriver

    constructor(url: string) {
        this.url = url
        this.driver = new Builder().forBrowser(Browser.CHROME).build()
    }


    async open() {


        try {

            const browser = await puppeteer.launch({
                browser: 'chrome',
                headless: false,
                defaultViewport:null,
            

            });
            const page = await browser.newPage();

            // Navigate the page to a URL
            await page.goto(this.url);

          

            await page.locator('input[name="txtLogin"]').fill('fsbonafinsmt')
            await page.locator('input[name="txtSenha"]').fill('setembro2024')


            await page.locator('button[name="btnLogin"]').click()

            await page.waitForNavigation()


            await page.goto('https://sisflora.sema.mt.gov.br/sisflora.app/empreendimento/gerenciar/0/5')

            const certificate = await page.waitForSelector('button[tooltip="Emitir Certificado"]')

            await certificate?.click()
        
            





        } catch (error) {
            return new Error("error get")
        }

    }
}


export default OpenPage