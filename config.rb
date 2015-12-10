# ==============================================================================
# [1] Setting
# ==============================================================================
Time.zone = 'Tokyo'

set :site_url,         'http://chocolateboard.net'
set :site_title,       'chocolateboard.'
set :site_description, 'Online portfolio of UI designer + Front-end engineer: akey.'
set :site_author,      'akey'

set :feed_atom_url, '/feed.atom'
set :feed_rss_url,  '/feed.rss'

set :blog_url,      'http://log.chocolateboard.net'
set :twitter_url,   'https://twitter.com/urakey'
set :facebook_url,  'https://www.facebook.com/urakey'
set :pinterest_url, 'http://pinterest.com/urakey'
set :github_url,    'https://github.com/urakey'

set :css_dir,    'assets/styles'
set :js_dir,     'assets/scripts'
set :images_dir, 'assets/images'
set :fonts_dir,  'assets/fonts'

# @analytics_account = false

# ==============================================================================
# [2] Contents
# ==============================================================================
activate :blog do |blog|
  blog.layout = 'layouts/layout'
  blog.tag_template = 'tag.html'
  blog.calendar_template = 'calendar.html'

  blog.sources    = 'entries/{year}/{month}/{title}.html'
  blog.permalink  = '{title}/index.html'
  blog.taglink    = 'tag/{tag}/index.html'
  blog.year_link  = '{year}/index.html'
  blog.month_link = '{year}/{month}/index.html'
  blog.day_link   = '{year}/{month}/{day}/index.html'

  blog.summary_length    = 150
  blog.summary_separator = /(READMORE)/
  blog.default_extension = '.markdown'

  # Enable pagination
  blog.paginate = true
  blog.per_page = 10
  blog.page_link = 'page/{num}'

  blog.custom_collections = {
    category: {
      link: '/{category}/index.html',
      template: '/category.html'
    }
  }
end

page 'entries/*',    :layout => :layout_article
page '/feed.rss',    :layout => false
page '/feed.atom',   :layout => false
page '/sitemap.xml', :layout => false

# ==============================================================================
# [3] Tools
# ==============================================================================
set :index_file, 'index.html'
activate :directory_indexes
# activate :automatic_image_sizes

# Slim
set :slim,
    :format => :html5,
    :sort_attrs => false,
    :pretty => true

# Similar
activate :similar
# activate :similar, :algorithm => :'word_frequency/tree_tagger'
# activate :similar, :algorithm => :'word_frequency/mecab'
# activate :similar, :algorithm => :levenshtein
# activate :similar, :algorithm => :damerau_levenshtein

# Markdown
class CustomRenderer < Redcarpet::Render::HTML
  def image(link, title, alt_text)
    if title && alt_text
      "<figure><a href=\"#{link}\"><img src=\"#{link}\" alt=\"#{alt_text}\"></a><figcaption>#{title}</figcaption></figure>"
    elsif alt_text == nil
      "<img src=\"#{link}\" alt=\"\">"
    else
      "<figure><a href=\"#{link}\"><img src=\"#{link}\" alt=\"#{alt_text}\"></a></figure>"
    end
  end
  def postprocess(full_document)
    full_document
      .gsub(/<p>\[gist:(.+)\]<\/p>/, '<div class="gist"><script src="https://gist.github.com/urakey/\1.js"></script></div>')
      .gsub(/<p>\[codepen:(.+):(.+)\]<\/p>/, '<p data-height="\2" data-theme-id="7235" data-slug-hash="\1" default_tab="result" user="akey" class="codepen">See the Pen by akey (<a href="http://codepen.io/akey">@akey</a>) on <a href="http://codepen.io">CodePen</a>.</p><script async src="//assets.codepen.io/assets/embed/ei.js"></script>')
      .gsub(/<p>\[section:(.+)\]<\/p>/, '<section id="p\1">')
      .gsub(/<p>\[\/section\]<\/p>/, '</section>')
      .gsub(/<p>\[notes:\](.+)<\/p>/, '<p class="notes">\1</p>')
      .gsub(/<p>\[cite:\](.+)<\/p>/, '<p><cite>\1</p>')
      .gsub(/~~(.+)~~/, '<del>\1</del>')
      .gsub(/\[wbr\]/, '<wbr>')
      .gsub(/<p>\[scrollable:\]<\/p>/, '<div class="scrollable-horizontal">')
      .gsub(/<p>\[\/scrollable\]<\/p>/, '</div>')
      # .gsub(/<p>\[links:\]<\/p>[\s\S]*<ul>/, '<ul class="links">')
  end
end

set :markdown_engine, :redcarpet
set :markdown,
    :tables => true,
    :autolink => true,
    :gh_blockcode => true,
    :fenced_code_blocks => true,
    :smartypants => true,
    :hard_wrap => true,
    :no_intra_emphasis => true,
    :renderer => CustomRenderer

# Syntax
activate :rouge_syntax, :lineanchor => 'line'

# Compass
compass_config do |config|
  config.line_comments = false
  config.sass_options = { :debug_info => false }
end

# ==============================================================================
# [4] Helpers
# ==============================================================================
helpers do
  def slashless_stylesheet_link_tag(*source)
    (stylesheet_link_tag(*source)).gsub(/\s\/>/, '>')
  end
end

# ==============================================================================
# [5] Ready
# ==============================================================================

# ==============================================================================
# [6] After configuration
# ==============================================================================
# Bower configuration
after_configuration do
  sprockets.append_path "#{root}/node_modules/"

  sprockets.import_asset 'jquery/dist/jquery.min.map' do
    Pathname.new(js_dir + '/jquery.min.map')
  end
  sprockets.import_asset 'html5shiv/dist/html5shiv.min.js' do
    Pathname.new(js_dir + '/html5shiv.min.js')
  end

  sprockets.import_asset 'font-awesome/fonts/fontawesome-webfont.eot' do
    Pathname.new(fonts_dir + '/fontawesome-webfont.eot')
  end
  sprockets.import_asset 'font-awesome/fonts/fontawesome-webfont.ttf' do
    Pathname.new(fonts_dir + '/fontawesome-webfont.ttf')
  end
  sprockets.import_asset 'font-awesome/fonts/fontawesome-webfont.woff' do
    Pathname.new(fonts_dir + '/fontawesome-webfont.woff')
  end
  sprockets.import_asset 'font-awesome/fonts/fontawesome-webfont.woff2' do
    Pathname.new(fonts_dir + '/fontawesome-webfont.woff2')
  end
  sprockets.import_asset 'font-awesome/fonts/FontAwesome.otf' do
    Pathname.new(fonts_dir + '/FontAwesome.otf')
  end

end

# ==============================================================================
# [7] Development
# ==============================================================================
configure :development do
  activate :livereload
end

# ==============================================================================
# [8] Build
# ==============================================================================
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :minify_html, :remove_quotes => false, :remove_intertag_spaces => true
  activate :imageoptim
  activate :gzip
  # activate :asset_hash
  # activate :relative_assets
  # set :http_prefix, '/Content/images/'
end

# ==============================================================================
# [9] Deploy
# ==============================================================================
activate :deploy do |deploy|
  deploy.method = :git
  deploy.branch = 'gh-pages'
end
