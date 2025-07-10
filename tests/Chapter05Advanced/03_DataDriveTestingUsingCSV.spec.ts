//Import playwright module
import { test, expect } from '@playwright/test';

import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

type TestRecords = {

    Skill1: string,
    Skill2: string,
}

const records = parse(

    fs.readFileSync(path.join(__dirname, '../../test-data/qa/testdata.csv')),
    {
        columns: true,
        skipEmptyLines: true
    }
) as TestRecords[]

for (const record of records) {

    test(`Testing using csv file : ${record.Skill1}`, async ({ page }) => {
        //
        //Go to URL
        // await page.goto(process.env.GOOGLE_URL); este string undefined si go to accepta doar string
        await page.goto(`${process.env.GOOGLE_URL}`); //asa este template string


        await page.getByRole('button', { name: 'Acceptă tot' }).click();

        await page.getByRole('combobox', { name: 'Caută' }).fill(record.Skill1);
        //await page.getByRole('combobox', { name: 'Caută' }).press('Enter');

        console.log(record);

    });
}