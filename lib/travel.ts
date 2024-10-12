
export const PLACES_TRAVELLED: Map<string, { coverImageURL: string, yearVisited: string, isoCode: string, destinations: string[]}> = new Map([
        ["El Salvador", { coverImageURL: "/travel/ElSalvador/country_cover.jpg", yearVisited: "2024", isoCode: "SV", destinations: ["San Salvador", "Santa Ana", "Suchitoto"]}],
        ["The Netherlands", { coverImageURL: "/travel/Netherlands/country_cover.jpg", yearVisited: "2023", isoCode: "NL", destinations: ["Amsterdam"]}],
        ["Greece", { coverImageURL: "/travel/Greece/country_cover.jpg", isoCode: "GR", yearVisited: "2023", destinations: ["Athens"] }],
        ["Jerusalem & the West Bank",{ coverImageURL: "/travel/Palestine/country_cover.jpg", yearVisited: "2023", isoCode: "PS", destinations: ["Jerusalem", "Bethlehem", "Battir", "Ramallah", "Nablus"] }],
        ["Jordan", { coverImageURL: "/travel/Jordan/country_cover.jpg", isoCode: "JO", yearVisited: "2023", destinations: ["Amman", "Wadi Musa"] }],
        ["Lebanon", { coverImageURL: "/travel/Lebanon/country_cover.jpg", isoCode: "LB", yearVisited: "2023", destinations: ["Beirut", "Tripoli", "Bcharre", "Chouf", "Aannaya", "Batroun", "Byblos"] }],
        ["Mexico", { coverImageURL: "/travel/Mexico/country_cover.jpg", isoCode: "MX", yearVisited: "2022", destinations: ["CDMX", "Taxco"] }],
        ["Türkiye", { coverImageURL: "/travel/Turkey/country_cover.jpg", isoCode: "TR", yearVisited: "2022", destinations: ["İstanbul", "Diyarbakır", "Mardin"] }],
        ["Iraq", { coverImageURL: "/travel/Iraq/country_cover.jpg", isoCode: "IQ", yearVisited: "2022", destinations: ["Baghdad", "Erbil"] }],
        ["Egypt", { coverImageURL: "/travel/Egypt/country_cover.jpg", isoCode: "EG", yearVisited: "2022", destinations: ["Cairo"] }]
]);