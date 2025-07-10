//Import playwright module
import { test, expect } from '@playwright/test';
//

import testData from '../../test-data/qa/testdata.json';

type TestData = {

    TestDataSet1: {
        Skill1: string,
        Skill2: string,
    },

    TestDataSet2: {
        Skill1: string,
        Skill2: string,
    }
}

const typedTestData = testData as TestData;

for (const dataSetName in typedTestData) {

    const skill = typedTestData[dataSetName as keyof TestData];
    test(`Data Driven Testing using JSON file in playwright :${skill.Skill1}`, async ({ page }) => {
        //
        //Go to URL
        // await page.goto(process.env.GOOGLE_URL); este string undefined si go to accepta doar string
        await page.goto(`${process.env.GOOGLE_URL}`); //asa este template string


        await page.getByRole('button', { name: 'Acceptă tot' }).click();

        await page.getByRole('combobox', { name: 'Caută' }).fill(skill.Skill1);
        //await page.getByRole('combobox', { name: 'Caută' }).press('Enter');

        console.log(skill);
});
}


