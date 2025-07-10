import { Locator, Page } from "@playwright/test";


export class HomePage {

    readonly page: Page;

    readonly searchTextbox: Locator;

    readonly acceptAll: Locator;
    constructor(page: Page) {

        this.page = page;

        //you can declare all elements
        this.searchTextbox = page.getByRole('combobox', { name: 'Caută' });
        this.acceptAll = page.getByRole('button', { name: 'Acceptă tot' });
    }

    //Here youcan declare Methods

    async goToURL() {

        await this.page.goto(`${process.env.GOOGLE_URL}`);

    }

    async searchWithKeywords(keywords: string) {

        await this.searchTextbox.click();
        await this.searchTextbox.fill(keywords);
        await this.searchTextbox.press('Enter');
        

    }

    async acceptAllButton() {

        await this.acceptAll.click();

    }


}