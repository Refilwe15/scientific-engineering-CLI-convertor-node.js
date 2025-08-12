function temperature(value, unit) {
    if (unit === 'celsius') {
        return (value * 9/5) + 32;
    } else if (unit === 'fahrenheit') {
        return (value - 32) * 5/9; 
    }
}

function decimalToFraction(value, unit) {
    if (unit === 'fraction') {
        return value / 100; 
    } else if (unit === 'decimal') {
        return value * 100; 
    }
}

// Get arguments from CLI
const args = process.argv.slice(2);


const command = args[0];  
const value = parseFloat(args[1]); 
const unit = args[2]; 

let ans;

switch (command) {
    case 'temperature':
        ans = temperature(value, unit);
        console.log("Result: " + ans);
        break;

    case 'decimal':
        ans = decimalToFraction(value, unit);
        console.log("Result: " + ans);
        break;

    default:
        console.log("Unknown command. Use 'temperature' or 'decimal'.");
        break;
}
