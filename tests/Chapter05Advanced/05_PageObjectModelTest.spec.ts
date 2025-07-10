import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';
import { ResultPage } from '../../src/pages/ResultPage';
import { PlaylistPage } from '../../src/pages/PlaylistPage';

test('POM Test in playwright', async ({ page }) => {

    //create object of HomePage
    const homePage = new HomePage(page);
    await homePage.goToURL();
    await homePage.acceptAllButton();
    await homePage.searchWithKeywords(`${process.env.SEARCH_KEYWORDS}`);

    //create object for ResultPage
const resultPage = new ResultPage(page);

await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORDS}`)



    //create object for PlaylistPage
const playlistPage = new PlaylistPage(page);

await playlistPage.validatePageTitle(`${process.env.SEARCH_KEYWORDS}` +'-YouTube');


});