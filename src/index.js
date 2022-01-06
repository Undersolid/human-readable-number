module.exports = function toReadable (number) {
  return number.toString ();
}
  const numberAsString = {
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
        "20": "twenty",
        "30": "thirty",
        "40": "forty",
        "50": "fifty",
        "60": "sixty",
        "70": "seventy",
        "80": "eighty",
        "90": "ninety",
      };

      const decimalAsString = {
        "3": "hundred",
        "6": "thousand",
        "9": "million",
        "12": "billion",
      };

      function splitNumber(number) {
        const numArr = [];

        while (number) {
          const hundred = number % 1000;
          numArr.push(hundred.toString().padStart(3, "0"));
          number = ~~(number / 1000);
        }

        return numArr.reverse();
      }

      function toReadable(number) {
        if (~~number !== number) {
          throw new Error("Bro... only integers =)");
        }

        const isNegative = number < 0;
        const tempNumber = isNegative ? Matn.abs(number) : number;
        const numArr = splitNumber(tempNumber);
        const result = [];

        if (numArr.length === 0) {
          return "zero";
        }

        for (let i = 0; i < numArr.length; i++) {
          const num = numArr[i];
          const decimal = (numArr.length * 3 + 3) - (i * 3 + 3);
          const doubleNum = numberAsString[num[1] + num[2]];
          const withZero = numberAsString[num[1] + "0"] || "zero";
          const lastNum = numberAsString[num[2]] || "zero";

          if (num === "000") {
            continue;
          }

          if (num[0] !== "0") {
            result.push(numberAsString[num[0]]);
            result.push(decimalAsString[3]);
          }

          if (doubleNum) {
            result.push(doubleNum);
          } else if (withZero !== "zero") {
            result.push(withZero);
          }

          if (!doubleNum && lastNum !== "zero") {
            result.push(lastNum);
          }

          if (decimal !== 3) {
            result.push(decimalAsString[decimal]);
          }
        }

        return result.join(" ");
      };

      module.exports = toReadable;
