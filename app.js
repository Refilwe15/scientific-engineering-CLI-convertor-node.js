//For Temperature


function temperature(value, unit) {
    if (unit === 'celsius') {
        return (value * 9/5) + 32;
    } else if (unit === 'fahrenheit') {
        return (value - 32) * 5/9; 
    }
}


//For Decimals
function decimalToFraction(value, unit) {
    if (unit === 'fraction') {
        return value / 100; 
    } else if (unit === 'decimal') {
        return value * 100; 
    }
}

//for scientific
function scientificNotation(value, unit) {
    if (unit === 'scientific') {
        return value.toExponential();
    } else if (unit === 'normal') {
        return parseFloat(value).toFixed(2);
    }
}

//for Metric 

function metricConvertor(value, fromUnit, toUnit) {
    const prefixes = {
        'G': 1e9,
        'M': 1e6,
        'k': 1e3,
        'h': 1e2,
        'da': 1e1,
        '': 1, 
        'd': 1e-1,
        'c': 1e-2,
        'm': 1e-3,
        'µ': 1e-6,
        'n': 1e-9,
        'p': 1e-12
    };

    const extractPrefix = (unit) => {
        return unit.replace(/Hz$/, ''); 
    };

    const fromPrefix = extractPrefix(fromUnit);
    const toPrefix = extractPrefix(toUnit);

    if (!(fromPrefix in prefixes) || !(toPrefix in prefixes)) {
        return "Invalid metric units";
    }

    const baseValue = value * prefixes[fromPrefix];
    const convertedValue = baseValue / prefixes[toPrefix];

    return `${convertedValue} ${toUnit}`;
}


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

    case 'scientific':
        ans = scientificNotation(value, unit);
        console.log("Result: " + ans);
        break;
        
        case 'metric':
    const fromUnit = args[2];
    const toUnit = args[3];
    const metricValue = parseFloat(args[4]);
    ans = metricConvertor(metricValue, fromUnit, toUnit);
    console.log("Result: " + ans);
    break;


    default:
        console.log("Unknown command. Use 'temperature' or 'decimal'.");
        break;
}
