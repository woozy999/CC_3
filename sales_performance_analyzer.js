//coding challenge 3

//part 1

function calculateAverageSales(salesArray) {
    
    let totalSales = salesArray.reduce((sum,sale) => sum + sale, 0);

    let averageSales = totalSales / salesArray.length;

    return averageSales;
}
