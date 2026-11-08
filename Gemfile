source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 4.1"

# Hydejack v9.2.1 is merged directly into this repo, so no theme gem is needed.
# Math is rendered client-side with MathJax (see `kramdown.math_engine` in _config.yml).

# Fixes `jekyll serve` in ruby 3
gem "webrick"

group :jekyll_plugins do
  gem "jekyll-default-layout"
  gem "jekyll-feed"
  gem "jekyll-optional-front-matter"
  gem "jekyll-paginate"
  gem "jekyll-readme-index"
  gem "jekyll-redirect-from"
  gem "jekyll-relative-links"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-titles-from-headings"
  gem "jekyll-include-cache"
  gem "jekyll-avatar"
  
  # Non-Github Pages plugins:
  gem "jekyll-last-modified-at"
  gem "jekyll-compose"
  
  # # Github Pages Locally
  # gem "github-pages", group: :jekyll_plugins
  # gem "jekyll-include-cache", group: :jekyll_plugins

end

gem 'wdm' if Gem.win_platform?
gem "tzinfo-data" if Gem.win_platform?
