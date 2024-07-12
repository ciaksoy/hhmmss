
This function converts a given number of seconds into a formatted time string. It supports various time formats, including hours, minutes, and seconds, and adjusts the output based on the provided format string.

## Installation
``
npm install @ciaksoy/hhmmss
``

## Function Signature

```typescript
export default function(fromSeconds: number, format: string): string;
```

## Parameters

-   **fromSeconds** (`number`): The time in seconds that you want to convert.
-   **format** (`string`): The format string that specifies how the time should be formatted. The format can include placeholders for hours (`HH`), minutes (`MM`), and seconds (`SS`).

## Description

The `formatTime` function takes an input time in seconds and formats it according to the specified format string. The function supports the following placeholders in the format string:

-   `HH`: Hours
-   `MM`: Minutes
-   `SS`: Seconds

### Example Usage

```javascript
import formatTime from './formatTime';
```

```javascript
const time1 = formatTime(3661, 'HH:MM:SS'); // "01:01:01" 
const time2 = formatTime(61, 'MM:SS'); // "01:01" 
const time3 = formatTime(59, 'SS'); // "59" 
const time4 = formatTime(3661, 'MM:SS'); // "61:01" 
const time5 = formatTime(3661, 'SS'); // "3661" 
const time6 = formatTime(3661, '(HH:)MM:SS'); // "01:01:01" 
const time7 = formatTime(361, '(HH:)MM:SS'); // "06:01" 
const time8 = formatTime(61, '(MM:)SS'); // "01:01" 
const time9 = formatTime(1, '(MM:)SS'); // "01" 
const time10 = formatTime(3661, '(HH:)(MM:)SS'); // "01:01:01" 
const time11 = formatTime(61, '(HH:)(MM:)SS'); // "01:01" 
const time12 = formatTime(1, '(HH:)(MM:)SS'); // "01" 
const time13 = formatTime(60, 'MM:SS'); // "01:00" 
const time14 = formatTime(3600, 'HH:MM:SS'); // "01:00:00" 
const time15 = formatTime(0, 'HH:MM:SS'); // "00:00:00" 
const time16 = formatTime(0, '(HH:)(MM:)SS'); // "00"
```

### Features

-   **Dynamic Adjustment**: If the format string does not include hours (`HH`), the hours are added to the minutes. Similarly, if the format string does not include minutes (`MM`), the minutes are added to the seconds.
-   **Flexible Formatting**: The format string can include optional placeholders within parentheses. If the value for a placeholder is zero, the placeholder and its parentheses are removed from the output.

## Implementation Details

1.  **Calculation**: The function first calculates the hours, minutes, and seconds from the input `fromSeconds`.
2.  **Adjustment**: The function adjusts the minutes and seconds based on the absence of hours and minutes in the format string.
3.  **Replacement**: The function creates a replacements object with zero-padded string representations of hours, minutes, and seconds.
4.  **Formatting**: The function processes the format string to handle optional placeholders within parentheses and replaces the placeholders with the corresponding values from the replacements object.

### Edge Cases

-   If the input seconds are less than 60, and the format string includes hours or minutes, the output will properly display `00` for those components.
-   If the input seconds are exactly 0, the output will be `00:00:00` or equivalent based on the format string.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements or bug fixes.