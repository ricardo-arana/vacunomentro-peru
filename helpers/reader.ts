


const req = require('tinyreq');
import * as cheerio from 'cheerio';

export function scrape (url: string) {

    const promesa: Promise<any> = new Promise( (resolve, reject) => {
        req(url, (err, body) => {
            if (err) { return reject(err) }
    
            // 2. Parse the HTML
            let $ = cheerio.load(body);
            let data: string[] = [];
            $('div.font-bold.text-3xl').each( (index, el) => {
                const element = el.children[0]['data'] as string;
                data.push(element);
            });
            data = [...data.map(v => v.replace(/,/g, ''))];

            const firtsDose = Number(data[0]);
            const secondDose = Number(data[1]);
            const firtsDoseYesterday = Number(data[2]);
            const secondDoseYesterdayYesterday = Number(data[3]);
            const totalDose = Number(data[4]);
            const totalYesterday = Number(data[5]);
            const totalBothDose = Number(data[6]);

            
            resolve({
                firtsDose,secondDose,firtsDoseYesterday, secondDoseYesterdayYesterday, totalDose, totalYesterday, totalBothDose
            });
        })
        
    });

    return promesa
}
