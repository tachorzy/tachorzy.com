
export const PLACES_TRAVELLED: Map<string, { coverImageURL: string, isoCode: string, destinations: string[] }> = new Map([
        ["The Netherlands", { coverImageURL: "/travel/Netherlands/cover.jpg", isoCode: "NL", destinations: ["Amsterdam"] }],
        ["Greece", { coverImageURL: "/travel/Greece/cover.jpg", isoCode: "GR", destinations: ["Athens"] }],
        ["Palestine",{ coverImageURL: "/travel/Palestine/cover.jpg", isoCode: "PS", destinations: ["Jerusalem", "Bethlehem", "Battir", "Dheisha", "Ramallah", "Nablus"] }],
        ["Jordan", { coverImageURL: "/travel/Jordan/cover.jpg", isoCode: "JO", destinations: ["Amman", "Wadi Musa"] }],
        ["Lebanon", { coverImageURL: "/travel/Lebanon/cover.jpg", isoCode: "LB", destinations: ["Beirut", "Chouf", "Aannaya", "Batroun", "Byblos", "Tripoli", "Bcharre"] }],
        ["Mexico", { coverImageURL: "/travel/Mexico/cover.jpg", isoCode: "MX", destinations: ["CDMX", "Taxco"] }],
        ["Türkiye", { coverImageURL: "/travel/Turkey/cover.jpg", isoCode: "TR", destinations: ["İstanbul", "Urfa", "Diyarbakır", "Mardin"] }],
        ["Iraq", { coverImageURL: "/travel/Iraq/cover.jpg", isoCode: "IQ", destinations: ["Baghdad", "Erbil"] }],
        ["Egypt", { coverImageURL: "/travel/Egypt/cover.jpg", isoCode: "EG", destinations: ["Cairo"] }
    ]
]);