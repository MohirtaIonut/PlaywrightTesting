
import { test } from "../../src/fixture/TestFixture";

test('POM Test in playwright', async ({ page, homePage, resultPage, playlistPage }) => {

    await homePage.goToURL();
    await homePage.acceptAllButton();
    await homePage.searchWithKeywords(`${process.env.SEARCH_KEYWORDS}`);
    await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORDS}`)
    await playlistPage.validatePageTitle(`${process.env.SEARCH_KEYWORDS}` + '-YouTube');


});