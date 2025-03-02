const removeDuplicates = (nums: number[]): number => {
    try {
        // Edge case: If array is empty, return 0
        if (nums.length === 0) {
            console.warn("Input array is empty.");
            return 0;
        }

        let i = 0; // Pointer to track the position of the last unique element

        // Iterate through the array
        for (let j = 1; j < nums.length; j++) {
            if (nums[j] !== nums[i]) {
                i++; // Move to the next position for a unique element
                nums[i] = nums[j]; // Place the unique element at the correct position
            }
        }

        // Log the modified array (for debugging)
        console.log("Modified array with unique elements:", nums.slice(0, i + 1));

        // Return the new length of the modified array
        return i + 1;
    } catch (error) {
        console.error("An error occurred:", error);
        return -1; // Indicating failure
    };
}