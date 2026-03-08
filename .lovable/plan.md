

# Government Schemes & Information Portal (India)

A dynamic website where users enter their profile (age, gender, income, occupation, state, category) and instantly get matched with relevant government schemes, along with general government information like budget highlights and news.

## Architecture

Since no backend (Supabase/Cloud) is connected, this will be a **fully client-side app** with:
- Pre-loaded database of 30+ popular Indian government schemes stored as TypeScript data
- Client-side filtering/matching engine based on user profile
- Static government info pages (Union Budget highlights, key statistics)
- Live news feed via embedded widgets or public RSS-like sources

## Pages & Components

1. **Home Page** - Hero section with quick profile form, featured schemes, government highlights
2. **Profile Form** - Collects: name, age, gender, state, income range, occupation, category (SC/ST/OBC/General), education level
3. **Scheme Results Page** - Filtered list of matching schemes with eligibility badges
4. **Scheme Detail Page** - Full details: benefits, eligibility criteria, documents needed, how to apply (step-by-step), official links
5. **Government Info Page** - Union Budget summary, key economic indicators, ministry links
6. **Search & Filter** - Search schemes by name/category, filter by ministry/type

## Data Model (Client-Side)

```text
Scheme {
  id, name, ministry, description,
  eligibility: { minAge, maxAge, gender, maxIncome, occupations[], states[], categories[], education },
  benefits: string,
  howToApply: string[],  // step-by-step
  documentsRequired: string[],
  officialUrl: string,
  type: "central" | "state"
}

UserProfile {
  age, gender, state, income, occupation, category, education
}
```

## Scheme Database (Initial Set)

Will include 30+ schemes across categories:
- Employment: MGNREGA, PM-SVANidhi, PMEGP
- Education: National Scholarship Portal schemes, PM Vidyalakshmi
- Health: Ayushman Bharat, PM Jan Arogya Yojana
- Housing: PM Awas Yojana (Urban/Rural)
- Agriculture: PM-KISAN, Fasal Bima Yojana
- Women & Child: Beti Bachao Beti Padhao, Ujjwala Yojana
- Social Security: PM Jeevan Jyoti, Atal Pension Yojana
- Business: Mudra Loan, Startup India

## Matching Engine

Simple client-side filter that checks each scheme's eligibility criteria against the user's profile and returns matched schemes sorted by relevance.

## File Structure

```text
src/
  data/
    schemes.ts          # All scheme data
    budgetInfo.ts       # Budget highlights & stats
  components/
    ProfileForm.tsx     # User profile input form
    SchemeCard.tsx       # Scheme preview card
    SchemeDetail.tsx     # Full scheme info
    BudgetHighlights.tsx
    Header.tsx / Footer.tsx
  lib/
    matchSchemes.ts     # Matching/filtering logic
  pages/
    Index.tsx           # Landing page
    Schemes.tsx         # Results page
    SchemeDetailPage.tsx
    GovernmentInfo.tsx
    About.tsx
```

## UI Design

- Clean, accessible design with Indian tricolor accents (saffron/green highlights)
- Card-based scheme display with eligibility match percentage
- Step-by-step "How to Apply" sections with numbered steps
- Mobile-responsive layout
- Search bar with category filters

## Future Enhancements (requires Supabase)

- User accounts to save profiles and bookmark schemes
- Live data via Perplexity/Firecrawl connectors for real-time government updates
- Admin panel to manage scheme database

