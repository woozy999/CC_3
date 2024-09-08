//coding challenge 3

//part 1

function calculateAverageSales(salesArray) {
    
    let totalSales = salesArray.reduce((sum,sale) => sum + sale, 0);

    let averageSales = totalSales / salesArray.length;

    return averageSales;
}

//part 2

function determinePerformnaceRating(averageSales) {

    if (averageSales > 10000) {
        return "Excellent";
    }
    else if (averageSales >= 7000 && averageSales <= 10000) {
        return "Good";
    }
    else if (averageSales >= 4000 && averageSales <= 7000) {
        return "Satisfactory";
    }
    else {
        return "Needs Improvement";
    }
}

//part 3

function findTopAndBottomPerformers(salesPeople) {

    let topPerformer = salesPeople.reduce((top, current) => {
        return current.totalSales > top.totalSales
    });

    let bottomPerformer = salesPeople.reduce((bottom, current) => {
        return current.totalSales < bottom.totalSales ? current : bottom;
    });

    return {
        topPerformer: topPerformer,
        bottomPerformer: bottomPerformer
    };
}