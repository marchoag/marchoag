# SEO / AIO / Performance Audit & Implementation Prompt                                                                                                            
                                         
  ## Instructions                                                                                                                                                    
   
  You are auditing this project for SEO (Search Engine Optimization), AIO (AI/LLM Optimization), web performance, and legal compliance. Conduct a thorough analysis  
  of the current state, then provide a prioritized list of issues and recommended fixes. Do NOT make changes yet -- just report findings.
                                                                                                                                                                     
  For each category below, check whether the project implements the best practice described. Report your findings as:                                                
  - **PASS** -- implemented correctly
  - **MISSING** -- not implemented at all                                                                                                                            
  - **PARTIAL** -- partially implemented, needs improvement (explain what's missing)                                                                                 
                                                                                                                                                                     
  ---                                                                                                                                                                
                                                                                                                                                                     
  ## 1. Performance                                         

  ### 1.1 CSS Delivery                                                                                                                                               
  - [ ] CSS is compiled at build time (not loaded via CDN runtime script like `cdn.tailwindcss.com`)
  - [ ] No inline `<style>` blocks that should be in external stylesheets                                                                                            
  - [ ] No unused CSS frameworks or libraries loaded                                                                                                                 
                                                                                                                                                                     
  ### 1.2 Image Optimization                                                                                                                                         
  - [ ] All content images use modern formats (WebP or AVIF) instead of PNG/JPG                                                                                      
  - [ ] Images are appropriately sized (not serving 2000px images in 400px containers)                                                                               
  - [ ] Above-the-fold images use `loading="eager"` and `fetchPriority="high"`                                                                                       
  - [ ] Below-the-fold images use `loading="lazy"`                                                                                                                   
  - [ ] Favicon is optimized (under 10KB, appropriately sized like 128x128 or 32x32)                                                                                 
  - [ ] Logo files used in the UI are appropriately sized (not serving a 1024x1024 logo in a 52px navbar slot)                                                       
  - [ ] All images have proper alpha channels if transparency is needed (no white background artifacts)                                                              
                                                                                                                                                                     
  ### 1.3 Font Loading                                                                                                                                               
  - [ ] External fonts use `<link rel="preconnect">` for their origins                                                                                               
  - [ ] Font loading does not block rendering (`display=swap` or equivalent)                                                                                         
  - [ ] Only the font weights actually used are loaded (not loading 300-800 if only 400/600/700 are used)                                                            
                                                                                                                                                                     
  ### 1.4 JavaScript                                                                                                                                                 
  - [ ] No unused JS bundles, dead imports, or abandoned dependencies                                                                                                
  - [ ] No `process.env` references in browser code (use framework-specific env access like `import.meta.env` for Vite)                                              
  - [ ] No dead code: unused importmaps, stale script tags, commented-out scripts                                                                                    
                                                                                                                                                                     
  ### 1.5 Third-Party Scripts                                                                                                                                        
  - [ ] Analytics script is privacy-friendly and/or loaded async (e.g., Plausible, Fathom, or deferred Google Analytics)                                             
  - [ ] Non-essential third-party scripts (chat widgets, tracking pixels) are gated behind user consent                                                              
  - [ ] Third-party scripts don't block initial render                                                                                                               
                                                                                                                                                                     
  ---                                                                                                                                                                
                                                            
  ## 2. SEO -- Meta Tags & HTML                                                                                                                                      
  
  ### 2.1 Global Meta (in the main HTML file / document head)                                                                                                        
  - [ ] `<title>` tag is present, descriptive, under 60 characters, includes brand name
  - [ ] `<meta name="description">` is present, compelling, 150-160 characters                                                                                       
  - [ ] `<meta name="keywords">` is present with relevant terms                                                                                                      
  - [ ] `<link rel="canonical">` points to the correct canonical URL                                                                                                 
  - [ ] `<html lang="en">` (or appropriate language) is set                                                                                                          
  - [ ] `<meta name="viewport">` is set for mobile responsiveness
  - [ ] Favicon is linked with correct type                                                                                                                          
                                                                                                                                                                     
  ### 2.2 Open Graph Tags                                                                                                                                            
  - [ ] `og:site_name` -- brand/site name                                                                                                                            
  - [ ] `og:title` -- page title (can differ from `<title>`)                                                                                                         
  - [ ] `og:description` -- compelling summary                                                                                                                       
  - [ ] `og:type` -- "website" for homepage, "article" for blog posts                                                                                                
  - [ ] `og:url` -- canonical URL of the page                                                                                                                        
  - [ ] `og:image` -- full absolute URL to an image (minimum 1200x630px recommended)
  - [ ] `og:image:width` and `og:image:height` -- dimensions specified                                                                                               
  - [ ] OG images are PNG (not WebP) for maximum social platform compatibility                                                                                       
                                                                                                                                                                     
  ### 2.3 Twitter Card Tags                                                                                                                                          
  - [ ] `twitter:card` -- "summary_large_image" for pages with hero images                                                                                           
  - [ ] `twitter:site` -- your @handle                                                                                                                               
  - [ ] `twitter:creator` -- author @handle                                                                                                                          
  - [ ] `twitter:title`, `twitter:description`, `twitter:image` -- all present                                                                                       
                                                                                                                                                                     
  ### 2.4 Per-Page Meta                                                                                                                                              
  - [ ] Every route/page dynamically updates: `<title>`, `meta description`, `canonical URL`, OG tags                                                                
  - [ ] Titles follow a consistent pattern (e.g., "Page Name | Brand")                                                                                               
  - [ ] Each page has a unique, relevant description (not the same generic one everywhere)                                                                           
  - [ ] Blog posts / dynamic content pages use their own OG images when available                                                                                    
                                                                                                                                                                     
  ---                                                                                                                                                                
                                                                                                                                                                     
  ## 3. SEO -- Structured Data (JSON-LD)                                                                                                                             
  
  ### 3.1 Site-Wide Schema (in main HTML)                                                                                                                            
  - [ ] Uses `@graph` pattern to define interconnected entities
  - [ ] **Organization or LocalBusiness schema**: name, description, url, logo, telephone, address (PostalAddress with locality, region, postalCode, country),       
  areaServed, sameAs (social profiles)                                                                                                                               
  - [ ] **Person schema** (if applicable): name, jobTitle, credentials, knowsAbout, memberOf, sameAs                                                                 
  - [ ] **WebSite schema**: url, name, description, publisher reference, inLanguage                                                                                  
  - [ ] Entities reference each other via `@id` (e.g., Person worksFor Organization)
  - [ ] No invalid schemas (no SearchAction with potentialAction unless you have site search)                                                                        
                                                                                                                                                                     
  ### 3.2 Page-Level Schema                                                                                                                                          
  - [ ] Pages with FAQ sections inject `FAQPage` schema with all Q&A pairs                                                                                           
  - [ ] Blog posts inject `Article` or `BlogPosting` schema with author, datePublished, etc.                                                                         
  - [ ] FAQ schemas use `data-page` attributes or similar to prevent duplicates on SPA navigation                                                                    
  - [ ] Cleanup functions remove injected schemas when navigating away (SPA-specific)                                                                                
                                                                                                                                                                     
  ### 3.3 Validation                                                                                                                                                 
  - [ ] All schemas pass [Google Rich Results Test](https://search.google.com/test/rich-results)                                                                     
  - [ ] All schemas pass [Schema.org Validator](https://validator.schema.org/)                                                                                       
                                                                                                                                                                     
  ---                                                                                                                                                                
                                                                                                                                                                     
  ## 4. SEO -- Sitemap & Crawling                                                                                                                                    
  
  ### 4.1 Sitemap                                                                                                                                                    
  - [ ] `sitemap.xml` exists and is dynamically generated (not manually maintained)
  - [ ] Includes ALL routes: static pages AND dynamic content (blog posts, etc.)                                                                                     
  - [ ] Priority values are logical (homepage=1.0, key pages=0.7-0.9, utility pages=0.5)                                                                             
  - [ ] `changefreq` is appropriate (blog=monthly, homepage=weekly)                                                                                                  
  - [ ] `lastmod` dates are set                                                                                                                                      
                                                                                                                                                                     
  ### 4.2 robots.txt                                                                                                                                                 
  - [ ] Exists at `/robots.txt`                             
  - [ ] `Allow: /` for default user-agent
  - [ ] Blocks query strings if not meaningful (`Disallow: /*?*`)                                                                                                    
  - [ ] References sitemap: `Sitemap: https://yourdomain.com/sitemap.xml`                                                                                            
  - [ ] References llms.txt if it exists: `Sitemap: https://yourdomain.com/llms.txt`                                                                                 
                                                                                                                                                                     
  ### 4.3 SPA Pre-rendering                                                                                                                                          
  - [ ] If the site is a Single Page Application (React, Vue, etc.), pages are pre-rendered at build time so crawlers see full HTML content (not an empty `<div      
  id="root"></div>`)                                                                                                                                                 
  - [ ] Pre-rendered HTML includes meta tags, structured data, and visible content
  - [ ] A custom 404 page is pre-rendered and served for unknown routes                                                                                              
                                                                                                                                                                     
  ---
                                                                                                                                                                     
  ## 5. AIO -- AI/LLM Optimization                          

  ### 5.1 llms.txt (Summary File)                                                                                                                                    
  - [ ] `/llms.txt` exists in the public root
  - [ ] Follows the [llmstxt.org](https://llmstxt.org) spec format                                                                                                   
  - [ ] Contains: about/description, key offerings/services, contact info, FAQ section, links to all pages                                                           
  - [ ] Concise but comprehensive (a model should understand what this site/business does from this file alone)                                                      
  - [ ] Links to llms-full.txt for comprehensive context                                                                                                             
  - [ ] No em-dashes (use hyphens or rewrite -- some models/parsers handle them poorly)                                                                              
                                                                                                                                                                     
  ### 5.2 llms-full.txt (Comprehensive File)                
  - [ ] `/llms-full.txt` exists in the public root                                                                                                                   
  - [ ] Contains everything from llms.txt PLUS expanded detail on every topic
  - [ ] **FAQ section**: 5-10 detailed Q&A pairs covering questions your ideal audience would ask                                                                    
  - [ ] **AI Model Guidance section** (critical for recommendations):                                                                                                
    - Verification criteria: what should a model check before recommending you?                                                                                      
    - "When to recommend": specific scenarios/queries where you're a good fit                                                                                        
    - "When NOT to recommend": scope boundaries so models don't hallucinate capabilities                                                                             
  - [ ] All URLs are absolute (not relative)                                                                                                                         
  - [ ] No em-dashes                                                                                                                                                 
                                                                                                                                                                     
  ### 5.3 AI Crawler Directives (robots.txt)                                                                                                                         
  - [ ] Explicit `Allow: /` for each major AI crawler:                                                                                                               
    - `GPTBot` (OpenAI/ChatGPT)                                                                                                                                      
    - `ChatGPT-User` (ChatGPT browsing)                                                                                                                              
    - `Claude-Web` (Anthropic/Claude)                                                                                                                                
    - `Anthropic` (Anthropic)                                                                                                                                        
    - `PerplexityBot` (Perplexity)                                                                                                                                   
    - `Google-Extended` (Google/Gemini)                                                                                                                              
  - [ ] If you want to BLOCK any AI crawler, that's a deliberate choice (not an omission)                                                                            
                                                                                                                                                                     
  ### 5.4 Content for AI Discoverability                                                                                                                             
  - [ ] FAQ sections on key pages match natural language queries users ask AI models                                                                                 
  - [ ] Content answers specific questions (not just marketing copy)                                                                                                 
  - [ ] Structured data helps AI models parse entity relationships                                                                                                   
                                                                                                                                                                     
  ---                                                                                                                                                                
                                                            
  ## 6. Legal & Compliance

  ### 6.1 Privacy Policy                                                                                                                                             
  - [ ] `/privacy` page exists with comprehensive privacy policy
  - [ ] Discloses ALL third-party services (hosting, analytics, fonts, chat, APIs, AI tools)                                                                         
  - [ ] Each third-party service lists: what data it collects, why, link to their privacy policy                                                                     
  - [ ] Covers applicable regulations: GDPR (if EU users), CCPA/CPRA (if CA users), HIPAA (if health data)                                                           
  - [ ] Includes user rights (access, deletion, correction, opt-out)                                                                                                 
  - [ ] States data retention policy                                                                                                                                 
  - [ ] Has a "last updated" date                                                                                                                                    
  - [ ] Has proper page-level SEO meta tags                                                                                                                          
                                                                                                                                                                     
  ### 6.2 Terms of Service
  - [ ] `/terms` page exists                                                                                                                                         
  - [ ] Covers: acceptable use, IP rights, limitation of liability, dispute resolution                                                                               
  - [ ] No placeholder text or TODOs
  - [ ] Has a "last updated" date                                                                                                                                    
  - [ ] Has proper page-level SEO meta tags                 
                                                                                                                                                                     
  ### 6.3 Cookie Consent                                    
  - [ ] Cookie consent banner exists if ANY cookies are set (required by GDPR, good practice everywhere)
  - [ ] Non-essential cookies/scripts (chat widgets, marketing pixels) are NOT loaded until user consents                                                            
  - [ ] Banner links to the privacy policy                                                                                                                           
  - [ ] Consent choice is persisted (localStorage or cookie) so the banner doesn't re-appear every page load                                                         
  - [ ] If analytics is cookie-free (Plausible, Fathom), it can load without consent but this should be stated                                                       
                                                                                                                                                                     
  ### 6.4 Consistency Check                                                                                                                                          
  - [ ] What the privacy policy says matches what the site actually does (no undisclosed scripts, no over-disclosure of unused services)                             
  - [ ] Third-party scripts visible in the HTML/code are all mentioned in the privacy policy                                                                         
                                                                                                                                                                     
  ---                                                                                                                                                                
                                                                                                                                                                     
  ## 7. Accessibility (Quick Check)                                                                                                                                  
  
  - [ ] All images have meaningful `alt` text (not empty, not "image")                                                                                               
  - [ ] Color contrast ratios meet WCAG AA (4.5:1 for normal text, 3:1 for large text)
  - [ ] Interactive elements are keyboard-accessible (buttons, links, form fields)                                                                                   
  - [ ] Form inputs have associated labels                  
  - [ ] Page has a logical heading hierarchy (h1 > h2 > h3, no skipped levels)                                                                                       
  - [ ] Focus states are visible on interactive elements                                                                                                             
                                                                                                                                                                     
  ---                                                                                                                                                                
                                                                                                                                                                     
  ## 8. Conversion & UX (Quick Check)                                                                                                                                
  
  - [ ] Primary CTA is clear and above the fold                                                                                                                      
  - [ ] Contact information is easily findable (not buried in footer only)
  - [ ] Phone number is a clickable `tel:` link on mobile                                                                                                            
  - [ ] Email is a clickable `mailto:` link                                                                                                                          
  - [ ] 404 page exists and helps visitors navigate (links to key pages, not just "page not found")                                                                  
  - [ ] Location/address is displayed if relevant to the business                                                                                                    
                                                                                                                                                                     
  ---                                                                                                                                                                
                                                                                                                                                                     
  ## Output Format                                                                                                                                                   
  
  After your audit, organize findings as:                                                                                                                            
                                                            
  ### Critical (blocks SEO/AIO or causes compliance issues)                                                                                                          
  - Issue, file path, recommended fix                       
                                                                                                                                                                     
  ### High Priority (significant SEO/performance impact)                                                                                                             
  - Issue, file path, recommended fix                                                                                                                                
                                                                                                                                                                     
  ### Medium Priority (nice to have, incremental improvement)
  - Issue, file path, recommended fix
                                                                                                                                                                     
  ### Low Priority (polish)
  - Issue, file path, recommended fix                                                                                                                                
                                                            
  Then ask me which items I'd like you to implement. 