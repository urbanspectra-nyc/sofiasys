## Sofiasys Laptop Sales Site
- We manage project from this ghmd file, initially...  and then...
  - [Project Issues](https://github.com/urbanspectra-nyc/sofiasys/issues)
  - [Github Project](https://github.com/urbanspectra-nyc/sofiasys/projects?type=beta)
---
### Site Map
- 1. SofiaSys Home Page => [ BUY | SELL ] => Site Map
  - 2. Device Type Choice Page => [ laptops + smartphones ] => device-types.html
    - 3. Device Type Landing Page => landing-page-{laptops,smartphones}.html (many)
      - 4. Device Type Item Details Page => product-details-{laptop,smartphone}-nn.html (one)
       - 5. Site Map
       - 6. Custom 404 Error Page
       - 7. Contact Us

- => Other Device Types On Our Radar: Tablets + Desktops + Clusters + Bundles
---
#### Suggested Orders
  - First Order: $40 - [ 2 existing pages plus device type = smartphones => github pages + og + seo ]
  - Second Order: $40 - 2 templates = [ item detail page + landing page element templates ] for laptops and smartphones => github pages
  - Third Order: $40 - Two domains @ github with https
  - Fourth Order: $40 - Script per device platform for auto-inject-tpls
  - Fifth Order: $40 - Host Static Site at AWS+GCP+Azure
---
- Sample Sites For Ideas:
  - [Device Type Choice Page](https://eshop.macsales.com/shop/Apple_Systems/Used/Macs_and_Tablets)
  - [Buy+Sell Smartphones+Laptops](https://www.gazelle.com/)



#### Project Log

  - [Pruning css](https://github.com/purifycss/purifycss) always sounds wise.




- 1-6-2022: Three of the main 4 static pages are ready for edits.  Merged them into master.
  - Three out of four pages are ready for final edits.
  - 1. final edits => [issues](https://github.com/urbanspectra-nyc/sofiasys/issues) Upon salman's return
  - 2. github pages
  - 3. [jekyll theme](https://www.siteleaf.com/blog/making-your-first-jekyll-theme-part-1/)
  - 4. create templates from html pages => Redo content
  - 5. write script to generate yaml file + photos to inject into templates:  device type landing page template + item detail template
  - 6. SEO + ads
  - 7. Github actions
  - 8. i18n



- 1-1-2022: First contract pending for two static pages.  Awaiting first review meeting scheduled.

- Two other pages will folow:
    - [Home](https://drive.google.com/file/d/1fhoXLHbRS-gPBW5FpKyCBNduUduC-Gnq/view?usp=sharing) This is bare bones to start, with custom header and footer.  SEO IS IMPORTANT!
    - Includes custom 404 error page, where we will use [this](https://codepen.io/shankarcabus/pen/hBbDi)


  - Once the static files are approved, we will use them to [create templates](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll).
  - [Selenium testing](https://getpocket.com/read/3514991581) sounds wise.
  - [Pruning css](https://github.com/purifycss/purifycss) always sounds wise.
  - We will move to [jekyll](http://henrythemes.github.io/jekyll-bootstrap-theme/)
  - [Jekyll repo dir structure](http://jekyllrb.com/docs/structure/)
  - Good series of tutorials on [ghub pages and jekyll themes](https://www.youtube.com/watch?v=EvYs1idcGnM&t=0s&ab_channel=BillRaymond)
  - We will move to [i18n](https://forestry.io/blog/creating-a-multilingual-blog-with-jekyll/) • [emoji flags](https://flagpedia.net/emoji)
  - [Other ui stuff I will play with at the end](https://www.alessioatzeni.com/mac-osx-lion-css3/)
