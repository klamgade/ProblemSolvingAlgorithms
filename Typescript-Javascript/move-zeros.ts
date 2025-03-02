// FUNCTION moveZeroes(nums):
//     lastNonZeroIndex = 0  // Pointer to track where next non-zero should go

//     FOR i FROM 0 TO length of nums - 1:
//         IF nums[i] is NOT 0:
//             SWAP nums[i] and nums[lastNonZeroIndex]
//             INCREMENT lastNonZeroIndex

const moveZeroes = (nums: number[]): void => {
    let lastNonZeroIndex = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            [nums[i], nums[lastNonZeroIndex]] = [nums[lastNonZeroIndex], nums[i]];
            lastNonZeroIndex++;
        }
    }
};
