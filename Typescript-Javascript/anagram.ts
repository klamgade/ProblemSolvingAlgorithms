class Anagram {

    static isAnagram(firstString: string, secondString: string): boolean {
        try {
            console.info('Checking if the strings are anagrams...');

            // Validate inputs
            if (!this.isValidInput(firstString) || !this.isValidInput(secondString)) {
                console.error("Invalid input: Both inputs must be non-empty strings.");
                return false;
            }
            if (firstString.length != secondString.length) return false;

            // Create a HashMap to store character counts
            const charCount: Map<string, number> = new Map();

            for (const char of firstString) {
                charCount.set(char, (charCount.get(char) ?? 0) + 1);
            }

            for (const char of secondString) {
                const count = charCount.get(char);

                if (count === undefined || count === 0) {
                    console.log(`Mismatch found: '${char}' in second string is extra or exceeds the count in first string.`);
                    return false; // Extra or mismatched character
                }

                charCount.set(char, count - 1);
                
                // Remove character if count reaches zero (optimization)
                if (charCount.get(char)! === 0) {
                    charCount.delete(char);
                }
            }

            // Final check: If map is empty, the strings are anagrams
            const result = charCount.size === 0;
            console.log(`Result: ${result ? "Anagram ✅" : "Not an anagram ❌"}`);
            return result;
        } catch (error) {
            console.error("Unexpected error:", error);
            return false;
        }
    }

    // Utility method to validate input
    private static isValidInput(input: any): boolean {
        return typeof input === "string" && input.trim().length > 0;
    }
}

console.log(Anagram.isAnagram('hello', 'lleoh')); // true