function findIntersection(strArr:string[]): number[] | false {
    try {
        if (!Array.isArray(strArr) || strArr.length !== 2) throw new Error("Invalid input");

        const [firstString, secondString] = strArr;
        const firstArray = firstString.split(',').map(Number);
        const secondArray = secondString.split(',').map(Number);

        const intersection = firstArray.filter(value => secondArray.includes(value));
        return intersection.length > 0 ? intersection : false;
    } catch (error) {
        console.error("Error finding intersection:", error.message);
        return false;
    }
}

   
// keep this function call here 
console.log(findIntersection(["1, 3, '4', 7, 13", "1, 2, 4, '13', 15"]));