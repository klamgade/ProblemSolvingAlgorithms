class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        try {
            // Validate input to ensure it's a non-empty string
            if (!Solution.isValidInput(s)) {
                console.error("Invalid input: Input must be a non-empty string.");
                return false;
            }

            // Corrected mapping: Closing brackets map to their expected opening brackets
            const bracketPair = new Map([
                [')', '('],
                ['}', '{'],
                [']', '[']
            ]);

            let stack = [];

            for (const char of s) {
                if (bracketPair.has(char)) {  // If it's a closing bracket
                    let lastBracket = stack.pop(); // Pop from stack
                    if (lastBracket !== bracketPair.get(char)) { // Check if it matches expected opening bracket
                        return false;
                    }
                } else {  
                    // If it's an opening bracket, push to stack
                    stack.push(char);
                }
            }

            // At the end, stack should be empty if it's a valid sequence
            return stack.length === 0;
        } catch (error) {
            console.error("Error:", error);
            return false;
        }
    }

    // Utility function to validate the input
    static isValidInput(input) {
        return typeof input === "string" && input.trim().length > 0;
    }
}

// Example Test Cases
const solution = new Solution();
console.log(solution.isValid("()"));      // ✅ true
console.log(solution.isValid("()[]{}"));  // ✅ true
console.log(solution.isValid("(]"));      // ❌ false
console.log(solution.isValid("([)]"));    // ❌ false
console.log(solution.isValid("{[]}"));    // ✅ true
console.log(solution.isValid(""));        // ❌ false (Invalid input)
console.log(solution.isValid("]["));      // ❌ false
console.log(solution.isValid(123));       // ❌ false (Invalid input)
