export default function GetText({ keys, lang, data }) {
  if (!data) {
    return;
  }
  let results;

  const found = data.filter((item) => item.translation_key === keys);

  if (found.length === 0) {
    results = "no translation";
    // console.log(found.length, found, keys)
  } else {
    const jsonString = found[0]?.translation; // Assuming found[0]?.translation contains the JSON string with potential control characters

    try {
      const parsedJSON = JSON.parse(jsonString);
      const translate = parsedJSON.find((item) => item.language === lang);
      if (translate) {
        results = translate.translation;
      } else {
        results = found[0].english;
      }
    } catch (error) {
      // If parsing fails, try to clean the JSON string by escaping control characters
      const cleanedJSONString = jsonString.replace(/[\n\r\t]/g, (char) => {
        switch (char) {
          case "\n":
            return "";
          case "\r":
            return "";
          case "\t":
            return "";
          // Add more cases for other control characters if needed
          default:
            return char;
        }
      });

      try {
        const parsedJSON = JSON.parse(cleanedJSONString);
        const translate = parsedJSON.find((item) => item.language === lang);
        if (translate) {
          results = translate.translation;
        } else {
          results = found[0].english;
        }
      } catch (error) {
        console.error("Error parsing JSON:", error.message);
      }
    }
    // console.log(keys, found[0]?.translation)
    // const ff = JSON.parse(found[0]?.translation);
    // console.log(ff)
  }
  return results;
}
