
export const PLACES_TRAVELLED: Map<string, { coverImageURL: string, isoCode: string, destinations: string[] }> = new Map([
        ["The Netherlands", { coverImageURL: "", isoCode: "NL", destinations: ["Amsterdam"] }],
        ["Greece", { coverImageURL: "", isoCode: "GR", destinations: ["Athens"] }],
        ["Palestine",{ coverImageURL: "", isoCode: "PS", destinations: ["Jerusalem", "Bethlehem", "Battir", "Dheisha", "Ramallah", "Nablus"] }],
        ["Jordan", { coverImageURL: "", isoCode: "JO", destinations: ["Amman", "Wadi Musa"] }],
        ["Lebanon", { coverImageURL: "", isoCode: "LB", destinations: ["Beirut", "Chouf", "Aannaya", "Batroun", "Byblos", "Tripoli", "Bcharre"] }],
        ["Mexico", { coverImageURL: "", isoCode: "MX", destinations: ["CDMX", "Taxco"] }],
        ["Türkiye", { coverImageURL: "", isoCode: "TR", destinations: ["İstanbul", "Urfa", "Diyarbakır", "Mardin"] }],
        ["Iraq", { coverImageURL: "", isoCode: "IQ", destinations: ["Baghdad", "Erbil"] }],
        ["Egypt", { coverImageURL: "", isoCode: "EG", destinations: ["Cairo"] }
    ]
]);