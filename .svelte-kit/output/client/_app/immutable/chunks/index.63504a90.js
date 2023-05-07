const l=async(t,r,a={})=>{const e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)},o=await fetch(t,{...e,...a}),d=await o.json();if(!o.ok)throw new Error(d.message||"Something went wrong");return d},n=`
id
type
title {
  userPreferred
}
coverImage {
  extraLarge
  large
  color
}
startDate {
  year
  month
  day
}
endDate {
  year
  month
  day
}
bannerImage
season
seasonYear
description
type
format
status(version: 2)
episodes
duration
chapters
volumes
favourites
trending
genres
isAdult
averageScore
popularity
trailer {
  id
  site 
}
nextAiringEpisode {
  airingAt
  episode
}
`,$=`
id
idMal
title {
  romaji
  english
  native
  userPreferred
}
type
format
status
description
startDate {
  year
  month
  day
}
endDate {
  year
  month
  day
}
season
seasonYear
seasonInt
episodes
duration
chapters
volumes
countryOfOrigin
updatedAt
coverImage {
  extraLarge
  large
  medium
  color
}
rankings {
  rank
  type
  context
  allTime
  season
  format
  year
}
bannerImage
genres
synonyms
averageScore
popularity
trending
favourites
tags {
  id
  name
  description
  category
  rank
  isGeneralSpoiler
  isMediaSpoiler
  isAdult
  userId
}
relations {
  edges {
    relationType
    node {
      ${n}
    }
  }
  pageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
}
characters {
  edges {
    role
    node {
      id
      image {
        large
        medium
      }
      name {
        first
        middle
        last
        full
        native
        userPreferred
      }
    }
  }
  pageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
}
staff{
  edges {
    role
    node {
      id
      image {
        large
        medium
      }
      name {
        first
        middle
        last
        full
        native
        userPreferred
      }
    }
  }
  pageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
}
studios {
  nodes {
    id
    name
  }
  pageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
}
isAdult
recommendations {
  nodes {
    mediaRecommendation {
      ${n}
    }
  }
  pageInfo {
    total
    perPage
    currentPage
    lastPage
    hasNextPage
  }
}
nextAiringEpisode{
  airingAt
  episode
  timeUntilAiring
}
streamingEpisodes{
  thumbnail
  title
  url
}
externalLinks{
  type
  color
  language
  url
  site
  icon
}
`,_=(t=$)=>`
query Media(
  $id: Int
  $idMal: Int
  $startDate: FuzzyDateInt
  $endDate: FuzzyDateInt
  $season: MediaSeason
  $seasonYear: Int
  $type: MediaType
  $format: MediaFormat
  $status: MediaStatus
  $episodes: Int
  $duration: Int
  $chapters: Int
  $volumes: Int
  $isAdult: Boolean
  $genre: String
  $tag: String
  $minimumTagRank: Int
  $tagCategory: String
  $onList: Boolean
  $licensedBy: String
  $licensedById: Int
  $averageScore: Int
  $popularity: Int
  $source: MediaSource
  $countryOfOrigin: CountryCode
  $isLicensed: Boolean
  $search: String
  $id_not: Int
  $id_in: [Int]
  $id_not_in: [Int]
  $idMal_not: Int
  $idMal_in: [Int]
  $idMal_not_in: [Int]
  $startDate_greater: FuzzyDateInt
  $startDate_lesser: FuzzyDateInt
  $startDate_like: String
  $endDate_greater: FuzzyDateInt
  $endDate_lesser: FuzzyDateInt
  $endDate_like: String
  $format_in: [MediaFormat]
  $format_not: MediaFormat
  $format_not_in: [MediaFormat]
  $status_in: [MediaStatus]
  $status_not: MediaStatus
  $status_not_in: [MediaStatus]
  $episodes_greater: Int
  $episodes_lesser: Int
  $duration_greater: Int
  $duration_lesser: Int
  $chapters_greater: Int
  $chapters_lesser: Int
  $volumes_greater: Int
  $volumes_lesser: Int
  $genre_in: [String]
  $genre_not_in: [String]
  $tag_in: [String]
  $tag_not_in: [String]
  $tagCategory_in: [String]
  $tagCategory_not_in: [String]
  $licensedBy_in: [String]
  $licensedById_in: [Int]
  $averageScore_not: Int
  $averageScore_greater: Int
  $averageScore_lesser: Int
  $popularity_not: Int
  $popularity_greater: Int
  $popularity_lesser: Int
  $source_in: [MediaSource]
  $sort: [MediaSort]
) {
  Media(
    id: $id
    idMal: $idMal
    startDate: $startDate
    endDate: $endDate
    season: $season
    seasonYear: $seasonYear
    type: $type
    format: $format
    status: $status
    episodes: $episodes
    duration: $duration
    chapters: $chapters
    volumes: $volumes
    isAdult: $isAdult
    genre: $genre
    tag: $tag
    minimumTagRank: $minimumTagRank
    tagCategory: $tagCategory
    onList: $onList
    licensedBy: $licensedBy
    licensedById: $licensedById
    averageScore: $averageScore
    popularity: $popularity
    source: $source
    countryOfOrigin: $countryOfOrigin
    isLicensed: $isLicensed
    search: $search
    id_not: $id_not
    id_in: $id_in
    id_not_in: $id_not_in
    idMal_not: $idMal_not
    idMal_in: $idMal_in
    idMal_not_in: $idMal_not_in
    startDate_greater: $startDate_greater
    startDate_lesser: $startDate_lesser
    startDate_like: $startDate_like
    endDate_greater: $endDate_greater
    endDate_lesser: $endDate_lesser
    endDate_like: $endDate_like
    format_in: $format_in
    format_not: $format_not
    format_not_in: $format_not_in
    status_in: $status_in
    status_not: $status_not
    status_not_in: $status_not_in
    episodes_greater: $episodes_greater
    episodes_lesser: $episodes_lesser
    duration_greater: $duration_greater
    duration_lesser: $duration_lesser
    chapters_greater: $chapters_greater
    chapters_lesser: $chapters_lesser
    volumes_greater: $volumes_greater
    volumes_lesser: $volumes_lesser
    genre_in: $genre_in
    genre_not_in: $genre_not_in
    tag_in: $tag_in
    tag_not_in: $tag_not_in
    tagCategory_in: $tagCategory_in
    tagCategory_not_in: $tagCategory_not_in
    licensedBy_in: $licensedBy_in
    licensedById_in: $licensedById_in
    averageScore_not: $averageScore_not
    averageScore_greater: $averageScore_greater
    averageScore_lesser: $averageScore_lesser
    popularity_not: $popularity_not
    popularity_greater: $popularity_greater
    popularity_lesser: $popularity_lesser
    source_in: $source_in
    sort: $sort      
  ) {
    ${t}
  }
}

`,g=`
id
name {
  first
  middle
  last
  full
  native
  alternative
  alternativeSpoiler
  userPreferred
}
image {
  large
  medium
}
description
gender
dateOfBirth {
  year
  month
  day
}
age
bloodType
updatedAt
favourites
`,c=(t=g)=>`
query Character(
  $page: Int = 1
  $perPage: Int = 20
  $id: Int
  $isBirthday: Boolean
  $search: String
  $id_not: Int
  $id_in: [Int]
  $id_not_in: [Int]
  $sort: [CharacterSort]
) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
    characters(
      id: $id
      isBirthday: $isBirthday
      search: $search
      id_not: $id_not
      id_in: $id_in
      id_not_in: $id_not_in
      sort: $sort
    ) {
      ${t}
    }
  }
}
`,i=`
id
name {
  first
  middle
  last
  full
  native
  alternative
  userPreferred
}
language
languageV2
image {
  large
  medium
}
description
primaryOccupations
gender
dateOfBirth {
  year
  month
  day
}
dateOfDeath {
  year
  month
  day
}
age
yearsActive
homeTown
bloodType
isFavourite
updatedAt
favourites
`,u=(t=i)=>`
query Staff(
  $page: Int = 1
  $perPage: Int = 20
  $id: Int
  $isBirthday: Boolean
  $search: String
  $id_not: Int
  $id_in: [Int]
  $id_not_in: [Int]
  $sort: [StaffSort]
) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
    staff(
      id: $id
      isBirthday: $isBirthday
      search: $search
      id_not: $id_not
      id_in: $id_in
      id_not_in: $id_not_in
      sort: $sort
    ) {
      ${t}
    }
  }
}
`,p="https://graphql.anilist.co",s=async(t,r)=>{const a=await l(p,{query:t,variables:r});return a==null?void 0:a.data},m=async(t,r)=>{const a=await s(_(r),t);return{...a==null?void 0:a.Media}},y=async(t,r)=>{const a=`
    ${g}
    media {
      edges {
        characterRole
        node {
          ${n}
        }
        voiceActorRoles {
          roleNotes
          voiceActor {
            ${i}
          }
        }
      }
    }
  `,e=await s(c(r||a),{...t,perPage:1});return e!=null&&e.Page.characters?e==null?void 0:e.Page.characters[0]:null},f=async(t,r)=>{const a=`
    ${i}
    characterMedia {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      edges {
        characterRole
        node {
          id
          type
          coverImage {
            color
            extraLarge
            large
            medium
          }
          title {
            userPreferred
            english
          }
          format
          startDate {
            year
          }
        }
        characters {
          id
          name {
            userPreferred
          }
          image {
            large
            medium
          }
        }
      }
    }
  `,e=await s(u(r||a),{...t,perPage:1});return e!=null&&e.Page.staff?e==null?void 0:e.Page.staff[0]:null};export{f as a,m as b,y as g};
