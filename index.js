const weekPlan = {
    Mon: 'dantist',
    Tue: 'go to park',
    Wed: 'meet friends',
    Thu: 'learn',
    Fri: 'hard work',
    Sat: 'go to party'
}

function showPlans () {
    let askDay = prompt('Enter the day:')
    return alert(weekPlan[askDay])
}

showPlans()

