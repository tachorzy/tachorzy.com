
export const placesTravelled: Map<string, { endonym: string | null, coverImageURL: string, yearVisited: string, isoCode: string, destinations: string[]}> = new Map([
        ["El Salvador", { endonym: null, coverImageURL: "/travel/El%20Salvador/country_cover.jpg", yearVisited: "2024", isoCode: "SV", destinations: ["San Salvador", "Santa Ana", "Cerro Verde", "Ruta de las Flores", "Suchitoto", "Cinquera", "La Libertad"]}],
        ["The Netherlands", { endonym: null, coverImageURL: "/travel/The%20Netherlands/country_cover.jpg", yearVisited: "2023", isoCode: "NL", destinations: ["Amsterdam"]}],
        ["Greece", { endonym: null, coverImageURL: "/travel/Greece/country_cover.jpg", isoCode: "GR", yearVisited: "2023", destinations: ["Athens"] }],
        ["Jerusalem & the West Bank",{ endonym: null, coverImageURL: "/travel/Jerusalem%20&%20the%20West%20Bank/country_cover.jpg", yearVisited: "2023", isoCode: "PS", destinations: ["Jerusalem", "Bethlehem", "Battir", "Ramallah", "Nablus"] }],
        ["Jordan", { endonym: null, coverImageURL: "/travel/Jordan/country_cover.jpg", isoCode: "JO", yearVisited: "2023", destinations: ["Amman", "Wadi Musa"] }],
        ["Lebanon", { endonym: null, coverImageURL: "/travel/Lebanon/country_cover.jpg", isoCode: "LB", yearVisited: "2023", destinations: ["Beirut", "Tripoli", "Bcharre", "Chouf", "Aannaya", "Batroun", "Byblos"] }],
        ["Mexico", { endonym: null, coverImageURL: "/travel/Mexico/country_cover.jpg", isoCode: "MX", yearVisited: "2022", destinations: ["CDMX", "Teotihuacan", "Taxco"] }],
        ["Turkey", { endonym: "Türkiye", coverImageURL: "/travel/Turkey/country_cover.jpg", isoCode: "TR", yearVisited: "2022", destinations: ["Istanbul", "Diyarbakir", "Mardin"] }],
        ["Iraq", { endonym: null, coverImageURL: "/travel/Iraq/country_cover.jpg", isoCode: "IQ", yearVisited: "2022", destinations: ["Baghdad", "Erbil"] }],
        ["Egypt", { endonym: null, coverImageURL: "/travel/Egypt/country_cover.jpg", isoCode: "EG", yearVisited: "2022", destinations: ["Cairo"] }]
]);