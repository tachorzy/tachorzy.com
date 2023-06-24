
export const PLACES_TRAVELLED: Map<string, { coverImageURL: string, isoCode: string, destinations: string[] }> = new Map([
        ["The Netherlands", { coverImageURL: "/travel/Netherlands/country_cover.jpg", isoCode: "NL", destinations: ["Amsterdam"] }],
        ["Greece", { coverImageURL: "/travel/Greece/country_cover.jpg", isoCode: "GR", destinations: ["Athens"] }],
        ["Palestine",{ coverImageURL: "/travel/Palestine/country_cover.jpg", isoCode: "PS", destinations: ["Jerusalem", "Bethlehem", "Battir", "Dheisha", "Ramallah", "Nablus"] }],
        ["Jordan", { coverImageURL: "/travel/Jordan/country_cover.jpg", isoCode: "JO", destinations: ["Amman", "Wadi Musa"] }],
        ["Lebanon", { coverImageURL: "/travel/Lebanon/country_cover.jpg", isoCode: "LB", destinations: ["Beirut", "Chouf", "Aannaya", "Batroun", "Byblos", "Tripoli", "Bcharre"] }],
        ["Mexico", { coverImageURL: "/travel/Mexico/country_cover.jpg", isoCode: "MX", destinations: ["CDMX", "Taxco"] }],
        ["Türkiye", { coverImageURL: "/travel/Turkey/country_cover.jpg", isoCode: "TR", destinations: ["İstanbul", "Urfa", "Diyarbakır", "Mardin"] }],
        ["Iraq", { coverImageURL: "/travel/Iraq/country_cover.jpg", isoCode: "IQ", destinations: ["Baghdad", "Erbil"] }],
        ["Egypt", { coverImageURL: "/travel/Egypt/country_cover.jpg", isoCode: "EG", destinations: ["Cairo"] }
    ]
]);