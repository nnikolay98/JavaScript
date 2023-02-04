function readingtime(input){
    let pagesInBook = Number(input[0]);
    let pagesForHours = Number(input[1]);
    let daysForReading = Number(input[2]);
    let neededTime = pagesInBook / pagesForHours // result is the pages which can read for hour
    let neededDays = neededTime / daysForReading // result is the hours which should read
    console.log(neededDays);

}
readingtime([212, 20, 2,])