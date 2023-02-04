function projectHoursNeeded(input) {
    let name = input[0]
    let projects = Number(input[1])
    let timeForProject = Number(projects*3)
    console.log(`The architect ${name} will need ${timeForProject} hours to complete ${projects} project/s.`)

}
projectHoursNeeded(['Georgi', '4']);
